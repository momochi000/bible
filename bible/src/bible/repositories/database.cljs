(ns bible.repositories.database
  (:require [datascript.core :as d]
            [bible.db :refer [schema]]))

(def READING_POSITION_ID #uuid  "00000000-0000-0000-0000-000000000001")
(def SETTINGS_ID #uuid  "00000000-0000-0000-0000-000000000002")

(defonce conn (atom nil))

(defn serialize-db [db]
  (pr-str db))

(defn deserialize-db [schema serialized-str]
  (when serialized-str
    (let [db (cljs.reader/read-string serialized-str)]
      (d/conn-from-db db))))

(defn init-db! []
  (-> (load-from-indexeddb! "main-db")
      (.then (fn [stored-data]
               (if stored-data
                 (do
                   (js/console.log "Loading existing database from IndexedDB")
                   (js/console.log "Data type:" (type stored-data))
                   ;; Load existing database
                   (reset! conn (deserialize-db schema stored-data)))
                 (do
                   (js/console.log "No stored data found, creating new database")
                   ;; Create new database
                   (reset! conn (d/create-conn schema))))
               (js/console.log "Database initialized with"
                               (count (d/datoms @@conn :eavt))
                               "datoms")))
      (.catch (fn [error]
                (js/console.error "Failed to load DB:" error)
                ;; Fallback to new database
                (reset! conn (d/create-conn schema))))))

(defn save-to-indexeddb! [db-name data]
  (js/Promise.
   (fn [resolve reject]
     (let [request (.open js/indexedDB "bible-app" 1)]
       (set! (.-onupgradeneeded request)
             (fn [e]
               (let [db (.. e -target -result)]
                 (.createObjectStore db "datascript"))))
       (set! (.-onsuccess request)
             (fn [e]
               (let [db (.. e -target -result)
                     tx (.transaction db #js ["datascript"] "readwrite")
                     store (.objectStore tx "datascript")]
                 (.put store data db-name)
                 (set! (.-oncomplete tx) #(resolve true))
                 (set! (.-onerror tx) reject))))
       (set! (.-onerror request) reject)))))

(defn load-from-indexeddb! [db-name]
  (js/Promise.
   (fn [resolve reject]
     (let [request (.open js/indexedDB "bible-app" 1)]
       (set! (.-onupgradeneeded request)
             (fn [e]
               (let [db (.. e -target -result)]
                 (.createObjectStore db "datascript"))))
       (set! (.-onsuccess request)
             (fn [e]
               (let [db (.. e -target -result)
                     tx (.transaction db #js ["datascript"] "readonly")
                     store (.objectStore tx "datascript")
                     get-req (.get store db-name)]
                 (set! (.-onsuccess get-req)
                       #(resolve (.. % -target -result)))
                 (set! (.-onerror get-req) reject))))
       (set! (.-onerror request) reject)))))



(defn save-db!  []
  (when @conn
    (js/console.log "Saving database to IndexedDB...")
    (->  (save-to-indexeddb!  "main-db"  (serialize-db @@conn))
         (.then (fn []
                  (js/console.log "Database saved successfully")))
         (.catch #(js/console.error  "Failed to save DB:" %)))))

;; Listen to all transactions and auto-save
(defn start-auto-save! []
  (when @conn
    (js/console.log "Starting auto-save listener")
    (d/listen! @conn :persistence
               (fn [tx-report]
                 (js/console.log "Transaction detected, auto-saving..."
                                 (count (:tx-data tx-report)) "changes")
                 (save-db!)))))


;; Add a bookmark
(defn add-bookmark! [book chapter verse]
  (d/transact! @conn [{:bookmark/id (random-uuid)
                       :bookmark/book book
                       :bookmark/chapter chapter
                       :bookmark/verse verse
                       :bookmark/created-at (.now js/Date)
                       :bookmark/updated-at (.now js/Date)}]))

;; Query bookmarks (returns ClojureScript data)
(defn get-bookmarks []
  (d/q '[:find ?book ?chapter ?verse
         :where
         [?e :bookmark/book ?book]
         [?e :bookmark/chapter ?chapter]
         [?e :bookmark/verse ?verse]]
       @@conn))

;; Query bookmarks (returns JavaScript array for console inspection)
(defn get-bookmarks-js []
  (clj->js (get-bookmarks)))

;; Get all bookmark entities with all their data
(defn get-all-bookmarks []
  (d/q '[:find [(pull ?e [*]) ...]
         :where [?e :bookmark/id]]
       @@conn))

;; Get all bookmark entities as JavaScript objects
(defn get-all-bookmarks-js []
  (clj->js (get-all-bookmarks)))


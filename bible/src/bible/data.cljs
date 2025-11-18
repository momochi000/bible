(ns bible.data
  (:require [cljs.reader :as reader]))

(defonce bible-data (atom nil))

(defn load-bible-json! []
  "Load and parse the Bible JSON from the HTML script tag"
  (when-let [bible-element (js/document.getElementById "bible-data")]
    (let [json-text (.-textContent bible-element)
          parsed-data (js->clj (js/JSON.parse json-text) :keywordize-keys true)]
      (reset! bible-data parsed-data)
      (js/console.log "Bible loaded:"
                      (count (:books parsed-data)) "books,"
                      "first book:" (:name (first (:books parsed-data)))))))

(defn get-book [book-name]
  "Get a book by name, e.g. 'Genesis'"
  (->> (:books @bible-data)
       (filter #(= (:name %) book-name))
       first))

(defn get-chapter [book-name chapter-num]
  "Get a specific chapter from a book"
  (when-let [book (get-book book-name)]
    (->> (:chapters book)
         (filter #(= (:chapter %) chapter-num))
         first)))

(defn get-verse [book-name chapter-num verse-num]
  "Get a specific verse"
  (when-let [chapter (get-chapter book-name chapter-num)]
    (->> (:verses chapter)
         (filter #(= (:verse %) verse-num))
         first)))

(defn get-book-names []
  "Get list of all book names"
  (mapv :name (:books @bible-data)))

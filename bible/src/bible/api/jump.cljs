(ns bible.api.jump)

(defn change-book!
  "Change the currently active/selected book of the bible"
  [app-state new-book]
  (let [curr-book (:current-book @app-state)]
    (swap! app-state assoc :current-chapter 1)
    (swap! app-state assoc :current-verse 1)
    (if (not= curr-book new-book)
       (swap! app-state assoc :current-book new-book))))

(defn change-chapter!
  "Change the currently active/selected chapter of the bible"
  [app-state new-chapter] ;; new-chapter should be a number but we'll cast it to be safe
  (let [new-chapter-int (js/parseInt new-chapter)
    curr-chapter (:current-chapter @app-state) ]
    (swap! app-state assoc :current-verse 1)
    (if (not= curr-chapter new-chapter-int)
       (swap! app-state assoc :current-chapter new-chapter-int))))

(defn change-verse!
  "Change the currently active/selected verse of the bible"
  [app-state new-verse]
  (let [curr-verse (:current-verse @app-state)]
    (if (not= curr-verse new-verse)
       (swap! app-state assoc :current-verse new-verse))))

(ns bible.api.jump)

(defn change-book!
  "Change the currently active/selected book of the bible"
  [app-state new-book]
  (let [curr-book (:current-book @app-state)]
    (swap! app-state assoc :current-chapter 1)
    (if (not= curr-book new-book)
       (swap! app-state assoc :current-book new-book))))

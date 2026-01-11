(ns bible.api.jump
  (:require [bible.data :refer [get-book-names get-chapter-names-in-book get-verse-numbers-in-chapter]]
            [bible.state :refer [app-state]]
            ))


(defn previous-value
  "given a vector and a value which lies within the vector, return the item
  that comes before the given value from the vector.
  if val is the first item in v, then return val
  also if val is not present in v"
  [v val]
  (let [i (.indexOf v val)]
    (when (and (number? i) (pos? i))
      (nth v (dec i)))))

(defn change-book!
  "Change the currently active/selected book of the bible"
  [new-book]
  (let [curr-book (:current-book @app-state)]
    (swap! app-state assoc :current-chapter 1)
    (swap! app-state assoc :current-verse 1)
    (if (not= curr-book new-book)
       (swap! app-state assoc :current-book new-book))))

(defn change-chapter!
  "Change the currently active/selected chapter of the bible"
  [new-chapter] ;; new-chapter should be a number but we'll cast it to be safe
  (let [new-chapter-int (js/parseInt new-chapter)
    curr-chapter (:current-chapter @app-state) ]
    (swap! app-state assoc :current-verse 1)
    (if (not= curr-chapter new-chapter-int)
       (swap! app-state assoc :current-chapter new-chapter-int))))

(defn change-verse!
  "Change the currently active/selected verse of the bible"
  [new-verse]
  (let [curr-verse (:current-verse @app-state)]
    (if (not= curr-verse new-verse)
       (swap! app-state assoc :current-verse new-verse))))

(defn move-previous-chapter!
  "Decrement the current chapter of the current book"
  ;; if we're on chapter 1, then need to move to the previous book
  ;;                        and the final chapter and verse
  ;; if we're on genesis 1, then dont' do anything
  []
  (let [curr-chapter (:current-chapter @app-state)]
    (if (== curr-chapter 1)
      (let [curr-book (:current-book @app-state)]
        (if (not= curr-book "Genesis")
          (do
            ;; Move to the previous book
            (swap! app-state assoc :current-book
                     (previous-value (get-book-names) curr-book))
            (let [last-chapter
                  (->
                    (last (get-chapter-names-in-book curr-book))
                    (js/parseInt))]
              ;; move to the last chapter of that book
              (swap! app-state assoc :current-chapter last-chapter)
              ;; move to the last verse of that chapter
              (swap! app-state assoc :current-verse
                     (last (get-verse-numbers-in-chapter curr-book last-chapter)))))))
      (change-chapter! (dec curr-chapter)))))

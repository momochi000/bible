(ns bible.api.jump
  (:require [bible.data :refer [ get-book-names
                                get-chapters-in-book
                                get-chapter-numbers-in-book
                                get-verse-numbers-in-chapter ]]
            [bible.state :refer [app-state]]
            ))


(defn- previous-value
  "given a vector and a value which lies within the vector, return the item
  that comes before the given value from the vector.
  if val is the first item in v, then return val
  also if val is not present in v"
  [v val]
  (let [i (.indexOf v val)]
    (when (and (number? i) (pos? i))
      (nth v (dec i)))))

(defn- next-value
  [v val]
  (let [i (.indexOf v val)]
    (when (and
            (number? i)
            ;; the current value is not the last item in the list
            (< i (count v)))
      (nth v (inc i)))))

(defn change-book!
  "Change the currently active/selected book of the bible"
  [new-book]
  (let [curr-book (:current-book @app-state)]
    (swap! app-state assoc :current-chapter 1)
    (swap! app-state assoc :current-verse 1)
    (if (not= curr-book new-book)
       (swap! app-state assoc :current-book new-book))))

(defn move-next-book!
  "Change the current book to the next one. If Revelation, then do nothing"
  []
  (let [curr-book (:current-book @app-state)]
    (if (not= curr-book "Revelation")
      (do
        (swap! app-state assoc :current-book (next-value (get-book-names) curr-book))
        (swap! app-state assoc :current-chapter 1)
        (swap! app-state assoc :current-verse 1)))))

(defn move-prev-book!
  "Change the current book to the previous one. If Genesis, then do nothing"
  []
  (let [ curr-book (:current-book @app-state)
        last-chapter (->
                      (last (get-chapter-numbers-in-book curr-book))
                      (js/parseInt))
        ]

  (swap! app-state assoc :current-book
           (previous-value (get-book-names) curr-book))
    ;; move to the last chapter of that book
    (swap! app-state assoc :current-chapter last-chapter)
    ;; move to the last verse of that chapter
    (swap! app-state assoc :current-verse
           (last (get-verse-numbers-in-chapter curr-book last-chapter)))))

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
  "Decrement the current chapter of the current book
   if we're on chapter 1, then need to move to the previous book
                          and the final chapter and verse
   if we're on genesis 1, then dont' do anything"
  []
  (let [curr-chapter (:current-chapter @app-state)]
    (if (== curr-chapter 1)
      (let [curr-book (:current-book @app-state)]
        (if (not= curr-book "Genesis")
          (move-prev-book!)
          ))
      (change-chapter! (dec curr-chapter)))))

(defn move-next-chapter!
  "Increment the current chapter of the current book
   if we're on the last chapter of the current book, then jump to the next book
     and set the verse to 1
   if we're on the last book (Revelations), then do nothing"
  []
  (let [curr-book (:current-book @app-state)
        curr-chapter (:current-chapter @app-state)
        last-chapter (last (get-chapter-numbers-in-book curr-book))]
    (if (= curr-chapter last-chapter)
      (move-next-book!)
      (swap! app-state update :current-chapter inc))))

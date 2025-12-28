(ns bible.api.jump
  (:require [bible.data :refer [get-book-names]]
            [bible.state :refer [app-state]]
            ))


(defn- previous-value
  [v val]
  (let [i (.indexOf v val)]
    (when (and (number? i) (pos? i))
      (nth v (dec i)))))

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

(defn move-previous-chapter!
  "Decrement the current chapter of the current book"
  ;; if we're on chapter 1, then need to move to the previous book
  ;; if we're on genesis 1, then dont' do anything
  []
  (let [curr-chapter (:current-chapter @app-state)]
    (if (== curr-chapter 1)
      (let [curr-book (:current-book @app-state)]
        (if (not= curr-book "Genesis")
          (swap! app-state update :current-chapter (previous-value get-book-names curr-book))))
      (swap! app-state update :current-chapter dec))))

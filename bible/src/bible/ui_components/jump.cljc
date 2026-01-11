(ns bible.ui-components.jump
  (:require [bible.data :as data]
            [bible.state :refer [app-state]]
            [bible.api.jump :refer [change-book! change-chapter!]]
            ))

(defn- handle-change-book
  [evt]
  (change-book! (-> evt .-target .-value)))

(defn- book
  "construct/render an object for a select list of all the bible books with the current book selected"
  [app-state]
  [:select {:value (:current-book @app-state)
             :on-change handle-change-book}
    (for [book-name data/bible-book-list]
      ^{:key book-name}
      [:option {:value book-name} book-name])])

(defn- handle-change-chapter
  [evt]
  (change-chapter! (-> evt .-target .-value)))

(defn- chapter
  [app-state]

  [:select {:value (:current-chapter @app-state)
             :on-change handle-change-chapter}
    (for [chapter-number (data/get-chapter-names-in-book (:current-book @app-state))]
      ^{:key (str "chapter-number-" chapter-number)}
      [:option {:value chapter-number} chapter-number])])

(defn book-chapter-verse
  "Render the controls to jump between book/chapter/verses"
  []
  [:div
   [book app-state]
   [chapter app-state]])

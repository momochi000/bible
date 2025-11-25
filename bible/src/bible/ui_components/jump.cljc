(ns bible.ui-components.jump
  (:require [bible.data :as data]
            [bible.state :refer [app-state]]
            [bible.api.jump :refer [change-book!]]
            ))

(defn- handle-change
  [evt]
  (change-book! app-state (-> evt .-target .-value)))

(defn book-chapter-verse
  "Render the controls to jump between book/chapter/verses"
  []
  [:select {:value (:current-book @app-state)
             :on-change handle-change}
    ;; Having a problem iterating over the bible-book-list
    (for [book-name data/bible-book-list]
      ^{:key book-name}
      [:option {:value book-name} book-name])])


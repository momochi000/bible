(ns bible.core
  (:require [reagent.dom :as rdom]
            [bible.state :refer [app-state]]
            [bible.styles :as styles]
            [bible.data :as data]
            [bible.ui-components.jump :refer [book-chapter-verse]]
            [bible.api.jump :refer [move-previous-chapter!]]
            ))

;; UI Components
(defn- handle-prev-chapter
  [evt]
  (move-previous-chapter!))

(defn- handle-next-chapter
  [evt]
  ;; TODO: This needs to smartly handle moving chapters
  ;; e.g. if we're on the last chapter of a book we need to jump to the first chapter of the next book
  (swap! app-state update :current-chapter inc))

(defn navigation []
  [:nav {:class "bible-top-nav"}
   [:div
    [:button {:on-click handle-prev-chapter} "← Prev"]
    [book-chapter-verse]
    [:button {:on-click handle-next-chapter} "Next →"]]])

(defn header []
  [:header [navigation]])

(defn verse-display []
  (let [chapter (data/get-chapter (:current-book @app-state)
                                   (:current-chapter @app-state))]
    [:div.verse-container
     (if chapter
       (for [verse (:verses chapter)]
         ^{:key (:verse verse)}
         [:p
          [:strong (str (:verse verse) ". ")]
          (:text verse)])
       [:p "Loading..."])]))

(defn root-component []
  [:div#main-container
   [header]
   [verse-display]])

;; Initialization
(defn mount-root []
  (rdom/render [root-component]
               (js/document.getElementById "app")))

(defn init! []
  (data/load-bible-json!)
  (styles/inject-styles!)
  (mount-root))

(defn ^:dev/after-load reload! []
  (styles/inject-styles!)
  (mount-root))

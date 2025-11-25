(ns bible.core
  (:require [reagent.dom :as rdom]
            [bible.state :refer [app-state]]
            [bible.styles :as styles]
            [bible.data :as data]
            [bible.ui-components.jump :refer [book-chapter-verse]]
            ))

;; Components
(defn navigation []
  [:nav
   [:div
    [book-chapter-verse]
    ;;[:button {:on-click #(js/console.log "Previous Chapter")} "← Previous"]
    [:span (str (:current-book @app-state) " " (:current-chapter @app-state))]
    [:button {:on-click #(swap! app-state update :current-chapter inc)}
     "Next →"]]])

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

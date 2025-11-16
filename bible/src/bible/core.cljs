(ns bible.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [bible.styles :as styles]))

;; App State
(defonce app-state (r/atom {:current-book "Genesis"
                            :current-chapter 1
                            :current-verse nil}))

;; Components
(defn header []
  [:header
   [:h1 "Bible Reader"]
   [:p "A self-contained offline Bible"]])

(defn navigation []
  [:nav
   [:div
    [:button {:on-click #(js/console.log "Previous Chapter")}
     "← Previous"]
    [:span (str (:current-book @app-state) " " (:current-chapter @app-state))]
    [:button {:on-click #(js/console.log "Next Chapter")}
     "Next →"]]])

(defn verse-display []
  [:div.verse-container
   [:p "Sample verse text will go here..."]])

(defn root-component []
  [:div#main-container
   [header]
   [navigation]
   [verse-display]])

;; Initialization
(defn mount-root []
  (rdom/render [root-component]
               (js/document.getElementById "app")))

(defn init! []
  (styles/inject-styles!)
  (mount-root))

(defn ^:dev/after-load reload! []
  (styles/inject-styles!)
  (mount-root))

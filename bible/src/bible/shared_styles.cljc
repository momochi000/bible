(ns bible.shared-styles
  (:require [bible.style.navigation :as nav-styles])
  )

(def styles
  "Garden styles for the Bible app.
  This file is .cljc so it can be used in both:
  - ClojureScript (runtime, for development hot-reload)
  - Clojure (build-time, for production HTML generation)"
  (concat
    [[:body
      {:margin 0
       :padding 0
       :font-family "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
       :font-size "16px"
       :line-height 1.6
       :color "#333"}]

     [:#main-container
      {:max-width "800px"
       :margin "0 auto"
       :padding "20px"}]

     [:header
      {:text-align "center"
       :border-bottom "2px solid #e0e0e0"}
      [:h1
       {:margin "0 0 10px 0"
        :font-size "2em"
        :color "#2c3e50"}]
      [:p
       {:margin 0
        :color "#7f8c8d"
        :font-size "0.9em"}]]
     [:.verse-container
      {:padding "0.8rem"
       :background-color "#ffffff"
       :border-radius "8px"
       :box-shadow "0 2px 4px rgba(0,0,0,0.1)"}
      [:p
       {:margin 0
        :line-height 1.8}]]]

     nav-styles/styles))

(ns bible.styles
  (:require [garden.core :refer [css]]
            [bible.shared-styles :as shared]))

(defn inject-styles! []
  (let [style-element (js/document.getElementById "app-styles")
        css-string (css shared/styles)]
    (set! (.-innerHTML style-element) css-string)))

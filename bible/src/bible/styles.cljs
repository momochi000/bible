(ns bible.styles
  (:require [garden.core :refer [css]]
            [bible.shared-styles :as shared]))

(defn inject-styles! []
  (when-let [style-element (js/document.getElementById "app-styles")]
    (let [css-string (css shared/styles)]
      (set! (.-innerHTML style-element) css-string))))

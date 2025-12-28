(ns bible.state
  (:require [reagent.core :as r]))

;; App State
(defonce app-state (r/atom {:current-book "Genesis"
                            :current-chapter 1
                            :current-verse 1}))

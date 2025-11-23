(ns bible.style.navigation)

(def styles
  [[:nav
    {:display "flex"
     :justify-content "center"
     :align-items "center"
     :background-color "#f8f9fa"
     :border-radius "8px"}
    [:div
     {:display "flex"
      :gap "20px"
      :align-items "center"}]
    [:button
     {:padding "8px 16px"
      :background-color "#3498db"
      :color "white"
      :border "none"
      :border-radius "4px"
      :cursor "pointer"
      :font-size "0.9em"
      :transition "background-color 0.2s"}
     [:&:hover
      {:background-color "#2980b9"}]
     [:&:active
      {:background-color "#21618c"}]]
    [:span
     {:font-weight "bold"
      :font-size "1.1em"
      :color "#2c3e50"}]]])

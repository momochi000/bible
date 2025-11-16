(ns build
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hiccup.page :refer [html5]]
            [garden.core :refer [css]]))

(def styles
  "Garden styles for the Bible app"
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
     :padding "20px 0"
     :border-bottom "2px solid #e0e0e0"
     :margin-bottom "20px"}
    [:h1
     {:margin "0 0 10px 0"
      :font-size "2em"
      :color "#2c3e50"}]
    [:p
     {:margin 0
      :color "#7f8c8d"
      :font-size "0.9em"}]]

   [:nav
    {:display "flex"
     :justify-content "center"
     :align-items "center"
     :padding "15px"
     :background-color "#f8f9fa"
     :border-radius "8px"
     :margin-bottom "30px"}
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
      :color "#2c3e50"}]]

   [:.verse-container
    {:padding "20px"
     :background-color "#ffffff"
     :border-radius "8px"
     :box-shadow "0 2px 4px rgba(0,0,0,0.1)"}
    [:p
     {:margin 0
      :line-height 1.8}]]])

(defn generate-html [js-content css-content]
  (html5
    {:lang "en"}
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
     [:meta {:name "description" :content "Offline Bible Reader"}]
     [:title "Bible"]
     [:style css-content]]
    [:body
     [:div#app
      [:div {:style "padding: 20px; text-align: center;"}
       [:p "Loading Bible..."]]]
     [:script js-content]]))

(defn build-single-html []
  (println "Building single HTML file with Hiccup...")

  (let [js-file (io/file "target/release/main.js")
        output-file (io/file "target/bible.html")]

    (when-not (.exists js-file)
      (println "Error: target/release/main.js not found.")
      (println "Please run 'npm run build' first to create the production build.")
      (System/exit 1))

    (println "Reading compiled JavaScript...")
    (let [js-content (slurp js-file)
          _ (println "Generating CSS from Garden...")
          css-content (css styles)
          _ (println "Generating HTML with Hiccup...")
          html-content (generate-html js-content css-content)]

      (io/make-parents output-file)
      (spit output-file html-content)

      (let [file-size-kb (format "%.2f" (/ (.length output-file) 1024.0))]
        (println (str "\n✓ Single HTML file created: " (.getAbsolutePath output-file)))
        (println (str "✓ File size: " file-size-kb " KB"))
        (println "\nYour offline Bible app is ready! Open target/bible.html in any browser.")))))

(defn -main [& args]
  (build-single-html))

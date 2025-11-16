(ns build
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hiccup.page :refer [html5]]
            [garden.core :refer [css]]
            [bible.shared-styles :as shared]))

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
          css-content (css shared/styles)
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

(ns build
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [hiccup.page :refer [html5]]
            [garden.core :refer [css]]
            [bible.shared-styles :as shared]))

(defn generate-html [js-content css-content bible-json]
  (html5
    {:lang "en"}
    [:head
     [:meta {:charset "UTF-8"}]
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1.0"}]
     [:meta {:name "description" :content "Offline Bible Reader"}]
     [:title "Bible"]
     [:style {:id "app-styles"} css-content]
     [:script {:type "application/json" :id "bible-data"} bible-json]]
    [:body
     [:div#app
      [:div {:style "padding: 20px; text-align: center;"}
       [:p "Loading Bible..."]]]
     [:script js-content]]))

(defn build-single-html
  ([] (build-single-html "release"))
  ([build-type]
   (println (str "Building single HTML file with Hiccup (" build-type " mode)..."))

   (let [js-file (io/file (str "target/" build-type "/main.js"))
         output-file (io/file (str "target/bible-" build-type ".html"))]

     (when-not (.exists js-file)
       (println (str "Error: target/" build-type "/main.js not found."))
       (println (str "Please run 'npx shadow-cljs release app" (when (= build-type "debug") "-debug") "' first."))
       (System/exit 1))

     (println "Reading compiled JavaScript...")
     (let [js-content (slurp js-file)
           _ (println "Generating CSS from Garden...")
           css-content (css shared/styles)
           _ (println "Loading Bible JSON...")
           bible-json (slurp "resources/bible.json")
           _ (println "Generating HTML with Hiccup...")
           html-content (generate-html js-content css-content bible-json)]

       (io/make-parents output-file)
       (spit output-file html-content)

       ;; print out some stats
       (let [file-size-kb (format "%.2f" (/ (.length output-file) 1024.0))]
         (println (str "\n✓ Single HTML file created: " (.getAbsolutePath output-file)))
         (println (str "✓ File size: " file-size-kb " KB"))
         (println (str "\nYour offline Bible app is ready! Open target/bible-" build-type ".html in any browser.")))))))

(defn -main [& args]
  (if (seq args)
    (build-single-html (first args))
    (build-single-html)))

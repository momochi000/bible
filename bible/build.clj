(ns build
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(defn inline-js [html-content js-file]
  (let [js-content (slurp js-file)]
    (str/replace html-content
                 #"<script src=\"/js/main.js\"></script>"
                 (str "<script>\n" js-content "\n</script>"))))

(defn build-single-html []
  (println "Building single HTML file...")
  (let [html-template (slurp "resources/public/index.html")
        js-file (io/file "target/release/main.js")
        output-file (io/file "target/bible.html")]

    (when-not (.exists js-file)
      (throw (Exception. "Production JS not found. Run 'npm run build' first.")))

    (let [final-html (inline-js html-template js-file)]
      (io/make-parents output-file)
      (spit output-file final-html)
      (println (str "Single HTML file created: " (.getAbsolutePath output-file)))
      (println (str "File size: " (format "%.2f" (/ (.length output-file) 1024.0)) " KB")))))

(defn -main [& args]
  (build-single-html))

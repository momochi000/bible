(ns parse-bible
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.data.json :as json]))

(defn parse-verse-line [line]
  "Parse a line like 'Genesis 1:1\tIn the beginning...'
   Returns: {:book 'Genesis' :chapter 1 :verse 1 :text '...'}"
  (when-let [[_ book-chapter text] (re-matches #"^([^\t]+)\t(.+)$" line)]
    (when-let [[_ book chapter verse] (re-matches #"^(.+?) (\d+):(\d+)$" book-chapter)]
      {:book book
       :chapter (Integer/parseInt chapter)
       :verse (Integer/parseInt verse)
       :text text})))

(defn group-by-book-and-chapter [verses]
  "Group verses into structure: [{:name 'Genesis' :chapters [...]}]"
  (->> verses
       (group-by :book)
       (map (fn [[book-name book-verses]]
              {:name book-name
               :chapters (->> book-verses
                              (group-by :chapter)
                              (map (fn [[chapter-num chapter-verses]]
                                     {:chapter chapter-num
                                      :verses (->> chapter-verses
                                                   (sort-by :verse)
                                                   (mapv (fn [{:keys [verse text]}]
                                                           {:verse verse :text text})))}))
                              (sort-by :chapter)
                              vec)}))
       (sort-by :name)
       vec))

(defn parse-bible-file [input-path output-path]
  (println "Parsing Bible from:" input-path)

  (let [lines (line-seq (io/reader input-path))
        ;; Skip header lines (first 2 lines)
        verse-lines (drop 2 lines)
        ;; Parse each verse
        verses (->> verse-lines
                    (map parse-verse-line)
                    (filter some?)
                    doall)
        ;; Group into structure
        bible-data {:books (group-by-book-and-chapter verses)}
        ;; Count stats
        total-verses (count verses)
        total-books (count (:books bible-data))]

    (println (str "Parsed " total-verses " verses from " total-books " books"))
    (println "Writing JSON to:" output-path)

    ;; Write as minified JSON (no pretty printing to save space)
    (with-open [writer (io/writer output-path)]
      (json/write bible-data writer))

    (println "Done!")
    (println (str "Output file size: "
                  (format "%.2f MB"
                          (/ (.length (io/file output-path)) 1024.0 1024.0))))))

(defn -main [& args]
  (parse-bible-file "resources/kjv.txt" "resources/bible.json"))

;; Run with: clojure -M scripts/parse_bible.clj

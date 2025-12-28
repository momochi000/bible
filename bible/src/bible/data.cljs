(ns bible.data
  (:require [cljs.reader :as reader]))

(defonce bible-data (atom nil))

(defonce bible-book-list
  ["Genesis"
   "Exodus"
   "Leviticus"
   "Numbers"
   "Deuteronomy"
   "Joshua"
   "Judges"
   "Ruth"
   "1 Samuel"
   "2 Samuel"
   "1 Kings"
   "2 Kings"
   "1 Chronicles"
   "2 Chronicles"
   "Ezra"
   "Nehemiah"
   "Esther"
   "Job"
   "Psalms"
   "Proverbs"
   "Ecclesiastes"
   "Song of Solomon"
   "Isaiah"
   "Jeremiah"
   "Lamentations"
   "Ezekiel"
   "Daniel"
   "Hosea"
   "Joel"
   "Amos"
   "Obadiah"
   "Jonah"
   "Micah"
   "Nahum"
   "Habakkuk"
   "Zephaniah"
   "Haggai"
   "Zechariah"
   "Malachi"
   "Matthew"
   "Mark"
   "Luke"
   "John"
   "Acts"
   "Romans"
   "1 Corinthians"
   "2 Corinthians"
   "Galatians"
   "Ephesians"
   "Philippians"
   "Colossians"
   "1 Thessalonians"
   "2 Thessalonians"
   "1 Timothy"
   "2 Timothy"
   "Titus"
   "Philemon"
   "Hebrews"
   "James"
   "1 Peter"
   "2 Peter"
   "1 John"
   "2 John"
   "3 John"
   "Jude"
   "Revelation"])

(defn load-bible-json! []
  "Load and parse the Bible JSON from the HTML script tag"
  (when-let [bible-element (js/document.getElementById "bible-data")]
    (let [json-text (.-textContent bible-element)
          parsed-data (js->clj (js/JSON.parse json-text) :keywordize-keys true)]
      (reset! bible-data parsed-data)
      (js/console.log "Bible loaded:"
                      (count (:books parsed-data)) "books,"
                      "first book:" (:name (first (:books parsed-data)))))))

(defn get-book [book-name]
  "Get a book by name, e.g. 'Genesis'"
  (->> (:books @bible-data)
       (filter #(= (:name %) book-name))
       first))

(defn get-chapter [book-name chapter-num]
  "Get a specific chapter from a book"
  (when-let [book (get-book book-name)]
    (->> (:chapters book)
         (filter #(= (:chapter %) chapter-num))
         first)))

(defn get-verse [book-name chapter-num verse-num]
  "Get a specific verse"
  (when-let [chapter (get-chapter book-name chapter-num)]
    (->> (:verses chapter)
         (filter #(= (:verse %) verse-num))
         first)))

(defn get-book-names []
  "Get list of all book names"
  (mapv :name (:books @bible-data)))

(defn get-chapters-in-book
  [book-name]
  (:chapters (get-book book-name)))

(defn get-chapter-names-in-book
  "Return the list of chapters (which are just numbers) as a sequence given the argument book"
  [book-name]
  (take (count (get-chapters-in-book book-name)) (map str (iterate inc 1))))

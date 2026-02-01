(ns bible.db
  (:require [datascript.core :as d]))

(def schema
  {:bookmark/id {:db/unique :db.unique/identity}
   :bookmark/book {:db/index true}
   :bookmark/chapter {:db/index true}
   :bookmark/verse {:db/index true}
   :bookmark/created-at {:db/index true}
   :bookmark/updated-at {:db/index true}
   :bookmark/color {}

   :note/id {:db/unique :db.unique/identity}
   :note/content {}
   ;;:note/book {:db/index true}
   ;;:note/chapter {:db/index true}
   ;;:note/verse {:db/index true}
   :note/created-at {:db/index true}
   :note/updated-at {:db/index true}

   :tag/id {:db/unique :db.unique/identity}
   :tag/name {}
   :tag/created-at {:db/index true}

   :reading-position/book {}
   :reading-position/chapter {}
   :reading-position/verse {}

   :settings/font-size {}
   ;:settings/color-scheme {}

   ; relationships
   :bookmark/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   :note/bookmark {:db/valueType :db.type/ref}
   :note/tags {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
   })

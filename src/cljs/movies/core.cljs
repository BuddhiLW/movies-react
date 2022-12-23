(ns movies.core
  (:require
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [movies.comp.header :refer [header]]
   [movies.comp.body :refer [movies]]
   [movies.comp.sortby :refer [sort-movies]]
   [movies.comp.footer :refer [footer]]
   [movies.state :as state]))

(defn app []
  (let [mode (r/atom {:active "year"})]
    [:div.bg-light
     [header]
     [(sort-movies mode)]
     [(fn []
        (case
         (:active @mode) "year" (movies (sort-by :year (vals @state/movies)))
         "title" (movies (sort-by :title (vals @state/movies)))
         "country" (movies (sort-by :country (vals @state/movies)))))]
     [footer]]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [app] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

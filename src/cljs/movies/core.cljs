(ns movies.core
  (:require
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [movies.comp.body :refer [movies]]
   [movies.comp.header :refer [navigation]]
   [movies.state :as state]))

(defn app []
  (let [mode (r/atom {:active "year"})]
    [:div.bg-light
     [(navigation mode)]
     [(fn []
        (if (= (:active @mode) "year")
          (movies (sort-by :year (vals @state/movies)))
          (if (= (:active @mode) "title")
            (movies (sort-by :title (vals @state/movies)))
            (movies (sort-by :country (vals @state/movies))))))]]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rdom/render [app] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

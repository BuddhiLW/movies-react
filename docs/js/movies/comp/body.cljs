(ns movies.comp.body
  (:require
   [movies.state :as state]))
;;   [reagent.core :as r]))

(defn movie
  "Display a movie, given a set of data."
  [id title director country year image]
  [:div.col.mb-1 {:key (str "movie-" id)}
   [:div.card.shadow.h-100.text-white.bg-dark
    [:h1.card-header.bg-light.text-black (str title ", " year)]
    [:div.col
     [:h3.card-header (str director ", " country)]]
    [:div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9
     [:img.card-img-top.img-fluid.rounded.img-thumbnail
      {:src image
       :alt title}]]]])

(defn movies
  [state]
  [:div.row.bg-main.bg-opacity-10.pt-3.movies
   [:main.container
    [:div.row.row-cols-1.row-cols-md-2.row-cols-xl-3.g-4
     (for [{:keys [id title director country year img]} state]
       (movie id title director country year img))]]])

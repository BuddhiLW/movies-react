(ns movies.comp.body
  (:require
   [movies.state :as state]
   [reagent.core :as r]))

(defn movie
  "Display a movie, given a set of data."
  [id title director country year image]
  [:div.mt-1.mr-1 {:key (str "movie-" id)}
   [:h1 (str title ", " year)]
   [:div
    [:h3 (str director ", " country)]]
   [:div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9
    [:img.card-img-top.img-fluid.rounded.img-thumbnail
     {:src image
      :alt title}]]])

(defn movies
  [_]
  (fn []
    [:div.row.bg-main.bg-opacity-10.pt-3.movies
     [:main.container
      [:div.row.row-cols-1.row-cols-md-2.row-cols-xl-3.g-4
       (for [{:keys [id title director country year img]} (sort-by :year (vals @state/movies))]
         (movie id title director country year img))]]]))

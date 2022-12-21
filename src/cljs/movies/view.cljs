(ns movies.view
  (:require
   [movies.state :as state]))

(defn movie
  "Display a movie, given a set of data."
  [id title director country year image]
  [:div {:key (str "movie-" id)}
   [:h1 (str title ", " year)]
   [:div
    [:h3 (str director ", " country)]]
   [:img {:src image
          :alt title}]])

(defn movies
  []
  (fn []
    [:div
     [:main
      (for [{:keys [id title director country year img]} (vals @state/movies)]
        (movie id title director country year img))]]))

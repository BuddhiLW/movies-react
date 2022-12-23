(ns movies.comp.sortby
  (:require
   [movies.helpers :as helpers]))

(defn sort-movies
  [mode]
  (fn []
    [:div.container-sm.bg-dark.mb-3
     [:div.row
      [:h1.text-center.text-white.fs-1.sortby "Sort by"]]
     [:div.row
      [:div.btn-group.mb-2
       [:button.btn.btn-primary {:on-click #(helpers/toggle-order
                                             {:active "year"}
                                             mode)}
        "Year"]
       [:button.btn.btn-secondary {:on-click #(helpers/toggle-order
                                               {:active "title"}
                                               mode)}
        "Title"]
       [:button.btn.btn-danger {:on-click #(helpers/toggle-order
                                            {:active "country"}
                                            mode)}
        "Country"]]]]))

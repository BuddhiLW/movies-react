(ns movies.comp.header
  (:require
   [movies.helpers :as helpers]))

(defn navigation
  [mode]
  (fn []
    [:div.container-fluid.bg-dark
     [:div.row
      [:h1.text-center.text-white "Sort by"]]
     [:div.row
      [:div.btn-group.mb-2
       [:button.btn.btn-primary {:on-click #(helpers/toggle-order
                                             {:active "year"}
                                             mode)}
        "By Year"]
       [:button.btn.btn-danger {:on-click #(helpers/toggle-order
                                            {:active "title"}
                                            mode)}
        "By Title"]
       [:button.btn.btn-light {:on-click #(helpers/toggle-order
                                           {:active "country"}
                                           mode)}
        "By Country"]]]]))

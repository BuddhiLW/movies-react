(ns movies.comp.header)

(defn navigation []
  [:div.container-fluid.bg-dark
   [:div.row
    [:h1.text-center.text-white "Sort by"]]
   [:div.row
    [:div.btn-group.mb-2
     [:button.btn.btn-primary "By year"]
     [:button.btn.btn-danger "ByTitle"]
     [:button.btn.btn-light "By year"]]]])

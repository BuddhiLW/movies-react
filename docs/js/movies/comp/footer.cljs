(ns movies.comp.footer)

(defn footer
  []
  [:div.bg-dark.text-light.d-md-flex.justify-content-around.mt-3.align-items-center.p-2
   [:div "Made with love ❤️"]
   [:div
    "Github project: "
    [:a {:href "https://github.com/BuddhiLW/movies-react"} "https://github.com/BuddhiLW/movies-react"]]
   [:div "BuddhiLW, 2022"]])

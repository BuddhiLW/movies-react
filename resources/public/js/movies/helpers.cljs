(ns movies.helpers)

(defn toggle-order
  [{:keys [active]} mode]
  (swap! mode assoc :active active))

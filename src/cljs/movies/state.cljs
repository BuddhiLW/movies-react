(ns movies.state
  (:require [reagent.core :as r]))

(def movies (r/atom
             {:movie-01 {:id :01
                         :title "Fight Club"
                         :director "David Fincher"
                         :country "USA"
                         :year "1999"
                         :img "https://imgs.search.brave.com/eH-OMvM8yvtXyMT8JqX08shELj2VoNw9MNd14cwsONk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL29yaWdp/bmFsLzJ6OG1GUXJU/MEVTU3l0V1pxcm8x/anNDYnZDQy5qcGc"}
              :movie-02 {:id :02
                         :title "Fight Club"
                         :director "David Fincher"
                         :country "USA"
                         :year "1999"
                         :img "https://imgs.search.brave.com/eH-OMvM8yvtXyMT8JqX08shELj2VoNw9MNd14cwsONk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlbW92aWVkYi5v/cmcvdC9wL29yaWdp/bmFsLzJ6OG1GUXJU/MEVTU3l0V1pxcm8x/anNDYnZDQy5qcGc"}}))

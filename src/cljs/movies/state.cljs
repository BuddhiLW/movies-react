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
                         :title "Life in Occupied Palestine"
                         :director "Anna Baltzer"
                         :country "USA"
                         :year "2008"
                         :img "https://imgs.search.brave.com/yjXpPgSuCAm-Nf8PB9ZfbP_B0hs5IceOoHpzGijmmMA/rs:fit:640:480:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzRk/LzE2L2ZhNGQxNjQ3/MTZjZjQ5Y2JkZTAx/NDdmNzNhMmFmMDIw/LmpwZw"}
              :movie-03 {:id :03
                         :title "Nausicaä of the Valley of the Wind"
                         :director "Hayao Miyazaki"
                         :country "USA"
                         :year "1984"
                         :img "https://imgs.search.brave.com/BP-8VaULoW5RIyYBLq9vA7syNSGNPoBW1pT6X9S9eB8/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/VFdNVkV4VnJqSGRJ/VjhvVnpaVTBnSGFE/NCZwaWQ9QXBp"}}))

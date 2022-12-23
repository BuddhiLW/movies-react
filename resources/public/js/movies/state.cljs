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
                         :country "Palestine"
                         :year "2008"
                         :img "https://imgs.search.brave.com/yjXpPgSuCAm-Nf8PB9ZfbP_B0hs5IceOoHpzGijmmMA/rs:fit:640:480:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZhLzRk/LzE2L2ZhNGQxNjQ3/MTZjZjQ5Y2JkZTAx/NDdmNzNhMmFmMDIw/LmpwZw"}
              :movie-03 {:id :03
                         :title "Nausicaä"
                         :director "Hayao Miyazaki"
                         :country "Japan"
                         :year "1984"
                         :img "https://imgs.search.brave.com/BP-8VaULoW5RIyYBLq9vA7syNSGNPoBW1pT6X9S9eB8/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/VFdNVkV4VnJqSGRJ/VjhvVnpaVTBnSGFE/NCZwaWQ9QXBp"}
              :movie-04 {:id :04
                         :title "Memento"
                         :director "Christopher Nolan"
                         :country "USA"
                         :year "2000"
                         :img "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-iAN5fEcOT-g%2FUdTAkcbKayI%2FAAAAAAAAAOc%2FDSvXCim4ua4%2Fs320%2Fmemento.jpg&f=1&nofb=1&ipt=7a30cf473d82a46e55a6e284bb34b38027206865e35e5cca9994a00584a83858&ipo=images"}
              :movie-05 {:id :05
                         :title "Why We Fight"
                         :director "Frank Capra"
                         :country "USA"
                         :year "1942-1945"
                         :img "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fmilitaryhistorynow.com%2Fwp-content%2Fuploads%2F2014%2F11%2Fwhy-we-fight-american-propaganda-ww2-frank-capra.jpg%3Ffit%3D590%252C330&f=1&nofb=1&ipt=4405b9802597ec3766c14519ecebbf8211a5d6ec8500a725faf8938430857406&ipo=images"}
              :movie-06 {:id :06
                         :title "Enter The Void"
                         :director "Gaspar Noé"
                         :year "2009"
                         :country "French-Germany"
                         :img "https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2019/02/19153657/ENTERTHEVOID-PosterUK2.jpg"}
              :movie-07 {:id :07
                         :title "Maniac"
                         :director "Cary J. Fukunaga, Patrick Somerville"
                         :year "2018"
                         :country "Norwegian-USA"
                         :img "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Maniac-feature-image.jpg"}
              :movie-08 {:id :08
                         :title "Django Unchained"
                         :director "Quentin Tarantino"
                         :year "2012"
                         :country "USA"
                         :img "https://art.ngfiles.com/images/307000/307005_1600_django.jpg?f1403227047"}
              :movie-09 {:id :09
                         :title "Dead Man"
                         :director "Jim Jarmusch"
                         :year "1995"
                         :country "USA"
                         :img "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F09%2F5a%2F8e%2F095a8e3c0a8a2e2eed89597320b423a1.jpg&f=1&nofb=1&ipt=3440f88c5c6b17831870e98026b3464f828f4ddfe87ad2513ad59c8029c5bb77&ipo=images"}
              :movie-10 {:id :10
                         :title "Toki o Kakeru Shōjo"
                         :director "Nobuhiko Obayashi"
                         :year "1983"
                         :country "Japan"
                         :img "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeeky.com.ar%2Fwp-content%2Fuploads%2F2021%2F02%2FToki-wo-Kakeru-Shoujo-Portada.jpg&f=1&nofb=1&ipt=308146a25c5b9355abe0349783c3449c4502111e3cbaf43060e351c4502ca120&ipo=images"}}))

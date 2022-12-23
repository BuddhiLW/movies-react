// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('movies.comp.sortby');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('movies.helpers');
movies.comp.sortby.sort_movies = (function movies$comp$sortby$sort_movies(mode){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_DASH_sm$bg_DASH_dark$mb_DASH_3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_center$text_DASH_white$fs_DASH_1$sortby,"Sort by"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$btn_DASH_group$mb_DASH_2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return movies.helpers.toggle_order(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,"year"], null),mode);
})], null),"Year"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return movies.helpers.toggle_order(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,"title"], null),mode);
})], null),"Title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return movies.helpers.toggle_order(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,"country"], null),mode);
})], null),"Country"], null)], null)], null)], null);
});
});

// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('movies.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
movies.helpers.toggle_order = (function movies$helpers$toggle_order(p__26841,mode){
var map__26842 = p__26841;
var map__26842__$1 = cljs.core.__destructure_map(map__26842);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26842__$1,cljs.core.cst$kw$active);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mode,cljs.core.assoc,cljs.core.cst$kw$active,active);
});

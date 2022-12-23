// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('movies.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('reagent.core');
goog.require('movies.comp.header');
goog.require('movies.comp.body');
goog.require('movies.comp.sortby');
goog.require('movies.comp.footer');
goog.require('movies.state');
movies.core.app = (function movies$core$app(){
var mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,"year"], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$bg_DASH_light,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.comp.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.comp.sortby.sort_movies(mode)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__27624 = cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mode));
switch (G__27624) {
case "year":
return movies.comp.body.movies(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$year,cljs.core.vals(cljs.core.deref(movies.state.movies))));

break;
case "title":
return movies.comp.body.movies(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$title,cljs.core.vals(cljs.core.deref(movies.state.movies))));

break;
case "country":
return movies.comp.body.movies(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$country,cljs.core.vals(cljs.core.deref(movies.state.movies))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27624)].join('')));

}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.comp.footer.footer], null)], null);
});
movies.core.get_app_element = (function movies$core$get_app_element(){
return goog.dom.getElement("app");
});
movies.core.mount = (function movies$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.core.app], null),el);
});
movies.core.mount_app_element = (function movies$core$mount_app_element(){
var temp__5804__auto__ = movies.core.get_app_element();
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return movies.core.mount(el);
} else {
return null;
}
});
movies.core.mount_app_element();

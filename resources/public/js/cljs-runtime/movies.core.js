goog.provide('movies.core');
movies.core.app = (function movies$core$app(){
var mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),"year"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-light","div.bg-light",1919448894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.comp.header.navigation(mode)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__64496 = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mode));
switch (G__64496) {
case "year":
return movies.comp.body.movies(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),cljs.core.vals(cljs.core.deref(movies.state.movies))));

break;
case "title":
return movies.comp.body.movies(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),cljs.core.vals(cljs.core.deref(movies.state.movies))));

break;
case "country":
return movies.comp.body.movies(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"country","country",312965309),cljs.core.vals(cljs.core.deref(movies.state.movies))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64496)].join('')));

}
})], null)], null);
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

//# sourceMappingURL=movies.core.js.map

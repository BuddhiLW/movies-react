goog.provide('movies.core');
movies.core.app = (function movies$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-light","div.bg-light",1919448894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.comp.header.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [movies.comp.body.movies], null)], null);
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

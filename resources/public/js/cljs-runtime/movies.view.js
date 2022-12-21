goog.provide('movies.view');
/**
 * Display a movie, given a set of data.
 */
movies.view.movie = (function movies$view$movie(id,title,director,country,year,image){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["movie-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(director),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(country)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null)], null);
});
movies.view.movies = (function movies$view$movies(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),(function (){var iter__5520__auto__ = (function movies$view$movies_$_iter__77030(s__77031){
return (new cljs.core.LazySeq(null,(function (){
var s__77031__$1 = s__77031;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77031__$1);
if(temp__5804__auto__){
var s__77031__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77031__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__77031__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__77033 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__77032 = (0);
while(true){
if((i__77032 < size__5519__auto__)){
var map__77034 = cljs.core._nth(c__5518__auto__,i__77032);
var map__77034__$1 = cljs.core.__destructure_map(map__77034);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"title","title",636505583));
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"director","director",1283249926));
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"country","country",312965309));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"year","year",335913393));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77034__$1,new cljs.core.Keyword(null,"img","img",1442687358));
cljs.core.chunk_append(b__77033,movies.view.movie(id,title,director,country,year,img));

var G__77036 = (i__77032 + (1));
i__77032 = G__77036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77033),movies$view$movies_$_iter__77030(cljs.core.chunk_rest(s__77031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77033),null);
}
} else {
var map__77035 = cljs.core.first(s__77031__$2);
var map__77035__$1 = cljs.core.__destructure_map(map__77035);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77035__$1,new cljs.core.Keyword(null,"title","title",636505583));
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77035__$1,new cljs.core.Keyword(null,"director","director",1283249926));
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77035__$1,new cljs.core.Keyword(null,"country","country",312965309));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77035__$1,new cljs.core.Keyword(null,"year","year",335913393));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77035__$1,new cljs.core.Keyword(null,"img","img",1442687358));
return cljs.core.cons(movies.view.movie(id,title,director,country,year,img),movies$view$movies_$_iter__77030(cljs.core.rest(s__77031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.vals(cljs.core.deref(movies.state.movies)));
})()], null)], null);
});
});

//# sourceMappingURL=movies.view.js.map

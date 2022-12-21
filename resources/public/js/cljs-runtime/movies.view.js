goog.provide('movies.view');
/**
 * Display a movie, given a set of data.
 */
movies.view.movie = (function movies$view$movie(id,title,director,country,year,image){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["movie-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(director),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(country)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9","div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9",-1652373909),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.card-img-top.img-fluid.rounded.img-thumbnail","img.card-img-top.img-fluid.rounded.img-thumbnail",-1299615291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null)], null)], null);
});
movies.view.movies = (function movies$view$movies(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.bg-main.bg-opacity-10.pt-3","div.row.bg-main.bg-opacity-10.pt-3",150356657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.row-cols-1.row-cols-md-2.row-cols-xl-3.g-4","div.row.row-cols-1.row-cols-md-2.row-cols-xl-3.g-4",-1631389818),(function (){var iter__5520__auto__ = (function movies$view$movies_$_iter__60500(s__60501){
return (new cljs.core.LazySeq(null,(function (){
var s__60501__$1 = s__60501;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60501__$1);
if(temp__5804__auto__){
var s__60501__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60501__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60501__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60503 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60502 = (0);
while(true){
if((i__60502 < size__5519__auto__)){
var map__60504 = cljs.core._nth(c__5518__auto__,i__60502);
var map__60504__$1 = cljs.core.__destructure_map(map__60504);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"title","title",636505583));
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"director","director",1283249926));
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"country","country",312965309));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"year","year",335913393));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60504__$1,new cljs.core.Keyword(null,"img","img",1442687358));
cljs.core.chunk_append(b__60503,movies.view.movie(id,title,director,country,year,img));

var G__60506 = (i__60502 + (1));
i__60502 = G__60506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60503),movies$view$movies_$_iter__60500(cljs.core.chunk_rest(s__60501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60503),null);
}
} else {
var map__60505 = cljs.core.first(s__60501__$2);
var map__60505__$1 = cljs.core.__destructure_map(map__60505);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"title","title",636505583));
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"director","director",1283249926));
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"country","country",312965309));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"year","year",335913393));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60505__$1,new cljs.core.Keyword(null,"img","img",1442687358));
return cljs.core.cons(movies.view.movie(id,title,director,country,year,img),movies$view$movies_$_iter__60500(cljs.core.rest(s__60501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.vals(cljs.core.deref(movies.state.movies)));
})()], null)], null)], null);
});
});

//# sourceMappingURL=movies.view.js.map

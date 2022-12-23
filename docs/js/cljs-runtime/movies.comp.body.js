goog.provide('movies.comp.body');
/**
 * Display a movie, given a set of data.
 */
movies.comp.body.movie = (function movies$comp$body$movie(id,title,director,country,year,image){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.mb-1","div.col.mb-1",712692801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["movie-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.shadow.h-100.text-white.bg-dark","div.card.shadow.h-100.text-white.bg-dark",374943286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.card-header.bg-light.text-black","h1.card-header.bg-light.text-black",74310879),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col","div.col",-1800797011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.card-header","h3.card-header",-840245385),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(director),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(country)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9","div.shadow-sm.mb-1.bg-body.rounded.ratio.ratio-16x9",-1652373909),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.card-img-top.img-fluid.rounded.img-thumbnail","img.card-img-top.img-fluid.rounded.img-thumbnail",-1299615291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null)], null)], null)], null);
});
movies.comp.body.movies = (function movies$comp$body$movies(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.bg-main.bg-opacity-10.pt-3.movies","div.row.bg-main.bg-opacity-10.pt-3.movies",766190116),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.container","main.container",-815859223),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.row-cols-1.row-cols-md-2.row-cols-xl-3.g-4","div.row.row-cols-1.row-cols-md-2.row-cols-xl-3.g-4",-1631389818),(function (){var iter__5520__auto__ = (function movies$comp$body$movies_$_iter__64489(s__64490){
return (new cljs.core.LazySeq(null,(function (){
var s__64490__$1 = s__64490;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__64490__$1);
if(temp__5804__auto__){
var s__64490__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64490__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__64490__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__64492 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__64491 = (0);
while(true){
if((i__64491 < size__5519__auto__)){
var map__64493 = cljs.core._nth(c__5518__auto__,i__64491);
var map__64493__$1 = cljs.core.__destructure_map(map__64493);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"title","title",636505583));
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"director","director",1283249926));
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"country","country",312965309));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"year","year",335913393));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64493__$1,new cljs.core.Keyword(null,"img","img",1442687358));
cljs.core.chunk_append(b__64492,movies.comp.body.movie(id,title,director,country,year,img));

var G__64495 = (i__64491 + (1));
i__64491 = G__64495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64492),movies$comp$body$movies_$_iter__64489(cljs.core.chunk_rest(s__64490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64492),null);
}
} else {
var map__64494 = cljs.core.first(s__64490__$2);
var map__64494__$1 = cljs.core.__destructure_map(map__64494);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"title","title",636505583));
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"director","director",1283249926));
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"country","country",312965309));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"year","year",335913393));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64494__$1,new cljs.core.Keyword(null,"img","img",1442687358));
return cljs.core.cons(movies.comp.body.movie(id,title,director,country,year,img),movies$comp$body$movies_$_iter__64489(cljs.core.rest(s__64490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(state);
})()], null)], null)], null);
});

//# sourceMappingURL=movies.comp.body.js.map

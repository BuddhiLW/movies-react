// Compiled by ClojureScript 1.11.54 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('movies.comp.body');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('movies.state');
/**
 * Display a movie, given a set of data.
 */
movies.comp.body.movie = (function movies$comp$body$movie(id,title,director,country,year,image){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$mb_DASH_1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["movie-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card$shadow$h_DASH_100$text_DASH_white$bg_DASH_dark,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$card_DASH_header$bg_DASH_light$text_DASH_black,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$card_DASH_header,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(director),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(country)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$shadow_DASH_sm$mb_DASH_1$bg_DASH_body$rounded$ratio$ratio_DASH_16x9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$card_DASH_img_DASH_top$img_DASH_fluid$rounded$img_DASH_thumbnail,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,image,cljs.core.cst$kw$alt,title], null)], null)], null)], null)], null);
});
movies.comp.body.movies = (function movies$comp$body$movies(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$bg_DASH_main$bg_DASH_opacity_DASH_10$pt_DASH_3$movies,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$row_DASH_cols_DASH_1$row_DASH_cols_DASH_md_DASH_2$row_DASH_cols_DASH_xl_DASH_3$g_DASH_4,(function (){var iter__5520__auto__ = (function movies$comp$body$movies_$_iter__27553(s__27554){
return (new cljs.core.LazySeq(null,(function (){
var s__27554__$1 = s__27554;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27554__$1);
if(temp__5804__auto__){
var s__27554__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27554__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__27554__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__27556 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__27555 = (0);
while(true){
if((i__27555 < size__5519__auto__)){
var map__27557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5518__auto__,i__27555);
var map__27557__$1 = cljs.core.__destructure_map(map__27557);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,cljs.core.cst$kw$id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,cljs.core.cst$kw$title);
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,cljs.core.cst$kw$director);
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,cljs.core.cst$kw$country);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,cljs.core.cst$kw$year);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27557__$1,cljs.core.cst$kw$img);
cljs.core.chunk_append(b__27556,movies.comp.body.movie(id,title,director,country,year,img));

var G__27559 = (i__27555 + (1));
i__27555 = G__27559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27556),movies$comp$body$movies_$_iter__27553(cljs.core.chunk_rest(s__27554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27556),null);
}
} else {
var map__27558 = cljs.core.first(s__27554__$2);
var map__27558__$1 = cljs.core.__destructure_map(map__27558);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$id);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$title);
var director = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$director);
var country = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$country);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$year);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$img);
return cljs.core.cons(movies.comp.body.movie(id,title,director,country,year,img),movies$comp$body$movies_$_iter__27553(cljs.core.rest(s__27554__$2)));
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

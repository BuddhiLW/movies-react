goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74857 = arguments.length;
var i__5767__auto___74858 = (0);
while(true){
if((i__5767__auto___74858 < len__5766__auto___74857)){
args__5772__auto__.push((arguments[i__5767__auto___74858]));

var G__74859 = (i__5767__auto___74858 + (1));
i__5767__auto___74858 = G__74859;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq74604){
var G__74605 = cljs.core.first(seq74604);
var seq74604__$1 = cljs.core.next(seq74604);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74605,seq74604__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__74616 = cljs.core.seq(sources);
var chunk__74617 = null;
var count__74618 = (0);
var i__74619 = (0);
while(true){
if((i__74619 < count__74618)){
var map__74627 = chunk__74617.cljs$core$IIndexed$_nth$arity$2(null,i__74619);
var map__74627__$1 = cljs.core.__destructure_map(map__74627);
var src = map__74627__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74627__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74627__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74627__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74627__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74630){var e_74860 = e74630;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_74860);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_74860.message)].join('')));
}

var G__74861 = seq__74616;
var G__74862 = chunk__74617;
var G__74863 = count__74618;
var G__74864 = (i__74619 + (1));
seq__74616 = G__74861;
chunk__74617 = G__74862;
count__74618 = G__74863;
i__74619 = G__74864;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74616);
if(temp__5804__auto__){
var seq__74616__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74616__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__74616__$1);
var G__74865 = cljs.core.chunk_rest(seq__74616__$1);
var G__74866 = c__5565__auto__;
var G__74867 = cljs.core.count(c__5565__auto__);
var G__74868 = (0);
seq__74616 = G__74865;
chunk__74617 = G__74866;
count__74618 = G__74867;
i__74619 = G__74868;
continue;
} else {
var map__74631 = cljs.core.first(seq__74616__$1);
var map__74631__$1 = cljs.core.__destructure_map(map__74631);
var src = map__74631__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74631__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74631__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74631__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74631__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e74632){var e_74869 = e74632;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_74869);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_74869.message)].join('')));
}

var G__74870 = cljs.core.next(seq__74616__$1);
var G__74871 = null;
var G__74872 = (0);
var G__74873 = (0);
seq__74616 = G__74870;
chunk__74617 = G__74871;
count__74618 = G__74872;
i__74619 = G__74873;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__74639 = cljs.core.seq(js_requires);
var chunk__74640 = null;
var count__74641 = (0);
var i__74642 = (0);
while(true){
if((i__74642 < count__74641)){
var js_ns = chunk__74640.cljs$core$IIndexed$_nth$arity$2(null,i__74642);
var require_str_74874 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_74874);


var G__74875 = seq__74639;
var G__74876 = chunk__74640;
var G__74877 = count__74641;
var G__74878 = (i__74642 + (1));
seq__74639 = G__74875;
chunk__74640 = G__74876;
count__74641 = G__74877;
i__74642 = G__74878;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74639);
if(temp__5804__auto__){
var seq__74639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74639__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__74639__$1);
var G__74879 = cljs.core.chunk_rest(seq__74639__$1);
var G__74880 = c__5565__auto__;
var G__74881 = cljs.core.count(c__5565__auto__);
var G__74882 = (0);
seq__74639 = G__74879;
chunk__74640 = G__74880;
count__74641 = G__74881;
i__74642 = G__74882;
continue;
} else {
var js_ns = cljs.core.first(seq__74639__$1);
var require_str_74883 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_74883);


var G__74884 = cljs.core.next(seq__74639__$1);
var G__74885 = null;
var G__74886 = (0);
var G__74887 = (0);
seq__74639 = G__74884;
chunk__74640 = G__74885;
count__74641 = G__74886;
i__74642 = G__74887;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__74646){
var map__74647 = p__74646;
var map__74647__$1 = cljs.core.__destructure_map(map__74647);
var msg = map__74647__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74647__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74647__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74650(s__74651){
return (new cljs.core.LazySeq(null,(function (){
var s__74651__$1 = s__74651;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74651__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__74659 = cljs.core.first(xs__6360__auto__);
var map__74659__$1 = cljs.core.__destructure_map(map__74659);
var src = map__74659__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74659__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__74651__$1,map__74659,map__74659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74647,map__74647__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74650_$_iter__74652(s__74653){
return (new cljs.core.LazySeq(null,((function (s__74651__$1,map__74659,map__74659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74647,map__74647__$1,msg,info,reload_info){
return (function (){
var s__74653__$1 = s__74653;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74653__$1);
if(temp__5804__auto____$1){
var s__74653__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74653__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__74653__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__74655 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__74654 = (0);
while(true){
if((i__74654 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__74654);
cljs.core.chunk_append(b__74655,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__74890 = (i__74654 + (1));
i__74654 = G__74890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74655),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74650_$_iter__74652(cljs.core.chunk_rest(s__74653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74655),null);
}
} else {
var warning = cljs.core.first(s__74653__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74650_$_iter__74652(cljs.core.rest(s__74653__$2)));
}
} else {
return null;
}
break;
}
});})(s__74651__$1,map__74659,map__74659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74647,map__74647__$1,msg,info,reload_info))
,null,null));
});})(s__74651__$1,map__74659,map__74659__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__74647,map__74647__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__74650(cljs.core.rest(s__74651__$1)));
} else {
var G__74891 = cljs.core.rest(s__74651__$1);
s__74651__$1 = G__74891;
continue;
}
} else {
var G__74892 = cljs.core.rest(s__74651__$1);
s__74651__$1 = G__74892;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__74660_74893 = cljs.core.seq(warnings);
var chunk__74661_74894 = null;
var count__74662_74895 = (0);
var i__74663_74896 = (0);
while(true){
if((i__74663_74896 < count__74662_74895)){
var map__74670_74900 = chunk__74661_74894.cljs$core$IIndexed$_nth$arity$2(null,i__74663_74896);
var map__74670_74901__$1 = cljs.core.__destructure_map(map__74670_74900);
var w_74902 = map__74670_74901__$1;
var msg_74903__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670_74901__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_74904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670_74901__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_74905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670_74901__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_74906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74670_74901__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_74906)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_74904),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_74905),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_74903__$1)].join(''));


var G__74907 = seq__74660_74893;
var G__74908 = chunk__74661_74894;
var G__74909 = count__74662_74895;
var G__74910 = (i__74663_74896 + (1));
seq__74660_74893 = G__74907;
chunk__74661_74894 = G__74908;
count__74662_74895 = G__74909;
i__74663_74896 = G__74910;
continue;
} else {
var temp__5804__auto___74911 = cljs.core.seq(seq__74660_74893);
if(temp__5804__auto___74911){
var seq__74660_74912__$1 = temp__5804__auto___74911;
if(cljs.core.chunked_seq_QMARK_(seq__74660_74912__$1)){
var c__5565__auto___74913 = cljs.core.chunk_first(seq__74660_74912__$1);
var G__74914 = cljs.core.chunk_rest(seq__74660_74912__$1);
var G__74915 = c__5565__auto___74913;
var G__74916 = cljs.core.count(c__5565__auto___74913);
var G__74917 = (0);
seq__74660_74893 = G__74914;
chunk__74661_74894 = G__74915;
count__74662_74895 = G__74916;
i__74663_74896 = G__74917;
continue;
} else {
var map__74671_74918 = cljs.core.first(seq__74660_74912__$1);
var map__74671_74919__$1 = cljs.core.__destructure_map(map__74671_74918);
var w_74920 = map__74671_74919__$1;
var msg_74921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671_74919__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_74922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671_74919__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_74923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671_74919__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_74924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74671_74919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_74924)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_74922),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_74923),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_74921__$1)].join(''));


var G__74925 = cljs.core.next(seq__74660_74912__$1);
var G__74926 = null;
var G__74927 = (0);
var G__74928 = (0);
seq__74660_74893 = G__74925;
chunk__74661_74894 = G__74926;
count__74662_74895 = G__74927;
i__74663_74896 = G__74928;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__74645_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__74645_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__74674){
var map__74675 = p__74674;
var map__74675__$1 = cljs.core.__destructure_map(map__74675);
var msg = map__74675__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74675__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__74676 = cljs.core.seq(updates);
var chunk__74678 = null;
var count__74679 = (0);
var i__74680 = (0);
while(true){
if((i__74680 < count__74679)){
var path = chunk__74678.cljs$core$IIndexed$_nth$arity$2(null,i__74680);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74716_74931 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74720_74932 = null;
var count__74721_74933 = (0);
var i__74722_74934 = (0);
while(true){
if((i__74722_74934 < count__74721_74933)){
var node_74935 = chunk__74720_74932.cljs$core$IIndexed$_nth$arity$2(null,i__74722_74934);
if(cljs.core.not(node_74935.shadow$old)){
var path_match_74936 = shadow.cljs.devtools.client.browser.match_paths(node_74935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74936)){
var new_link_74937 = (function (){var G__74734 = node_74935.cloneNode(true);
G__74734.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74734;
})();
(node_74935.shadow$old = true);

(new_link_74937.onload = ((function (seq__74716_74931,chunk__74720_74932,count__74721_74933,i__74722_74934,seq__74676,chunk__74678,count__74679,i__74680,new_link_74937,path_match_74936,node_74935,path,map__74675,map__74675__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74935);
});})(seq__74716_74931,chunk__74720_74932,count__74721_74933,i__74722_74934,seq__74676,chunk__74678,count__74679,i__74680,new_link_74937,path_match_74936,node_74935,path,map__74675,map__74675__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74936], 0));

goog.dom.insertSiblingAfter(new_link_74937,node_74935);


var G__74938 = seq__74716_74931;
var G__74939 = chunk__74720_74932;
var G__74940 = count__74721_74933;
var G__74941 = (i__74722_74934 + (1));
seq__74716_74931 = G__74938;
chunk__74720_74932 = G__74939;
count__74721_74933 = G__74940;
i__74722_74934 = G__74941;
continue;
} else {
var G__74942 = seq__74716_74931;
var G__74943 = chunk__74720_74932;
var G__74944 = count__74721_74933;
var G__74945 = (i__74722_74934 + (1));
seq__74716_74931 = G__74942;
chunk__74720_74932 = G__74943;
count__74721_74933 = G__74944;
i__74722_74934 = G__74945;
continue;
}
} else {
var G__74946 = seq__74716_74931;
var G__74947 = chunk__74720_74932;
var G__74948 = count__74721_74933;
var G__74949 = (i__74722_74934 + (1));
seq__74716_74931 = G__74946;
chunk__74720_74932 = G__74947;
count__74721_74933 = G__74948;
i__74722_74934 = G__74949;
continue;
}
} else {
var temp__5804__auto___74950 = cljs.core.seq(seq__74716_74931);
if(temp__5804__auto___74950){
var seq__74716_74951__$1 = temp__5804__auto___74950;
if(cljs.core.chunked_seq_QMARK_(seq__74716_74951__$1)){
var c__5565__auto___74952 = cljs.core.chunk_first(seq__74716_74951__$1);
var G__74953 = cljs.core.chunk_rest(seq__74716_74951__$1);
var G__74954 = c__5565__auto___74952;
var G__74955 = cljs.core.count(c__5565__auto___74952);
var G__74956 = (0);
seq__74716_74931 = G__74953;
chunk__74720_74932 = G__74954;
count__74721_74933 = G__74955;
i__74722_74934 = G__74956;
continue;
} else {
var node_74957 = cljs.core.first(seq__74716_74951__$1);
if(cljs.core.not(node_74957.shadow$old)){
var path_match_74958 = shadow.cljs.devtools.client.browser.match_paths(node_74957.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74958)){
var new_link_74959 = (function (){var G__74739 = node_74957.cloneNode(true);
G__74739.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74958),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74739;
})();
(node_74957.shadow$old = true);

(new_link_74959.onload = ((function (seq__74716_74931,chunk__74720_74932,count__74721_74933,i__74722_74934,seq__74676,chunk__74678,count__74679,i__74680,new_link_74959,path_match_74958,node_74957,seq__74716_74951__$1,temp__5804__auto___74950,path,map__74675,map__74675__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74957);
});})(seq__74716_74931,chunk__74720_74932,count__74721_74933,i__74722_74934,seq__74676,chunk__74678,count__74679,i__74680,new_link_74959,path_match_74958,node_74957,seq__74716_74951__$1,temp__5804__auto___74950,path,map__74675,map__74675__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74958], 0));

goog.dom.insertSiblingAfter(new_link_74959,node_74957);


var G__74960 = cljs.core.next(seq__74716_74951__$1);
var G__74961 = null;
var G__74962 = (0);
var G__74963 = (0);
seq__74716_74931 = G__74960;
chunk__74720_74932 = G__74961;
count__74721_74933 = G__74962;
i__74722_74934 = G__74963;
continue;
} else {
var G__74964 = cljs.core.next(seq__74716_74951__$1);
var G__74965 = null;
var G__74966 = (0);
var G__74967 = (0);
seq__74716_74931 = G__74964;
chunk__74720_74932 = G__74965;
count__74721_74933 = G__74966;
i__74722_74934 = G__74967;
continue;
}
} else {
var G__74968 = cljs.core.next(seq__74716_74951__$1);
var G__74969 = null;
var G__74970 = (0);
var G__74971 = (0);
seq__74716_74931 = G__74968;
chunk__74720_74932 = G__74969;
count__74721_74933 = G__74970;
i__74722_74934 = G__74971;
continue;
}
}
} else {
}
}
break;
}


var G__74972 = seq__74676;
var G__74973 = chunk__74678;
var G__74974 = count__74679;
var G__74975 = (i__74680 + (1));
seq__74676 = G__74972;
chunk__74678 = G__74973;
count__74679 = G__74974;
i__74680 = G__74975;
continue;
} else {
var G__74976 = seq__74676;
var G__74977 = chunk__74678;
var G__74978 = count__74679;
var G__74979 = (i__74680 + (1));
seq__74676 = G__74976;
chunk__74678 = G__74977;
count__74679 = G__74978;
i__74680 = G__74979;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__74676);
if(temp__5804__auto__){
var seq__74676__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74676__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__74676__$1);
var G__74980 = cljs.core.chunk_rest(seq__74676__$1);
var G__74981 = c__5565__auto__;
var G__74982 = cljs.core.count(c__5565__auto__);
var G__74983 = (0);
seq__74676 = G__74980;
chunk__74678 = G__74981;
count__74679 = G__74982;
i__74680 = G__74983;
continue;
} else {
var path = cljs.core.first(seq__74676__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__74745_74984 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__74749_74985 = null;
var count__74750_74986 = (0);
var i__74751_74987 = (0);
while(true){
if((i__74751_74987 < count__74750_74986)){
var node_74988 = chunk__74749_74985.cljs$core$IIndexed$_nth$arity$2(null,i__74751_74987);
if(cljs.core.not(node_74988.shadow$old)){
var path_match_74989 = shadow.cljs.devtools.client.browser.match_paths(node_74988.getAttribute("href"),path);
if(cljs.core.truth_(path_match_74989)){
var new_link_74990 = (function (){var G__74761 = node_74988.cloneNode(true);
G__74761.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_74989),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74761;
})();
(node_74988.shadow$old = true);

(new_link_74990.onload = ((function (seq__74745_74984,chunk__74749_74985,count__74750_74986,i__74751_74987,seq__74676,chunk__74678,count__74679,i__74680,new_link_74990,path_match_74989,node_74988,path,seq__74676__$1,temp__5804__auto__,map__74675,map__74675__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_74988);
});})(seq__74745_74984,chunk__74749_74985,count__74750_74986,i__74751_74987,seq__74676,chunk__74678,count__74679,i__74680,new_link_74990,path_match_74989,node_74988,path,seq__74676__$1,temp__5804__auto__,map__74675,map__74675__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_74989], 0));

goog.dom.insertSiblingAfter(new_link_74990,node_74988);


var G__74991 = seq__74745_74984;
var G__74992 = chunk__74749_74985;
var G__74993 = count__74750_74986;
var G__74994 = (i__74751_74987 + (1));
seq__74745_74984 = G__74991;
chunk__74749_74985 = G__74992;
count__74750_74986 = G__74993;
i__74751_74987 = G__74994;
continue;
} else {
var G__74995 = seq__74745_74984;
var G__74996 = chunk__74749_74985;
var G__74997 = count__74750_74986;
var G__74998 = (i__74751_74987 + (1));
seq__74745_74984 = G__74995;
chunk__74749_74985 = G__74996;
count__74750_74986 = G__74997;
i__74751_74987 = G__74998;
continue;
}
} else {
var G__74999 = seq__74745_74984;
var G__75000 = chunk__74749_74985;
var G__75001 = count__74750_74986;
var G__75002 = (i__74751_74987 + (1));
seq__74745_74984 = G__74999;
chunk__74749_74985 = G__75000;
count__74750_74986 = G__75001;
i__74751_74987 = G__75002;
continue;
}
} else {
var temp__5804__auto___75003__$1 = cljs.core.seq(seq__74745_74984);
if(temp__5804__auto___75003__$1){
var seq__74745_75004__$1 = temp__5804__auto___75003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74745_75004__$1)){
var c__5565__auto___75005 = cljs.core.chunk_first(seq__74745_75004__$1);
var G__75006 = cljs.core.chunk_rest(seq__74745_75004__$1);
var G__75007 = c__5565__auto___75005;
var G__75008 = cljs.core.count(c__5565__auto___75005);
var G__75009 = (0);
seq__74745_74984 = G__75006;
chunk__74749_74985 = G__75007;
count__74750_74986 = G__75008;
i__74751_74987 = G__75009;
continue;
} else {
var node_75010 = cljs.core.first(seq__74745_75004__$1);
if(cljs.core.not(node_75010.shadow$old)){
var path_match_75011 = shadow.cljs.devtools.client.browser.match_paths(node_75010.getAttribute("href"),path);
if(cljs.core.truth_(path_match_75011)){
var new_link_75012 = (function (){var G__74765 = node_75010.cloneNode(true);
G__74765.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_75011),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__74765;
})();
(node_75010.shadow$old = true);

(new_link_75012.onload = ((function (seq__74745_74984,chunk__74749_74985,count__74750_74986,i__74751_74987,seq__74676,chunk__74678,count__74679,i__74680,new_link_75012,path_match_75011,node_75010,seq__74745_75004__$1,temp__5804__auto___75003__$1,path,seq__74676__$1,temp__5804__auto__,map__74675,map__74675__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_75010);
});})(seq__74745_74984,chunk__74749_74985,count__74750_74986,i__74751_74987,seq__74676,chunk__74678,count__74679,i__74680,new_link_75012,path_match_75011,node_75010,seq__74745_75004__$1,temp__5804__auto___75003__$1,path,seq__74676__$1,temp__5804__auto__,map__74675,map__74675__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_75011], 0));

goog.dom.insertSiblingAfter(new_link_75012,node_75010);


var G__75013 = cljs.core.next(seq__74745_75004__$1);
var G__75014 = null;
var G__75015 = (0);
var G__75016 = (0);
seq__74745_74984 = G__75013;
chunk__74749_74985 = G__75014;
count__74750_74986 = G__75015;
i__74751_74987 = G__75016;
continue;
} else {
var G__75017 = cljs.core.next(seq__74745_75004__$1);
var G__75018 = null;
var G__75019 = (0);
var G__75020 = (0);
seq__74745_74984 = G__75017;
chunk__74749_74985 = G__75018;
count__74750_74986 = G__75019;
i__74751_74987 = G__75020;
continue;
}
} else {
var G__75021 = cljs.core.next(seq__74745_75004__$1);
var G__75022 = null;
var G__75023 = (0);
var G__75024 = (0);
seq__74745_74984 = G__75021;
chunk__74749_74985 = G__75022;
count__74750_74986 = G__75023;
i__74751_74987 = G__75024;
continue;
}
}
} else {
}
}
break;
}


var G__75025 = cljs.core.next(seq__74676__$1);
var G__75026 = null;
var G__75027 = (0);
var G__75028 = (0);
seq__74676 = G__75025;
chunk__74678 = G__75026;
count__74679 = G__75027;
i__74680 = G__75028;
continue;
} else {
var G__75029 = cljs.core.next(seq__74676__$1);
var G__75030 = null;
var G__75031 = (0);
var G__75032 = (0);
seq__74676 = G__75029;
chunk__74678 = G__75030;
count__74679 = G__75031;
i__74680 = G__75032;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__74788){
var map__74789 = p__74788;
var map__74789__$1 = cljs.core.__destructure_map(map__74789);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74789__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__74825){
var map__74826 = p__74825;
var map__74826__$1 = cljs.core.__destructure_map(map__74826);
var _ = map__74826__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74826__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__74827,done,error){
var map__74828 = p__74827;
var map__74828__$1 = cljs.core.__destructure_map(map__74828);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74828__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__74829,done,error){
var map__74830 = p__74829;
var map__74830__$1 = cljs.core.__destructure_map(map__74830);
var msg = map__74830__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74830__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74830__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74830__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__74831){
var map__74833 = p__74831;
var map__74833__$1 = cljs.core.__destructure_map(map__74833);
var src = map__74833__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74833__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__74837 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__74837) : done.call(null,G__74837));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__74838){
var map__74840 = p__74838;
var map__74840__$1 = cljs.core.__destructure_map(map__74840);
var msg__$1 = map__74840__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74840__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e74841){var ex = e74841;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__74846){
var map__74849 = p__74846;
var map__74849__$1 = cljs.core.__destructure_map(map__74849);
var env = map__74849__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74849__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__74851){
var map__74852 = p__74851;
var map__74852__$1 = cljs.core.__destructure_map(map__74852);
var msg = map__74852__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74852__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__74853){
var map__74854 = p__74853;
var map__74854__$1 = cljs.core.__destructure_map(map__74854);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74854__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74854__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__74855){
var map__74856 = p__74855;
var map__74856__$1 = cljs.core.__destructure_map(map__74856);
var svc = map__74856__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74856__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__69739,res){
var map__69740 = p__69739;
var map__69740__$1 = cljs.core.__destructure_map(map__69740);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69740__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69740__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__69742 = res;
var G__69742__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69742,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__69742);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69742__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__69742__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__69746 = arguments.length;
switch (G__69746) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__69750,msg,handlers,timeout_after_ms){
var map__69752 = p__69750;
var map__69752__$1 = cljs.core.__destructure_map(map__69752);
var runtime = map__69752__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69752__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69947 = arguments.length;
var i__5767__auto___69948 = (0);
while(true){
if((i__5767__auto___69948 < len__5766__auto___69947)){
args__5772__auto__.push((arguments[i__5767__auto___69948]));

var G__69950 = (i__5767__auto___69948 + (1));
i__5767__auto___69948 = G__69950;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__69774,ev,args){
var map__69775 = p__69774;
var map__69775__$1 = cljs.core.__destructure_map(map__69775);
var runtime = map__69775__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__69776 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__69779 = null;
var count__69780 = (0);
var i__69781 = (0);
while(true){
if((i__69781 < count__69780)){
var ext = chunk__69779.cljs$core$IIndexed$_nth$arity$2(null,i__69781);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__69952 = seq__69776;
var G__69953 = chunk__69779;
var G__69954 = count__69780;
var G__69955 = (i__69781 + (1));
seq__69776 = G__69952;
chunk__69779 = G__69953;
count__69780 = G__69954;
i__69781 = G__69955;
continue;
} else {
var G__69956 = seq__69776;
var G__69957 = chunk__69779;
var G__69958 = count__69780;
var G__69959 = (i__69781 + (1));
seq__69776 = G__69956;
chunk__69779 = G__69957;
count__69780 = G__69958;
i__69781 = G__69959;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69776);
if(temp__5804__auto__){
var seq__69776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69776__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69776__$1);
var G__69967 = cljs.core.chunk_rest(seq__69776__$1);
var G__69968 = c__5565__auto__;
var G__69969 = cljs.core.count(c__5565__auto__);
var G__69970 = (0);
seq__69776 = G__69967;
chunk__69779 = G__69968;
count__69780 = G__69969;
i__69781 = G__69970;
continue;
} else {
var ext = cljs.core.first(seq__69776__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__69982 = cljs.core.next(seq__69776__$1);
var G__69983 = null;
var G__69984 = (0);
var G__69985 = (0);
seq__69776 = G__69982;
chunk__69779 = G__69983;
count__69780 = G__69984;
i__69781 = G__69985;
continue;
} else {
var G__69986 = cljs.core.next(seq__69776__$1);
var G__69987 = null;
var G__69988 = (0);
var G__69989 = (0);
seq__69776 = G__69986;
chunk__69779 = G__69987;
count__69780 = G__69988;
i__69781 = G__69989;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq69760){
var G__69761 = cljs.core.first(seq69760);
var seq69760__$1 = cljs.core.next(seq69760);
var G__69762 = cljs.core.first(seq69760__$1);
var seq69760__$2 = cljs.core.next(seq69760__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69761,G__69762,seq69760__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__69809,p__69810){
var map__69811 = p__69809;
var map__69811__$1 = cljs.core.__destructure_map(map__69811);
var runtime = map__69811__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69811__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__69812 = p__69810;
var map__69812__$1 = cljs.core.__destructure_map(map__69812);
var msg = map__69812__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69812__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__69816 = cljs.core.deref(state_ref);
var map__69816__$1 = cljs.core.__destructure_map(map__69816);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69816__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69816__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__69822){
var map__69823 = p__69822;
var map__69823__$1 = cljs.core.__destructure_map(map__69823);
var runtime = map__69823__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69823__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__69829,msg){
var map__69831 = p__69829;
var map__69831__$1 = cljs.core.__destructure_map(map__69831);
var runtime = map__69831__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__69843,key,p__69844){
var map__69845 = p__69843;
var map__69845__$1 = cljs.core.__destructure_map(map__69845);
var state = map__69845__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69845__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__69846 = p__69844;
var map__69846__$1 = cljs.core.__destructure_map(map__69846);
var spec = map__69846__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69846__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__69848,key,spec){
var map__69849 = p__69848;
var map__69849__$1 = cljs.core.__destructure_map(map__69849);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69849__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__69851_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__69851_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__69855_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__69855_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__69856_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__69856_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__69857_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__69857_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__69858_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__69858_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__69868,key){
var map__69870 = p__69868;
var map__69870__$1 = cljs.core.__destructure_map(map__69870);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69870__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__69878,msg){
var map__69879 = p__69878;
var map__69879__$1 = cljs.core.__destructure_map(map__69879);
var runtime = map__69879__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__69886,p__69887){
var map__69893 = p__69886;
var map__69893__$1 = cljs.core.__destructure_map(map__69893);
var runtime = map__69893__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__69896 = p__69887;
var map__69896__$1 = cljs.core.__destructure_map(map__69896);
var msg = map__69896__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69896__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69896__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__69903 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__69905 = null;
var count__69906 = (0);
var i__69907 = (0);
while(true){
if((i__69907 < count__69906)){
var map__69919 = chunk__69905.cljs$core$IIndexed$_nth$arity$2(null,i__69907);
var map__69919__$1 = cljs.core.__destructure_map(map__69919);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69919__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__70080 = seq__69903;
var G__70081 = chunk__69905;
var G__70082 = count__69906;
var G__70083 = (i__69907 + (1));
seq__69903 = G__70080;
chunk__69905 = G__70081;
count__69906 = G__70082;
i__69907 = G__70083;
continue;
} else {
var G__70089 = seq__69903;
var G__70090 = chunk__69905;
var G__70091 = count__69906;
var G__70092 = (i__69907 + (1));
seq__69903 = G__70089;
chunk__69905 = G__70090;
count__69906 = G__70091;
i__69907 = G__70092;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69903);
if(temp__5804__auto__){
var seq__69903__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69903__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69903__$1);
var G__70104 = cljs.core.chunk_rest(seq__69903__$1);
var G__70105 = c__5565__auto__;
var G__70106 = cljs.core.count(c__5565__auto__);
var G__70107 = (0);
seq__69903 = G__70104;
chunk__69905 = G__70105;
count__69906 = G__70106;
i__69907 = G__70107;
continue;
} else {
var map__69935 = cljs.core.first(seq__69903__$1);
var map__69935__$1 = cljs.core.__destructure_map(map__69935);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69935__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__70119 = cljs.core.next(seq__69903__$1);
var G__70120 = null;
var G__70121 = (0);
var G__70122 = (0);
seq__69903 = G__70119;
chunk__69905 = G__70120;
count__69906 = G__70121;
i__69907 = G__70122;
continue;
} else {
var G__70126 = cljs.core.next(seq__69903__$1);
var G__70127 = null;
var G__70128 = (0);
var G__70129 = (0);
seq__69903 = G__70126;
chunk__69905 = G__70127;
count__69906 = G__70128;
i__69907 = G__70129;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

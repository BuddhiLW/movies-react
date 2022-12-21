goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__73392,p__73393){
var map__73394 = p__73392;
var map__73394__$1 = cljs.core.__destructure_map(map__73394);
var svc = map__73394__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__73395 = p__73393;
var map__73395__$1 = cljs.core.__destructure_map(map__73395);
var msg = map__73395__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73395__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73395__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73395__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73395__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__73402,p__73403){
var map__73404 = p__73402;
var map__73404__$1 = cljs.core.__destructure_map(map__73404);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73404__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__73405 = p__73403;
var map__73405__$1 = cljs.core.__destructure_map(map__73405);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__73410,p__73411){
var map__73412 = p__73410;
var map__73412__$1 = cljs.core.__destructure_map(map__73412);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73412__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73412__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__73413 = p__73411;
var map__73413__$1 = cljs.core.__destructure_map(map__73413);
var msg = map__73413__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73413__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__73416,tid){
var map__73418 = p__73416;
var map__73418__$1 = cljs.core.__destructure_map(map__73418);
var svc = map__73418__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73418__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__73438 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__73439 = null;
var count__73440 = (0);
var i__73441 = (0);
while(true){
if((i__73441 < count__73440)){
var vec__73473 = chunk__73439.cljs$core$IIndexed$_nth$arity$2(null,i__73441);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73473,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73473,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__73509 = seq__73438;
var G__73510 = chunk__73439;
var G__73511 = count__73440;
var G__73512 = (i__73441 + (1));
seq__73438 = G__73509;
chunk__73439 = G__73510;
count__73440 = G__73511;
i__73441 = G__73512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__73438);
if(temp__5804__auto__){
var seq__73438__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73438__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__73438__$1);
var G__73515 = cljs.core.chunk_rest(seq__73438__$1);
var G__73516 = c__5565__auto__;
var G__73517 = cljs.core.count(c__5565__auto__);
var G__73518 = (0);
seq__73438 = G__73515;
chunk__73439 = G__73516;
count__73440 = G__73517;
i__73441 = G__73518;
continue;
} else {
var vec__73479 = cljs.core.first(seq__73438__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73479,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73479,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__73520 = cljs.core.next(seq__73438__$1);
var G__73521 = null;
var G__73522 = (0);
var G__73523 = (0);
seq__73438 = G__73520;
chunk__73439 = G__73521;
count__73440 = G__73522;
i__73441 = G__73523;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__73420_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__73420_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__73421_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__73421_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__73422_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__73422_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__73423_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__73423_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__73486){
var map__73487 = p__73486;
var map__73487__$1 = cljs.core.__destructure_map(map__73487);
var svc = map__73487__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73487__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73487__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__73961__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__73961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73965__i = 0, G__73965__a = new Array(arguments.length -  0);
while (G__73965__i < G__73965__a.length) {G__73965__a[G__73965__i] = arguments[G__73965__i + 0]; ++G__73965__i;}
  args = new cljs.core.IndexedSeq(G__73965__a,0,null);
} 
return G__73961__delegate.call(this,args);};
G__73961.cljs$lang$maxFixedArity = 0;
G__73961.cljs$lang$applyTo = (function (arglist__73966){
var args = cljs.core.seq(arglist__73966);
return G__73961__delegate(args);
});
G__73961.cljs$core$IFn$_invoke$arity$variadic = G__73961__delegate;
return G__73961;
})()
);

(o.error = (function() { 
var G__73967__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__73967 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73968__i = 0, G__73968__a = new Array(arguments.length -  0);
while (G__73968__i < G__73968__a.length) {G__73968__a[G__73968__i] = arguments[G__73968__i + 0]; ++G__73968__i;}
  args = new cljs.core.IndexedSeq(G__73968__a,0,null);
} 
return G__73967__delegate.call(this,args);};
G__73967.cljs$lang$maxFixedArity = 0;
G__73967.cljs$lang$applyTo = (function (arglist__73969){
var args = cljs.core.seq(arglist__73969);
return G__73967__delegate(args);
});
G__73967.cljs$core$IFn$_invoke$arity$variadic = G__73967__delegate;
return G__73967;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

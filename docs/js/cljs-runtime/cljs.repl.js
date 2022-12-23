goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__72536){
var map__72537 = p__72536;
var map__72537__$1 = cljs.core.__destructure_map(map__72537);
var m = map__72537__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72537__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72537__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72549_72889 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72550_72890 = null;
var count__72551_72891 = (0);
var i__72552_72892 = (0);
while(true){
if((i__72552_72892 < count__72551_72891)){
var f_72894 = chunk__72550_72890.cljs$core$IIndexed$_nth$arity$2(null,i__72552_72892);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_72894], 0));


var G__72897 = seq__72549_72889;
var G__72898 = chunk__72550_72890;
var G__72899 = count__72551_72891;
var G__72900 = (i__72552_72892 + (1));
seq__72549_72889 = G__72897;
chunk__72550_72890 = G__72898;
count__72551_72891 = G__72899;
i__72552_72892 = G__72900;
continue;
} else {
var temp__5804__auto___72903 = cljs.core.seq(seq__72549_72889);
if(temp__5804__auto___72903){
var seq__72549_72904__$1 = temp__5804__auto___72903;
if(cljs.core.chunked_seq_QMARK_(seq__72549_72904__$1)){
var c__5565__auto___72905 = cljs.core.chunk_first(seq__72549_72904__$1);
var G__72907 = cljs.core.chunk_rest(seq__72549_72904__$1);
var G__72908 = c__5565__auto___72905;
var G__72909 = cljs.core.count(c__5565__auto___72905);
var G__72910 = (0);
seq__72549_72889 = G__72907;
chunk__72550_72890 = G__72908;
count__72551_72891 = G__72909;
i__72552_72892 = G__72910;
continue;
} else {
var f_72912 = cljs.core.first(seq__72549_72904__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_72912], 0));


var G__72913 = cljs.core.next(seq__72549_72904__$1);
var G__72914 = null;
var G__72915 = (0);
var G__72916 = (0);
seq__72549_72889 = G__72913;
chunk__72550_72890 = G__72914;
count__72551_72891 = G__72915;
i__72552_72892 = G__72916;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_72917 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_72917], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_72917)))?cljs.core.second(arglists_72917):arglists_72917)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72572_72927 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72573_72928 = null;
var count__72574_72929 = (0);
var i__72575_72930 = (0);
while(true){
if((i__72575_72930 < count__72574_72929)){
var vec__72597_72931 = chunk__72573_72928.cljs$core$IIndexed$_nth$arity$2(null,i__72575_72930);
var name_72932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72597_72931,(0),null);
var map__72600_72933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72597_72931,(1),null);
var map__72600_72934__$1 = cljs.core.__destructure_map(map__72600_72933);
var doc_72935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72600_72934__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72600_72934__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_72932], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_72936], 0));

if(cljs.core.truth_(doc_72935)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_72935], 0));
} else {
}


var G__72937 = seq__72572_72927;
var G__72938 = chunk__72573_72928;
var G__72939 = count__72574_72929;
var G__72940 = (i__72575_72930 + (1));
seq__72572_72927 = G__72937;
chunk__72573_72928 = G__72938;
count__72574_72929 = G__72939;
i__72575_72930 = G__72940;
continue;
} else {
var temp__5804__auto___72941 = cljs.core.seq(seq__72572_72927);
if(temp__5804__auto___72941){
var seq__72572_72943__$1 = temp__5804__auto___72941;
if(cljs.core.chunked_seq_QMARK_(seq__72572_72943__$1)){
var c__5565__auto___72944 = cljs.core.chunk_first(seq__72572_72943__$1);
var G__72945 = cljs.core.chunk_rest(seq__72572_72943__$1);
var G__72946 = c__5565__auto___72944;
var G__72947 = cljs.core.count(c__5565__auto___72944);
var G__72948 = (0);
seq__72572_72927 = G__72945;
chunk__72573_72928 = G__72946;
count__72574_72929 = G__72947;
i__72575_72930 = G__72948;
continue;
} else {
var vec__72602_72950 = cljs.core.first(seq__72572_72943__$1);
var name_72951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72602_72950,(0),null);
var map__72605_72952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72602_72950,(1),null);
var map__72605_72953__$1 = cljs.core.__destructure_map(map__72605_72952);
var doc_72954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72605_72953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72605_72953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_72951], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_72955], 0));

if(cljs.core.truth_(doc_72954)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_72954], 0));
} else {
}


var G__72956 = cljs.core.next(seq__72572_72943__$1);
var G__72957 = null;
var G__72958 = (0);
var G__72959 = (0);
seq__72572_72927 = G__72956;
chunk__72573_72928 = G__72957;
count__72574_72929 = G__72958;
i__72575_72930 = G__72959;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__72606 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__72607 = null;
var count__72608 = (0);
var i__72609 = (0);
while(true){
if((i__72609 < count__72608)){
var role = chunk__72607.cljs$core$IIndexed$_nth$arity$2(null,i__72609);
var temp__5804__auto___72962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___72962__$1)){
var spec_72963 = temp__5804__auto___72962__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_72963)], 0));
} else {
}


var G__72966 = seq__72606;
var G__72967 = chunk__72607;
var G__72968 = count__72608;
var G__72969 = (i__72609 + (1));
seq__72606 = G__72966;
chunk__72607 = G__72967;
count__72608 = G__72968;
i__72609 = G__72969;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__72606);
if(temp__5804__auto____$1){
var seq__72606__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__72606__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72606__$1);
var G__72974 = cljs.core.chunk_rest(seq__72606__$1);
var G__72975 = c__5565__auto__;
var G__72976 = cljs.core.count(c__5565__auto__);
var G__72977 = (0);
seq__72606 = G__72974;
chunk__72607 = G__72975;
count__72608 = G__72976;
i__72609 = G__72977;
continue;
} else {
var role = cljs.core.first(seq__72606__$1);
var temp__5804__auto___72979__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___72979__$2)){
var spec_72980 = temp__5804__auto___72979__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_72980)], 0));
} else {
}


var G__72981 = cljs.core.next(seq__72606__$1);
var G__72982 = null;
var G__72983 = (0);
var G__72984 = (0);
seq__72606 = G__72981;
chunk__72607 = G__72982;
count__72608 = G__72983;
i__72609 = G__72984;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__72989 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__72990 = cljs.core.ex_cause(t);
via = G__72989;
t = G__72990;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__72679 = datafied_throwable;
var map__72679__$1 = cljs.core.__destructure_map(map__72679);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72679__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72679__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72679__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__72680 = cljs.core.last(via);
var map__72680__$1 = cljs.core.__destructure_map(map__72680);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72680__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72680__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72680__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__72682 = data;
var map__72682__$1 = cljs.core.__destructure_map(map__72682);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72682__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72682__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72682__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__72686 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__72686__$1 = cljs.core.__destructure_map(map__72686);
var top_data = map__72686__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72686__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__72707 = phase;
var G__72707__$1 = (((G__72707 instanceof cljs.core.Keyword))?G__72707.fqn:null);
switch (G__72707__$1) {
case "read-source":
var map__72725 = data;
var map__72725__$1 = cljs.core.__destructure_map(map__72725);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72725__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72725__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__72726 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__72726__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72726,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__72726);
var G__72726__$2 = (cljs.core.truth_((function (){var fexpr__72729 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__72729.cljs$core$IFn$_invoke$arity$1 ? fexpr__72729.cljs$core$IFn$_invoke$arity$1(source) : fexpr__72729.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72726__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__72726__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72726__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__72726__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__72736 = top_data;
var G__72736__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72736,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__72736);
var G__72736__$2 = (cljs.core.truth_((function (){var fexpr__72741 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__72741.cljs$core$IFn$_invoke$arity$1 ? fexpr__72741.cljs$core$IFn$_invoke$arity$1(source) : fexpr__72741.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__72736__$1);
var G__72736__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72736__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__72736__$2);
var G__72736__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72736__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__72736__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72736__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__72736__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__72758 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72758,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72758,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72758,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72758,(3),null);
var G__72764 = top_data;
var G__72764__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72764,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__72764);
var G__72764__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72764__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__72764__$1);
var G__72764__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72764__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__72764__$2);
var G__72764__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72764__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__72764__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72764__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__72764__$4;
}

break;
case "execution":
var vec__72780 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72780,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72780,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72780,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72780,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72668_SHARP_){
var or__5043__auto__ = (p1__72668_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__72784 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__72784.cljs$core$IFn$_invoke$arity$1 ? fexpr__72784.cljs$core$IFn$_invoke$arity$1(p1__72668_SHARP_) : fexpr__72784.call(null,p1__72668_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__72787 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__72787__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72787,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__72787);
var G__72787__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72787__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__72787__$1);
var G__72787__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72787__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__72787__$2);
var G__72787__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72787__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__72787__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72787__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__72787__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72707__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__72804){
var map__72806 = p__72804;
var map__72806__$1 = cljs.core.__destructure_map(map__72806);
var triage_data = map__72806__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72806__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__72812 = phase;
var G__72812__$1 = (((G__72812 instanceof cljs.core.Keyword))?G__72812.fqn:null);
switch (G__72812__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__72815 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__72816 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__72817 = loc;
var G__72818 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__72822_73018 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__72823_73019 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__72824_73020 = true;
var _STAR_print_fn_STAR__temp_val__72825_73021 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__72824_73020);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__72825_73021);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72801_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__72801_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__72823_73019);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__72822_73018);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__72815,G__72816,G__72817,G__72818) : format.call(null,G__72815,G__72816,G__72817,G__72818));

break;
case "macroexpansion":
var G__72831 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__72832 = cause_type;
var G__72833 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__72834 = loc;
var G__72835 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__72831,G__72832,G__72833,G__72834,G__72835) : format.call(null,G__72831,G__72832,G__72833,G__72834,G__72835));

break;
case "compile-syntax-check":
var G__72838 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__72839 = cause_type;
var G__72840 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__72841 = loc;
var G__72842 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__72838,G__72839,G__72840,G__72841,G__72842) : format.call(null,G__72838,G__72839,G__72840,G__72841,G__72842));

break;
case "compilation":
var G__72843 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__72844 = cause_type;
var G__72845 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__72846 = loc;
var G__72847 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__72843,G__72844,G__72845,G__72846,G__72847) : format.call(null,G__72843,G__72844,G__72845,G__72846,G__72847));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__72851 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__72852 = symbol;
var G__72853 = loc;
var G__72854 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__72855_73022 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__72856_73023 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__72857_73024 = true;
var _STAR_print_fn_STAR__temp_val__72858_73025 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__72857_73024);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__72858_73025);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72802_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__72802_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__72856_73023);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__72855_73022);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__72851,G__72852,G__72853,G__72854) : format.call(null,G__72851,G__72852,G__72853,G__72854));
} else {
var G__72864 = "Execution error%s at %s(%s).\n%s\n";
var G__72865 = cause_type;
var G__72866 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__72867 = loc;
var G__72868 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__72864,G__72865,G__72866,G__72867,G__72868) : format.call(null,G__72864,G__72865,G__72866,G__72867,G__72868));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72812__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

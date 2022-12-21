goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__69657 = arguments.length;
switch (G__69657) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69659 = (function (f,blockable,meta69660){
this.f = f;
this.blockable = blockable;
this.meta69660 = meta69660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69661,meta69660__$1){
var self__ = this;
var _69661__$1 = this;
return (new cljs.core.async.t_cljs$core$async69659(self__.f,self__.blockable,meta69660__$1));
}));

(cljs.core.async.t_cljs$core$async69659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69661){
var self__ = this;
var _69661__$1 = this;
return self__.meta69660;
}));

(cljs.core.async.t_cljs$core$async69659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async69659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async69659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta69660","meta69660",1133516857,null)], null);
}));

(cljs.core.async.t_cljs$core$async69659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69659");

(cljs.core.async.t_cljs$core$async69659.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async69659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69659.
 */
cljs.core.async.__GT_t_cljs$core$async69659 = (function cljs$core$async$__GT_t_cljs$core$async69659(f__$1,blockable__$1,meta69660){
return (new cljs.core.async.t_cljs$core$async69659(f__$1,blockable__$1,meta69660));
});

}

return (new cljs.core.async.t_cljs$core$async69659(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__69680 = arguments.length;
switch (G__69680) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__69693 = arguments.length;
switch (G__69693) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__69697 = arguments.length;
switch (G__69697) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_71949 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71949) : fn1.call(null,val_71949));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_71949) : fn1.call(null,val_71949));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__69705 = arguments.length;
switch (G__69705) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___71963 = n;
var x_71964 = (0);
while(true){
if((x_71964 < n__5633__auto___71963)){
(a[x_71964] = (0));

var G__71965 = (x_71964 + (1));
x_71964 = G__71965;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__71966 = (i + (1));
i = G__71966;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69709 = (function (flag,meta69710){
this.flag = flag;
this.meta69710 = meta69710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69711,meta69710__$1){
var self__ = this;
var _69711__$1 = this;
return (new cljs.core.async.t_cljs$core$async69709(self__.flag,meta69710__$1));
}));

(cljs.core.async.t_cljs$core$async69709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69711){
var self__ = this;
var _69711__$1 = this;
return self__.meta69710;
}));

(cljs.core.async.t_cljs$core$async69709.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async69709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta69710","meta69710",-1724226458,null)], null);
}));

(cljs.core.async.t_cljs$core$async69709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69709");

(cljs.core.async.t_cljs$core$async69709.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async69709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69709.
 */
cljs.core.async.__GT_t_cljs$core$async69709 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async69709(flag__$1,meta69710){
return (new cljs.core.async.t_cljs$core$async69709(flag__$1,meta69710));
});

}

return (new cljs.core.async.t_cljs$core$async69709(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async69712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69712 = (function (flag,cb,meta69713){
this.flag = flag;
this.cb = cb;
this.meta69713 = meta69713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async69712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69714,meta69713__$1){
var self__ = this;
var _69714__$1 = this;
return (new cljs.core.async.t_cljs$core$async69712(self__.flag,self__.cb,meta69713__$1));
}));

(cljs.core.async.t_cljs$core$async69712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69714){
var self__ = this;
var _69714__$1 = this;
return self__.meta69713;
}));

(cljs.core.async.t_cljs$core$async69712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async69712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async69712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async69712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async69712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta69713","meta69713",-231041388,null)], null);
}));

(cljs.core.async.t_cljs$core$async69712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async69712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69712");

(cljs.core.async.t_cljs$core$async69712.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async69712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async69712.
 */
cljs.core.async.__GT_t_cljs$core$async69712 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async69712(flag__$1,cb__$1,meta69713){
return (new cljs.core.async.t_cljs$core$async69712(flag__$1,cb__$1,meta69713));
});

}

return (new cljs.core.async.t_cljs$core$async69712(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69719_SHARP_){
var G__69721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69719_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69721) : fret.call(null,G__69721));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__69720_SHARP_){
var G__69722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__69720_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__69722) : fret.call(null,G__69722));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__71981 = (i + (1));
i = G__71981;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___71987 = arguments.length;
var i__5767__auto___71988 = (0);
while(true){
if((i__5767__auto___71988 < len__5766__auto___71987)){
args__5772__auto__.push((arguments[i__5767__auto___71988]));

var G__71989 = (i__5767__auto___71988 + (1));
i__5767__auto___71988 = G__71989;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__69729){
var map__69730 = p__69729;
var map__69730__$1 = cljs.core.__destructure_map(map__69730);
var opts = map__69730__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq69723){
var G__69724 = cljs.core.first(seq69723);
var seq69723__$1 = cljs.core.next(seq69723);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69724,seq69723__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__69733 = arguments.length;
switch (G__69733) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__69582__auto___71996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_69784){
var state_val_69786 = (state_69784[(1)]);
if((state_val_69786 === (7))){
var inst_69768 = (state_69784[(2)]);
var state_69784__$1 = state_69784;
var statearr_69793_71998 = state_69784__$1;
(statearr_69793_71998[(2)] = inst_69768);

(statearr_69793_71998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (1))){
var state_69784__$1 = state_69784;
var statearr_69798_72000 = state_69784__$1;
(statearr_69798_72000[(2)] = null);

(statearr_69798_72000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (4))){
var inst_69744 = (state_69784[(7)]);
var inst_69744__$1 = (state_69784[(2)]);
var inst_69747 = (inst_69744__$1 == null);
var state_69784__$1 = (function (){var statearr_69799 = state_69784;
(statearr_69799[(7)] = inst_69744__$1);

return statearr_69799;
})();
if(cljs.core.truth_(inst_69747)){
var statearr_69800_72002 = state_69784__$1;
(statearr_69800_72002[(1)] = (5));

} else {
var statearr_69804_72003 = state_69784__$1;
(statearr_69804_72003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (13))){
var state_69784__$1 = state_69784;
var statearr_69808_72004 = state_69784__$1;
(statearr_69808_72004[(2)] = null);

(statearr_69808_72004[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (6))){
var inst_69744 = (state_69784[(7)]);
var state_69784__$1 = state_69784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69784__$1,(11),to,inst_69744);
} else {
if((state_val_69786 === (3))){
var inst_69772 = (state_69784[(2)]);
var state_69784__$1 = state_69784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69784__$1,inst_69772);
} else {
if((state_val_69786 === (12))){
var state_69784__$1 = state_69784;
var statearr_69817_72005 = state_69784__$1;
(statearr_69817_72005[(2)] = null);

(statearr_69817_72005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (2))){
var state_69784__$1 = state_69784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69784__$1,(4),from);
} else {
if((state_val_69786 === (11))){
var inst_69758 = (state_69784[(2)]);
var state_69784__$1 = state_69784;
if(cljs.core.truth_(inst_69758)){
var statearr_69818_72006 = state_69784__$1;
(statearr_69818_72006[(1)] = (12));

} else {
var statearr_69819_72007 = state_69784__$1;
(statearr_69819_72007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (9))){
var state_69784__$1 = state_69784;
var statearr_69821_72008 = state_69784__$1;
(statearr_69821_72008[(2)] = null);

(statearr_69821_72008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (5))){
var state_69784__$1 = state_69784;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69824_72009 = state_69784__$1;
(statearr_69824_72009[(1)] = (8));

} else {
var statearr_69826_72010 = state_69784__$1;
(statearr_69826_72010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (14))){
var inst_69766 = (state_69784[(2)]);
var state_69784__$1 = state_69784;
var statearr_69827_72013 = state_69784__$1;
(statearr_69827_72013[(2)] = inst_69766);

(statearr_69827_72013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (10))){
var inst_69755 = (state_69784[(2)]);
var state_69784__$1 = state_69784;
var statearr_69830_72015 = state_69784__$1;
(statearr_69830_72015[(2)] = inst_69755);

(statearr_69830_72015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69786 === (8))){
var inst_69751 = cljs.core.async.close_BANG_(to);
var state_69784__$1 = state_69784;
var statearr_69834_72016 = state_69784__$1;
(statearr_69834_72016[(2)] = inst_69751);

(statearr_69834_72016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_69836 = [null,null,null,null,null,null,null,null];
(statearr_69836[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_69836[(1)] = (1));

return statearr_69836;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_69784){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_69784);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e69837){if((e69837 instanceof Object)){
var ex__69381__auto__ = e69837;
var statearr_69838_72017 = state_69784;
(statearr_69838_72017[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72025 = state_69784;
state_69784 = G__72025;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_69784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_69784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_69842 = f__69583__auto__();
(statearr_69842[(6)] = c__69582__auto___71996);

return statearr_69842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__69850){
var vec__69852 = p__69850;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69852,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69852,(1),null);
var job = vec__69852;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__69582__auto___72026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_69864){
var state_val_69865 = (state_69864[(1)]);
if((state_val_69865 === (1))){
var state_69864__$1 = state_69864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69864__$1,(2),res,v);
} else {
if((state_val_69865 === (2))){
var inst_69861 = (state_69864[(2)]);
var inst_69862 = cljs.core.async.close_BANG_(res);
var state_69864__$1 = (function (){var statearr_69866 = state_69864;
(statearr_69866[(7)] = inst_69861);

return statearr_69866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69864__$1,inst_69862);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0 = (function (){
var statearr_69867 = [null,null,null,null,null,null,null,null];
(statearr_69867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__);

(statearr_69867[(1)] = (1));

return statearr_69867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1 = (function (state_69864){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_69864);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e69869){if((e69869 instanceof Object)){
var ex__69381__auto__ = e69869;
var statearr_69871_72030 = state_69864;
(statearr_69871_72030[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72031 = state_69864;
state_69864 = G__72031;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = function(state_69864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1.call(this,state_69864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_69873 = f__69583__auto__();
(statearr_69873[(6)] = c__69582__auto___72026);

return statearr_69873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__69874){
var vec__69875 = p__69874;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69875,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69875,(1),null);
var job = vec__69875;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___72034 = n;
var __72035 = (0);
while(true){
if((__72035 < n__5633__auto___72034)){
var G__69880_72036 = type;
var G__69880_72037__$1 = (((G__69880_72036 instanceof cljs.core.Keyword))?G__69880_72036.fqn:null);
switch (G__69880_72037__$1) {
case "compute":
var c__69582__auto___72039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72035,c__69582__auto___72039,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async){
return (function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = ((function (__72035,c__69582__auto___72039,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async){
return (function (state_69898){
var state_val_69899 = (state_69898[(1)]);
if((state_val_69899 === (1))){
var state_69898__$1 = state_69898;
var statearr_69900_72040 = state_69898__$1;
(statearr_69900_72040[(2)] = null);

(statearr_69900_72040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69899 === (2))){
var state_69898__$1 = state_69898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69898__$1,(4),jobs);
} else {
if((state_val_69899 === (3))){
var inst_69895 = (state_69898[(2)]);
var state_69898__$1 = state_69898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69898__$1,inst_69895);
} else {
if((state_val_69899 === (4))){
var inst_69884 = (state_69898[(2)]);
var inst_69885 = process__$1(inst_69884);
var state_69898__$1 = state_69898;
if(cljs.core.truth_(inst_69885)){
var statearr_69901_72043 = state_69898__$1;
(statearr_69901_72043[(1)] = (5));

} else {
var statearr_69902_72044 = state_69898__$1;
(statearr_69902_72044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69899 === (5))){
var state_69898__$1 = state_69898;
var statearr_69909_72046 = state_69898__$1;
(statearr_69909_72046[(2)] = null);

(statearr_69909_72046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69899 === (6))){
var state_69898__$1 = state_69898;
var statearr_69910_72047 = state_69898__$1;
(statearr_69910_72047[(2)] = null);

(statearr_69910_72047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69899 === (7))){
var inst_69892 = (state_69898[(2)]);
var state_69898__$1 = state_69898;
var statearr_69913_72049 = state_69898__$1;
(statearr_69913_72049[(2)] = inst_69892);

(statearr_69913_72049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72035,c__69582__auto___72039,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async))
;
return ((function (__72035,switch__69377__auto__,c__69582__auto___72039,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0 = (function (){
var statearr_69914 = [null,null,null,null,null,null,null];
(statearr_69914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__);

(statearr_69914[(1)] = (1));

return statearr_69914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1 = (function (state_69898){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_69898);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e69915){if((e69915 instanceof Object)){
var ex__69381__auto__ = e69915;
var statearr_69917_72051 = state_69898;
(statearr_69917_72051[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72052 = state_69898;
state_69898 = G__72052;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = function(state_69898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1.call(this,state_69898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__;
})()
;})(__72035,switch__69377__auto__,c__69582__auto___72039,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async))
})();
var state__69584__auto__ = (function (){var statearr_69918 = f__69583__auto__();
(statearr_69918[(6)] = c__69582__auto___72039);

return statearr_69918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
});})(__72035,c__69582__auto___72039,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async))
);


break;
case "async":
var c__69582__auto___72054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72035,c__69582__auto___72054,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async){
return (function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = ((function (__72035,c__69582__auto___72054,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async){
return (function (state_69932){
var state_val_69933 = (state_69932[(1)]);
if((state_val_69933 === (1))){
var state_69932__$1 = state_69932;
var statearr_69937_72055 = state_69932__$1;
(statearr_69937_72055[(2)] = null);

(statearr_69937_72055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69933 === (2))){
var state_69932__$1 = state_69932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69932__$1,(4),jobs);
} else {
if((state_val_69933 === (3))){
var inst_69930 = (state_69932[(2)]);
var state_69932__$1 = state_69932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69932__$1,inst_69930);
} else {
if((state_val_69933 === (4))){
var inst_69922 = (state_69932[(2)]);
var inst_69923 = async(inst_69922);
var state_69932__$1 = state_69932;
if(cljs.core.truth_(inst_69923)){
var statearr_69938_72056 = state_69932__$1;
(statearr_69938_72056[(1)] = (5));

} else {
var statearr_69939_72057 = state_69932__$1;
(statearr_69939_72057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69933 === (5))){
var state_69932__$1 = state_69932;
var statearr_69940_72058 = state_69932__$1;
(statearr_69940_72058[(2)] = null);

(statearr_69940_72058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69933 === (6))){
var state_69932__$1 = state_69932;
var statearr_69942_72059 = state_69932__$1;
(statearr_69942_72059[(2)] = null);

(statearr_69942_72059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69933 === (7))){
var inst_69928 = (state_69932[(2)]);
var state_69932__$1 = state_69932;
var statearr_69943_72060 = state_69932__$1;
(statearr_69943_72060[(2)] = inst_69928);

(statearr_69943_72060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72035,c__69582__auto___72054,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async))
;
return ((function (__72035,switch__69377__auto__,c__69582__auto___72054,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0 = (function (){
var statearr_69945 = [null,null,null,null,null,null,null];
(statearr_69945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__);

(statearr_69945[(1)] = (1));

return statearr_69945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1 = (function (state_69932){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_69932);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e69946){if((e69946 instanceof Object)){
var ex__69381__auto__ = e69946;
var statearr_69949_72063 = state_69932;
(statearr_69949_72063[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72064 = state_69932;
state_69932 = G__72064;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = function(state_69932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1.call(this,state_69932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__;
})()
;})(__72035,switch__69377__auto__,c__69582__auto___72054,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async))
})();
var state__69584__auto__ = (function (){var statearr_69951 = f__69583__auto__();
(statearr_69951[(6)] = c__69582__auto___72054);

return statearr_69951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
});})(__72035,c__69582__auto___72054,G__69880_72036,G__69880_72037__$1,n__5633__auto___72034,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69880_72037__$1)].join('')));

}

var G__72065 = (__72035 + (1));
__72035 = G__72065;
continue;
} else {
}
break;
}

var c__69582__auto___72070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70016){
var state_val_70017 = (state_70016[(1)]);
if((state_val_70017 === (7))){
var inst_70012 = (state_70016[(2)]);
var state_70016__$1 = state_70016;
var statearr_70020_72071 = state_70016__$1;
(statearr_70020_72071[(2)] = inst_70012);

(statearr_70020_72071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (1))){
var state_70016__$1 = state_70016;
var statearr_70021_72072 = state_70016__$1;
(statearr_70021_72072[(2)] = null);

(statearr_70021_72072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (4))){
var inst_69966 = (state_70016[(7)]);
var inst_69966__$1 = (state_70016[(2)]);
var inst_69971 = (inst_69966__$1 == null);
var state_70016__$1 = (function (){var statearr_70024 = state_70016;
(statearr_70024[(7)] = inst_69966__$1);

return statearr_70024;
})();
if(cljs.core.truth_(inst_69971)){
var statearr_70025_72073 = state_70016__$1;
(statearr_70025_72073[(1)] = (5));

} else {
var statearr_70026_72074 = state_70016__$1;
(statearr_70026_72074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (6))){
var inst_69966 = (state_70016[(7)]);
var inst_69977 = (state_70016[(8)]);
var inst_69977__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_69997 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70000 = [inst_69966,inst_69977__$1];
var inst_70001 = (new cljs.core.PersistentVector(null,2,(5),inst_69997,inst_70000,null));
var state_70016__$1 = (function (){var statearr_70027 = state_70016;
(statearr_70027[(8)] = inst_69977__$1);

return statearr_70027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70016__$1,(8),jobs,inst_70001);
} else {
if((state_val_70017 === (3))){
var inst_70014 = (state_70016[(2)]);
var state_70016__$1 = state_70016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70016__$1,inst_70014);
} else {
if((state_val_70017 === (2))){
var state_70016__$1 = state_70016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70016__$1,(4),from);
} else {
if((state_val_70017 === (9))){
var inst_70009 = (state_70016[(2)]);
var state_70016__$1 = (function (){var statearr_70049 = state_70016;
(statearr_70049[(9)] = inst_70009);

return statearr_70049;
})();
var statearr_70051_72075 = state_70016__$1;
(statearr_70051_72075[(2)] = null);

(statearr_70051_72075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (5))){
var inst_69974 = cljs.core.async.close_BANG_(jobs);
var state_70016__$1 = state_70016;
var statearr_70052_72078 = state_70016__$1;
(statearr_70052_72078[(2)] = inst_69974);

(statearr_70052_72078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70017 === (8))){
var inst_69977 = (state_70016[(8)]);
var inst_70003 = (state_70016[(2)]);
var state_70016__$1 = (function (){var statearr_70053 = state_70016;
(statearr_70053[(10)] = inst_70003);

return statearr_70053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70016__$1,(9),results,inst_69977);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0 = (function (){
var statearr_70058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70058[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__);

(statearr_70058[(1)] = (1));

return statearr_70058;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1 = (function (state_70016){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70016);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70064){if((e70064 instanceof Object)){
var ex__69381__auto__ = e70064;
var statearr_70067_72080 = state_70016;
(statearr_70067_72080[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72081 = state_70016;
state_70016 = G__72081;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = function(state_70016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1.call(this,state_70016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70078 = f__69583__auto__();
(statearr_70078[(6)] = c__69582__auto___72070);

return statearr_70078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


var c__69582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70159){
var state_val_70160 = (state_70159[(1)]);
if((state_val_70160 === (7))){
var inst_70154 = (state_70159[(2)]);
var state_70159__$1 = state_70159;
var statearr_70162_72082 = state_70159__$1;
(statearr_70162_72082[(2)] = inst_70154);

(statearr_70162_72082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (20))){
var state_70159__$1 = state_70159;
var statearr_70163_72089 = state_70159__$1;
(statearr_70163_72089[(2)] = null);

(statearr_70163_72089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (1))){
var state_70159__$1 = state_70159;
var statearr_70164_72090 = state_70159__$1;
(statearr_70164_72090[(2)] = null);

(statearr_70164_72090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (4))){
var inst_70094 = (state_70159[(7)]);
var inst_70094__$1 = (state_70159[(2)]);
var inst_70096 = (inst_70094__$1 == null);
var state_70159__$1 = (function (){var statearr_70165 = state_70159;
(statearr_70165[(7)] = inst_70094__$1);

return statearr_70165;
})();
if(cljs.core.truth_(inst_70096)){
var statearr_70171_72091 = state_70159__$1;
(statearr_70171_72091[(1)] = (5));

} else {
var statearr_70172_72092 = state_70159__$1;
(statearr_70172_72092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (15))){
var inst_70136 = (state_70159[(8)]);
var state_70159__$1 = state_70159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70159__$1,(18),to,inst_70136);
} else {
if((state_val_70160 === (21))){
var inst_70149 = (state_70159[(2)]);
var state_70159__$1 = state_70159;
var statearr_70181_72096 = state_70159__$1;
(statearr_70181_72096[(2)] = inst_70149);

(statearr_70181_72096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (13))){
var inst_70151 = (state_70159[(2)]);
var state_70159__$1 = (function (){var statearr_70183 = state_70159;
(statearr_70183[(9)] = inst_70151);

return statearr_70183;
})();
var statearr_70184_72098 = state_70159__$1;
(statearr_70184_72098[(2)] = null);

(statearr_70184_72098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (6))){
var inst_70094 = (state_70159[(7)]);
var state_70159__$1 = state_70159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70159__$1,(11),inst_70094);
} else {
if((state_val_70160 === (17))){
var inst_70144 = (state_70159[(2)]);
var state_70159__$1 = state_70159;
if(cljs.core.truth_(inst_70144)){
var statearr_70185_72100 = state_70159__$1;
(statearr_70185_72100[(1)] = (19));

} else {
var statearr_70186_72104 = state_70159__$1;
(statearr_70186_72104[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (3))){
var inst_70156 = (state_70159[(2)]);
var state_70159__$1 = state_70159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70159__$1,inst_70156);
} else {
if((state_val_70160 === (12))){
var inst_70125 = (state_70159[(10)]);
var state_70159__$1 = state_70159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70159__$1,(14),inst_70125);
} else {
if((state_val_70160 === (2))){
var state_70159__$1 = state_70159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70159__$1,(4),results);
} else {
if((state_val_70160 === (19))){
var state_70159__$1 = state_70159;
var statearr_70188_72105 = state_70159__$1;
(statearr_70188_72105[(2)] = null);

(statearr_70188_72105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (11))){
var inst_70125 = (state_70159[(2)]);
var state_70159__$1 = (function (){var statearr_70189 = state_70159;
(statearr_70189[(10)] = inst_70125);

return statearr_70189;
})();
var statearr_70190_72106 = state_70159__$1;
(statearr_70190_72106[(2)] = null);

(statearr_70190_72106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (9))){
var state_70159__$1 = state_70159;
var statearr_70191_72107 = state_70159__$1;
(statearr_70191_72107[(2)] = null);

(statearr_70191_72107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (5))){
var state_70159__$1 = state_70159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70192_72108 = state_70159__$1;
(statearr_70192_72108[(1)] = (8));

} else {
var statearr_70193_72109 = state_70159__$1;
(statearr_70193_72109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (14))){
var inst_70138 = (state_70159[(11)]);
var inst_70136 = (state_70159[(8)]);
var inst_70136__$1 = (state_70159[(2)]);
var inst_70137 = (inst_70136__$1 == null);
var inst_70138__$1 = cljs.core.not(inst_70137);
var state_70159__$1 = (function (){var statearr_70195 = state_70159;
(statearr_70195[(11)] = inst_70138__$1);

(statearr_70195[(8)] = inst_70136__$1);

return statearr_70195;
})();
if(inst_70138__$1){
var statearr_70196_72116 = state_70159__$1;
(statearr_70196_72116[(1)] = (15));

} else {
var statearr_70197_72117 = state_70159__$1;
(statearr_70197_72117[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (16))){
var inst_70138 = (state_70159[(11)]);
var state_70159__$1 = state_70159;
var statearr_70198_72118 = state_70159__$1;
(statearr_70198_72118[(2)] = inst_70138);

(statearr_70198_72118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (10))){
var inst_70113 = (state_70159[(2)]);
var state_70159__$1 = state_70159;
var statearr_70199_72123 = state_70159__$1;
(statearr_70199_72123[(2)] = inst_70113);

(statearr_70199_72123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (18))){
var inst_70141 = (state_70159[(2)]);
var state_70159__$1 = state_70159;
var statearr_70200_72124 = state_70159__$1;
(statearr_70200_72124[(2)] = inst_70141);

(statearr_70200_72124[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70160 === (8))){
var inst_70103 = cljs.core.async.close_BANG_(to);
var state_70159__$1 = state_70159;
var statearr_70202_72125 = state_70159__$1;
(statearr_70202_72125[(2)] = inst_70103);

(statearr_70202_72125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0 = (function (){
var statearr_70203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__);

(statearr_70203[(1)] = (1));

return statearr_70203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1 = (function (state_70159){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70159);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70204){if((e70204 instanceof Object)){
var ex__69381__auto__ = e70204;
var statearr_70205_72132 = state_70159;
(statearr_70205_72132[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72133 = state_70159;
state_70159 = G__72133;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__ = function(state_70159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1.call(this,state_70159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__69378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70206 = f__69583__auto__();
(statearr_70206[(6)] = c__69582__auto__);

return statearr_70206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));

return c__69582__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__70209 = arguments.length;
switch (G__70209) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__70212 = arguments.length;
switch (G__70212) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__70215 = arguments.length;
switch (G__70215) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__69582__auto___72139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70242){
var state_val_70243 = (state_70242[(1)]);
if((state_val_70243 === (7))){
var inst_70238 = (state_70242[(2)]);
var state_70242__$1 = state_70242;
var statearr_70244_72145 = state_70242__$1;
(statearr_70244_72145[(2)] = inst_70238);

(statearr_70244_72145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (1))){
var state_70242__$1 = state_70242;
var statearr_70245_72146 = state_70242__$1;
(statearr_70245_72146[(2)] = null);

(statearr_70245_72146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (4))){
var inst_70219 = (state_70242[(7)]);
var inst_70219__$1 = (state_70242[(2)]);
var inst_70220 = (inst_70219__$1 == null);
var state_70242__$1 = (function (){var statearr_70247 = state_70242;
(statearr_70247[(7)] = inst_70219__$1);

return statearr_70247;
})();
if(cljs.core.truth_(inst_70220)){
var statearr_70248_72154 = state_70242__$1;
(statearr_70248_72154[(1)] = (5));

} else {
var statearr_70249_72155 = state_70242__$1;
(statearr_70249_72155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (13))){
var state_70242__$1 = state_70242;
var statearr_70250_72156 = state_70242__$1;
(statearr_70250_72156[(2)] = null);

(statearr_70250_72156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (6))){
var inst_70219 = (state_70242[(7)]);
var inst_70225 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_70219) : p.call(null,inst_70219));
var state_70242__$1 = state_70242;
if(cljs.core.truth_(inst_70225)){
var statearr_70251_72157 = state_70242__$1;
(statearr_70251_72157[(1)] = (9));

} else {
var statearr_70252_72158 = state_70242__$1;
(statearr_70252_72158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (3))){
var inst_70240 = (state_70242[(2)]);
var state_70242__$1 = state_70242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70242__$1,inst_70240);
} else {
if((state_val_70243 === (12))){
var state_70242__$1 = state_70242;
var statearr_70253_72159 = state_70242__$1;
(statearr_70253_72159[(2)] = null);

(statearr_70253_72159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (2))){
var state_70242__$1 = state_70242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70242__$1,(4),ch);
} else {
if((state_val_70243 === (11))){
var inst_70219 = (state_70242[(7)]);
var inst_70229 = (state_70242[(2)]);
var state_70242__$1 = state_70242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70242__$1,(8),inst_70229,inst_70219);
} else {
if((state_val_70243 === (9))){
var state_70242__$1 = state_70242;
var statearr_70254_72160 = state_70242__$1;
(statearr_70254_72160[(2)] = tc);

(statearr_70254_72160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (5))){
var inst_70222 = cljs.core.async.close_BANG_(tc);
var inst_70223 = cljs.core.async.close_BANG_(fc);
var state_70242__$1 = (function (){var statearr_70255 = state_70242;
(statearr_70255[(8)] = inst_70222);

return statearr_70255;
})();
var statearr_70256_72161 = state_70242__$1;
(statearr_70256_72161[(2)] = inst_70223);

(statearr_70256_72161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (14))){
var inst_70236 = (state_70242[(2)]);
var state_70242__$1 = state_70242;
var statearr_70258_72162 = state_70242__$1;
(statearr_70258_72162[(2)] = inst_70236);

(statearr_70258_72162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (10))){
var state_70242__$1 = state_70242;
var statearr_70259_72163 = state_70242__$1;
(statearr_70259_72163[(2)] = fc);

(statearr_70259_72163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70243 === (8))){
var inst_70231 = (state_70242[(2)]);
var state_70242__$1 = state_70242;
if(cljs.core.truth_(inst_70231)){
var statearr_70260_72164 = state_70242__$1;
(statearr_70260_72164[(1)] = (12));

} else {
var statearr_70261_72165 = state_70242__$1;
(statearr_70261_72165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_70262 = [null,null,null,null,null,null,null,null,null];
(statearr_70262[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_70262[(1)] = (1));

return statearr_70262;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_70242){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70242);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70263){if((e70263 instanceof Object)){
var ex__69381__auto__ = e70263;
var statearr_70264_72167 = state_70242;
(statearr_70264_72167[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72168 = state_70242;
state_70242 = G__72168;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_70242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_70242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70266 = f__69583__auto__();
(statearr_70266[(6)] = c__69582__auto___72139);

return statearr_70266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__69582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70288){
var state_val_70289 = (state_70288[(1)]);
if((state_val_70289 === (7))){
var inst_70284 = (state_70288[(2)]);
var state_70288__$1 = state_70288;
var statearr_70291_72174 = state_70288__$1;
(statearr_70291_72174[(2)] = inst_70284);

(statearr_70291_72174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (1))){
var inst_70268 = init;
var state_70288__$1 = (function (){var statearr_70292 = state_70288;
(statearr_70292[(7)] = inst_70268);

return statearr_70292;
})();
var statearr_70293_72178 = state_70288__$1;
(statearr_70293_72178[(2)] = null);

(statearr_70293_72178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (4))){
var inst_70271 = (state_70288[(8)]);
var inst_70271__$1 = (state_70288[(2)]);
var inst_70272 = (inst_70271__$1 == null);
var state_70288__$1 = (function (){var statearr_70294 = state_70288;
(statearr_70294[(8)] = inst_70271__$1);

return statearr_70294;
})();
if(cljs.core.truth_(inst_70272)){
var statearr_70295_72179 = state_70288__$1;
(statearr_70295_72179[(1)] = (5));

} else {
var statearr_70296_72180 = state_70288__$1;
(statearr_70296_72180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (6))){
var inst_70268 = (state_70288[(7)]);
var inst_70271 = (state_70288[(8)]);
var inst_70275 = (state_70288[(9)]);
var inst_70275__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_70268,inst_70271) : f.call(null,inst_70268,inst_70271));
var inst_70276 = cljs.core.reduced_QMARK_(inst_70275__$1);
var state_70288__$1 = (function (){var statearr_70297 = state_70288;
(statearr_70297[(9)] = inst_70275__$1);

return statearr_70297;
})();
if(inst_70276){
var statearr_70298_72186 = state_70288__$1;
(statearr_70298_72186[(1)] = (8));

} else {
var statearr_70300_72187 = state_70288__$1;
(statearr_70300_72187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (3))){
var inst_70286 = (state_70288[(2)]);
var state_70288__$1 = state_70288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70288__$1,inst_70286);
} else {
if((state_val_70289 === (2))){
var state_70288__$1 = state_70288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70288__$1,(4),ch);
} else {
if((state_val_70289 === (9))){
var inst_70275 = (state_70288[(9)]);
var inst_70268 = inst_70275;
var state_70288__$1 = (function (){var statearr_70301 = state_70288;
(statearr_70301[(7)] = inst_70268);

return statearr_70301;
})();
var statearr_70302_72191 = state_70288__$1;
(statearr_70302_72191[(2)] = null);

(statearr_70302_72191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (5))){
var inst_70268 = (state_70288[(7)]);
var state_70288__$1 = state_70288;
var statearr_70303_72192 = state_70288__$1;
(statearr_70303_72192[(2)] = inst_70268);

(statearr_70303_72192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (10))){
var inst_70282 = (state_70288[(2)]);
var state_70288__$1 = state_70288;
var statearr_70304_72196 = state_70288__$1;
(statearr_70304_72196[(2)] = inst_70282);

(statearr_70304_72196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70289 === (8))){
var inst_70275 = (state_70288[(9)]);
var inst_70278 = cljs.core.deref(inst_70275);
var state_70288__$1 = state_70288;
var statearr_70306_72197 = state_70288__$1;
(statearr_70306_72197[(2)] = inst_70278);

(statearr_70306_72197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__69378__auto__ = null;
var cljs$core$async$reduce_$_state_machine__69378__auto____0 = (function (){
var statearr_70307 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70307[(0)] = cljs$core$async$reduce_$_state_machine__69378__auto__);

(statearr_70307[(1)] = (1));

return statearr_70307;
});
var cljs$core$async$reduce_$_state_machine__69378__auto____1 = (function (state_70288){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70288);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70308){if((e70308 instanceof Object)){
var ex__69381__auto__ = e70308;
var statearr_70309_72198 = state_70288;
(statearr_70309_72198[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72202 = state_70288;
state_70288 = G__72202;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__69378__auto__ = function(state_70288){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__69378__auto____1.call(this,state_70288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__69378__auto____0;
cljs$core$async$reduce_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__69378__auto____1;
return cljs$core$async$reduce_$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70311 = f__69583__auto__();
(statearr_70311[(6)] = c__69582__auto__);

return statearr_70311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));

return c__69582__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__69582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70317){
var state_val_70318 = (state_70317[(1)]);
if((state_val_70318 === (1))){
var inst_70312 = cljs.core.async.reduce(f__$1,init,ch);
var state_70317__$1 = state_70317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70317__$1,(2),inst_70312);
} else {
if((state_val_70318 === (2))){
var inst_70314 = (state_70317[(2)]);
var inst_70315 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_70314) : f__$1.call(null,inst_70314));
var state_70317__$1 = state_70317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70317__$1,inst_70315);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__69378__auto__ = null;
var cljs$core$async$transduce_$_state_machine__69378__auto____0 = (function (){
var statearr_70320 = [null,null,null,null,null,null,null];
(statearr_70320[(0)] = cljs$core$async$transduce_$_state_machine__69378__auto__);

(statearr_70320[(1)] = (1));

return statearr_70320;
});
var cljs$core$async$transduce_$_state_machine__69378__auto____1 = (function (state_70317){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70317);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70321){if((e70321 instanceof Object)){
var ex__69381__auto__ = e70321;
var statearr_70322_72214 = state_70317;
(statearr_70322_72214[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72215 = state_70317;
state_70317 = G__72215;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__69378__auto__ = function(state_70317){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__69378__auto____1.call(this,state_70317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__69378__auto____0;
cljs$core$async$transduce_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__69378__auto____1;
return cljs$core$async$transduce_$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70323 = f__69583__auto__();
(statearr_70323[(6)] = c__69582__auto__);

return statearr_70323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));

return c__69582__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__70326 = arguments.length;
switch (G__70326) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__69582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70352){
var state_val_70353 = (state_70352[(1)]);
if((state_val_70353 === (7))){
var inst_70334 = (state_70352[(2)]);
var state_70352__$1 = state_70352;
var statearr_70354_72220 = state_70352__$1;
(statearr_70354_72220[(2)] = inst_70334);

(statearr_70354_72220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (1))){
var inst_70328 = cljs.core.seq(coll);
var inst_70329 = inst_70328;
var state_70352__$1 = (function (){var statearr_70356 = state_70352;
(statearr_70356[(7)] = inst_70329);

return statearr_70356;
})();
var statearr_70357_72221 = state_70352__$1;
(statearr_70357_72221[(2)] = null);

(statearr_70357_72221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (4))){
var inst_70329 = (state_70352[(7)]);
var inst_70332 = cljs.core.first(inst_70329);
var state_70352__$1 = state_70352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70352__$1,(7),ch,inst_70332);
} else {
if((state_val_70353 === (13))){
var inst_70346 = (state_70352[(2)]);
var state_70352__$1 = state_70352;
var statearr_70358_72225 = state_70352__$1;
(statearr_70358_72225[(2)] = inst_70346);

(statearr_70358_72225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (6))){
var inst_70337 = (state_70352[(2)]);
var state_70352__$1 = state_70352;
if(cljs.core.truth_(inst_70337)){
var statearr_70359_72226 = state_70352__$1;
(statearr_70359_72226[(1)] = (8));

} else {
var statearr_70360_72227 = state_70352__$1;
(statearr_70360_72227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (3))){
var inst_70350 = (state_70352[(2)]);
var state_70352__$1 = state_70352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70352__$1,inst_70350);
} else {
if((state_val_70353 === (12))){
var state_70352__$1 = state_70352;
var statearr_70361_72232 = state_70352__$1;
(statearr_70361_72232[(2)] = null);

(statearr_70361_72232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (2))){
var inst_70329 = (state_70352[(7)]);
var state_70352__$1 = state_70352;
if(cljs.core.truth_(inst_70329)){
var statearr_70362_72236 = state_70352__$1;
(statearr_70362_72236[(1)] = (4));

} else {
var statearr_70364_72237 = state_70352__$1;
(statearr_70364_72237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (11))){
var inst_70343 = cljs.core.async.close_BANG_(ch);
var state_70352__$1 = state_70352;
var statearr_70365_72238 = state_70352__$1;
(statearr_70365_72238[(2)] = inst_70343);

(statearr_70365_72238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (9))){
var state_70352__$1 = state_70352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_70366_72245 = state_70352__$1;
(statearr_70366_72245[(1)] = (11));

} else {
var statearr_70367_72246 = state_70352__$1;
(statearr_70367_72246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (5))){
var inst_70329 = (state_70352[(7)]);
var state_70352__$1 = state_70352;
var statearr_70368_72247 = state_70352__$1;
(statearr_70368_72247[(2)] = inst_70329);

(statearr_70368_72247[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (10))){
var inst_70348 = (state_70352[(2)]);
var state_70352__$1 = state_70352;
var statearr_70369_72248 = state_70352__$1;
(statearr_70369_72248[(2)] = inst_70348);

(statearr_70369_72248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70353 === (8))){
var inst_70329 = (state_70352[(7)]);
var inst_70339 = cljs.core.next(inst_70329);
var inst_70329__$1 = inst_70339;
var state_70352__$1 = (function (){var statearr_70370 = state_70352;
(statearr_70370[(7)] = inst_70329__$1);

return statearr_70370;
})();
var statearr_70371_72249 = state_70352__$1;
(statearr_70371_72249[(2)] = null);

(statearr_70371_72249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_70372 = [null,null,null,null,null,null,null,null];
(statearr_70372[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_70372[(1)] = (1));

return statearr_70372;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_70352){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70352);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70373){if((e70373 instanceof Object)){
var ex__69381__auto__ = e70373;
var statearr_70375_72250 = state_70352;
(statearr_70375_72250[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72251 = state_70352;
state_70352 = G__72251;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_70352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_70352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70376 = f__69583__auto__();
(statearr_70376[(6)] = c__69582__auto__);

return statearr_70376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));

return c__69582__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_72252 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_72252(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_72254 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_72254(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_72255 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_72255(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_72259 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_72259(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70380 = (function (ch,cs,meta70381){
this.ch = ch;
this.cs = cs;
this.meta70381 = meta70381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70382,meta70381__$1){
var self__ = this;
var _70382__$1 = this;
return (new cljs.core.async.t_cljs$core$async70380(self__.ch,self__.cs,meta70381__$1));
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70382){
var self__ = this;
var _70382__$1 = this;
return self__.meta70381;
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async70380.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async70380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta70381","meta70381",-1951966315,null)], null);
}));

(cljs.core.async.t_cljs$core$async70380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70380");

(cljs.core.async.t_cljs$core$async70380.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async70380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70380.
 */
cljs.core.async.__GT_t_cljs$core$async70380 = (function cljs$core$async$mult_$___GT_t_cljs$core$async70380(ch__$1,cs__$1,meta70381){
return (new cljs.core.async.t_cljs$core$async70380(ch__$1,cs__$1,meta70381));
});

}

return (new cljs.core.async.t_cljs$core$async70380(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__69582__auto___72260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70522){
var state_val_70523 = (state_70522[(1)]);
if((state_val_70523 === (7))){
var inst_70518 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70525_72261 = state_70522__$1;
(statearr_70525_72261[(2)] = inst_70518);

(statearr_70525_72261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (20))){
var inst_70419 = (state_70522[(7)]);
var inst_70432 = cljs.core.first(inst_70419);
var inst_70433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70432,(0),null);
var inst_70434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70432,(1),null);
var state_70522__$1 = (function (){var statearr_70527 = state_70522;
(statearr_70527[(8)] = inst_70433);

return statearr_70527;
})();
if(cljs.core.truth_(inst_70434)){
var statearr_70528_72262 = state_70522__$1;
(statearr_70528_72262[(1)] = (22));

} else {
var statearr_70529_72263 = state_70522__$1;
(statearr_70529_72263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (27))){
var inst_70462 = (state_70522[(9)]);
var inst_70469 = (state_70522[(10)]);
var inst_70464 = (state_70522[(11)]);
var inst_70388 = (state_70522[(12)]);
var inst_70469__$1 = cljs.core._nth(inst_70462,inst_70464);
var inst_70470 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70469__$1,inst_70388,done);
var state_70522__$1 = (function (){var statearr_70530 = state_70522;
(statearr_70530[(10)] = inst_70469__$1);

return statearr_70530;
})();
if(cljs.core.truth_(inst_70470)){
var statearr_70531_72264 = state_70522__$1;
(statearr_70531_72264[(1)] = (30));

} else {
var statearr_70532_72265 = state_70522__$1;
(statearr_70532_72265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (1))){
var state_70522__$1 = state_70522;
var statearr_70533_72266 = state_70522__$1;
(statearr_70533_72266[(2)] = null);

(statearr_70533_72266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (24))){
var inst_70419 = (state_70522[(7)]);
var inst_70439 = (state_70522[(2)]);
var inst_70440 = cljs.core.next(inst_70419);
var inst_70397 = inst_70440;
var inst_70398 = null;
var inst_70399 = (0);
var inst_70400 = (0);
var state_70522__$1 = (function (){var statearr_70534 = state_70522;
(statearr_70534[(13)] = inst_70397);

(statearr_70534[(14)] = inst_70400);

(statearr_70534[(15)] = inst_70399);

(statearr_70534[(16)] = inst_70439);

(statearr_70534[(17)] = inst_70398);

return statearr_70534;
})();
var statearr_70535_72267 = state_70522__$1;
(statearr_70535_72267[(2)] = null);

(statearr_70535_72267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (39))){
var state_70522__$1 = state_70522;
var statearr_70539_72268 = state_70522__$1;
(statearr_70539_72268[(2)] = null);

(statearr_70539_72268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (4))){
var inst_70388 = (state_70522[(12)]);
var inst_70388__$1 = (state_70522[(2)]);
var inst_70389 = (inst_70388__$1 == null);
var state_70522__$1 = (function (){var statearr_70542 = state_70522;
(statearr_70542[(12)] = inst_70388__$1);

return statearr_70542;
})();
if(cljs.core.truth_(inst_70389)){
var statearr_70543_72269 = state_70522__$1;
(statearr_70543_72269[(1)] = (5));

} else {
var statearr_70544_72270 = state_70522__$1;
(statearr_70544_72270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (15))){
var inst_70397 = (state_70522[(13)]);
var inst_70400 = (state_70522[(14)]);
var inst_70399 = (state_70522[(15)]);
var inst_70398 = (state_70522[(17)]);
var inst_70415 = (state_70522[(2)]);
var inst_70416 = (inst_70400 + (1));
var tmp70536 = inst_70397;
var tmp70537 = inst_70399;
var tmp70538 = inst_70398;
var inst_70397__$1 = tmp70536;
var inst_70398__$1 = tmp70538;
var inst_70399__$1 = tmp70537;
var inst_70400__$1 = inst_70416;
var state_70522__$1 = (function (){var statearr_70545 = state_70522;
(statearr_70545[(18)] = inst_70415);

(statearr_70545[(13)] = inst_70397__$1);

(statearr_70545[(14)] = inst_70400__$1);

(statearr_70545[(15)] = inst_70399__$1);

(statearr_70545[(17)] = inst_70398__$1);

return statearr_70545;
})();
var statearr_70546_72271 = state_70522__$1;
(statearr_70546_72271[(2)] = null);

(statearr_70546_72271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (21))){
var inst_70443 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70550_72272 = state_70522__$1;
(statearr_70550_72272[(2)] = inst_70443);

(statearr_70550_72272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (31))){
var inst_70469 = (state_70522[(10)]);
var inst_70473 = done(null);
var inst_70474 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70469);
var state_70522__$1 = (function (){var statearr_70551 = state_70522;
(statearr_70551[(19)] = inst_70473);

return statearr_70551;
})();
var statearr_70552_72273 = state_70522__$1;
(statearr_70552_72273[(2)] = inst_70474);

(statearr_70552_72273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (32))){
var inst_70461 = (state_70522[(20)]);
var inst_70462 = (state_70522[(9)]);
var inst_70464 = (state_70522[(11)]);
var inst_70463 = (state_70522[(21)]);
var inst_70476 = (state_70522[(2)]);
var inst_70477 = (inst_70464 + (1));
var tmp70547 = inst_70461;
var tmp70548 = inst_70462;
var tmp70549 = inst_70463;
var inst_70461__$1 = tmp70547;
var inst_70462__$1 = tmp70548;
var inst_70463__$1 = tmp70549;
var inst_70464__$1 = inst_70477;
var state_70522__$1 = (function (){var statearr_70553 = state_70522;
(statearr_70553[(20)] = inst_70461__$1);

(statearr_70553[(9)] = inst_70462__$1);

(statearr_70553[(22)] = inst_70476);

(statearr_70553[(11)] = inst_70464__$1);

(statearr_70553[(21)] = inst_70463__$1);

return statearr_70553;
})();
var statearr_70554_72276 = state_70522__$1;
(statearr_70554_72276[(2)] = null);

(statearr_70554_72276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (40))){
var inst_70490 = (state_70522[(23)]);
var inst_70494 = done(null);
var inst_70495 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_70490);
var state_70522__$1 = (function (){var statearr_70555 = state_70522;
(statearr_70555[(24)] = inst_70494);

return statearr_70555;
})();
var statearr_70556_72280 = state_70522__$1;
(statearr_70556_72280[(2)] = inst_70495);

(statearr_70556_72280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (33))){
var inst_70480 = (state_70522[(25)]);
var inst_70482 = cljs.core.chunked_seq_QMARK_(inst_70480);
var state_70522__$1 = state_70522;
if(inst_70482){
var statearr_70557_72281 = state_70522__$1;
(statearr_70557_72281[(1)] = (36));

} else {
var statearr_70559_72282 = state_70522__$1;
(statearr_70559_72282[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (13))){
var inst_70409 = (state_70522[(26)]);
var inst_70412 = cljs.core.async.close_BANG_(inst_70409);
var state_70522__$1 = state_70522;
var statearr_70561_72283 = state_70522__$1;
(statearr_70561_72283[(2)] = inst_70412);

(statearr_70561_72283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (22))){
var inst_70433 = (state_70522[(8)]);
var inst_70436 = cljs.core.async.close_BANG_(inst_70433);
var state_70522__$1 = state_70522;
var statearr_70562_72285 = state_70522__$1;
(statearr_70562_72285[(2)] = inst_70436);

(statearr_70562_72285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (36))){
var inst_70480 = (state_70522[(25)]);
var inst_70484 = cljs.core.chunk_first(inst_70480);
var inst_70485 = cljs.core.chunk_rest(inst_70480);
var inst_70486 = cljs.core.count(inst_70484);
var inst_70461 = inst_70485;
var inst_70462 = inst_70484;
var inst_70463 = inst_70486;
var inst_70464 = (0);
var state_70522__$1 = (function (){var statearr_70563 = state_70522;
(statearr_70563[(20)] = inst_70461);

(statearr_70563[(9)] = inst_70462);

(statearr_70563[(11)] = inst_70464);

(statearr_70563[(21)] = inst_70463);

return statearr_70563;
})();
var statearr_70564_72286 = state_70522__$1;
(statearr_70564_72286[(2)] = null);

(statearr_70564_72286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (41))){
var inst_70480 = (state_70522[(25)]);
var inst_70497 = (state_70522[(2)]);
var inst_70498 = cljs.core.next(inst_70480);
var inst_70461 = inst_70498;
var inst_70462 = null;
var inst_70463 = (0);
var inst_70464 = (0);
var state_70522__$1 = (function (){var statearr_70565 = state_70522;
(statearr_70565[(20)] = inst_70461);

(statearr_70565[(9)] = inst_70462);

(statearr_70565[(11)] = inst_70464);

(statearr_70565[(27)] = inst_70497);

(statearr_70565[(21)] = inst_70463);

return statearr_70565;
})();
var statearr_70566_72289 = state_70522__$1;
(statearr_70566_72289[(2)] = null);

(statearr_70566_72289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (43))){
var state_70522__$1 = state_70522;
var statearr_70567_72290 = state_70522__$1;
(statearr_70567_72290[(2)] = null);

(statearr_70567_72290[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (29))){
var inst_70506 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70568_72291 = state_70522__$1;
(statearr_70568_72291[(2)] = inst_70506);

(statearr_70568_72291[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (44))){
var inst_70515 = (state_70522[(2)]);
var state_70522__$1 = (function (){var statearr_70572 = state_70522;
(statearr_70572[(28)] = inst_70515);

return statearr_70572;
})();
var statearr_70573_72292 = state_70522__$1;
(statearr_70573_72292[(2)] = null);

(statearr_70573_72292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (6))){
var inst_70453 = (state_70522[(29)]);
var inst_70452 = cljs.core.deref(cs);
var inst_70453__$1 = cljs.core.keys(inst_70452);
var inst_70454 = cljs.core.count(inst_70453__$1);
var inst_70455 = cljs.core.reset_BANG_(dctr,inst_70454);
var inst_70460 = cljs.core.seq(inst_70453__$1);
var inst_70461 = inst_70460;
var inst_70462 = null;
var inst_70463 = (0);
var inst_70464 = (0);
var state_70522__$1 = (function (){var statearr_70577 = state_70522;
(statearr_70577[(20)] = inst_70461);

(statearr_70577[(29)] = inst_70453__$1);

(statearr_70577[(9)] = inst_70462);

(statearr_70577[(30)] = inst_70455);

(statearr_70577[(11)] = inst_70464);

(statearr_70577[(21)] = inst_70463);

return statearr_70577;
})();
var statearr_70581_72294 = state_70522__$1;
(statearr_70581_72294[(2)] = null);

(statearr_70581_72294[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (28))){
var inst_70461 = (state_70522[(20)]);
var inst_70480 = (state_70522[(25)]);
var inst_70480__$1 = cljs.core.seq(inst_70461);
var state_70522__$1 = (function (){var statearr_70582 = state_70522;
(statearr_70582[(25)] = inst_70480__$1);

return statearr_70582;
})();
if(inst_70480__$1){
var statearr_70583_72295 = state_70522__$1;
(statearr_70583_72295[(1)] = (33));

} else {
var statearr_70584_72296 = state_70522__$1;
(statearr_70584_72296[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (25))){
var inst_70464 = (state_70522[(11)]);
var inst_70463 = (state_70522[(21)]);
var inst_70466 = (inst_70464 < inst_70463);
var inst_70467 = inst_70466;
var state_70522__$1 = state_70522;
if(cljs.core.truth_(inst_70467)){
var statearr_70589_72300 = state_70522__$1;
(statearr_70589_72300[(1)] = (27));

} else {
var statearr_70590_72301 = state_70522__$1;
(statearr_70590_72301[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (34))){
var state_70522__$1 = state_70522;
var statearr_70592_72302 = state_70522__$1;
(statearr_70592_72302[(2)] = null);

(statearr_70592_72302[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (17))){
var state_70522__$1 = state_70522;
var statearr_70596_72303 = state_70522__$1;
(statearr_70596_72303[(2)] = null);

(statearr_70596_72303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (3))){
var inst_70520 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70522__$1,inst_70520);
} else {
if((state_val_70523 === (12))){
var inst_70448 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70598_72305 = state_70522__$1;
(statearr_70598_72305[(2)] = inst_70448);

(statearr_70598_72305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (2))){
var state_70522__$1 = state_70522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70522__$1,(4),ch);
} else {
if((state_val_70523 === (23))){
var state_70522__$1 = state_70522;
var statearr_70602_72306 = state_70522__$1;
(statearr_70602_72306[(2)] = null);

(statearr_70602_72306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (35))){
var inst_70504 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70607_72310 = state_70522__$1;
(statearr_70607_72310[(2)] = inst_70504);

(statearr_70607_72310[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (19))){
var inst_70419 = (state_70522[(7)]);
var inst_70424 = cljs.core.chunk_first(inst_70419);
var inst_70425 = cljs.core.chunk_rest(inst_70419);
var inst_70426 = cljs.core.count(inst_70424);
var inst_70397 = inst_70425;
var inst_70398 = inst_70424;
var inst_70399 = inst_70426;
var inst_70400 = (0);
var state_70522__$1 = (function (){var statearr_70612 = state_70522;
(statearr_70612[(13)] = inst_70397);

(statearr_70612[(14)] = inst_70400);

(statearr_70612[(15)] = inst_70399);

(statearr_70612[(17)] = inst_70398);

return statearr_70612;
})();
var statearr_70613_72311 = state_70522__$1;
(statearr_70613_72311[(2)] = null);

(statearr_70613_72311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (11))){
var inst_70397 = (state_70522[(13)]);
var inst_70419 = (state_70522[(7)]);
var inst_70419__$1 = cljs.core.seq(inst_70397);
var state_70522__$1 = (function (){var statearr_70616 = state_70522;
(statearr_70616[(7)] = inst_70419__$1);

return statearr_70616;
})();
if(inst_70419__$1){
var statearr_70618_72315 = state_70522__$1;
(statearr_70618_72315[(1)] = (16));

} else {
var statearr_70620_72318 = state_70522__$1;
(statearr_70620_72318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (9))){
var inst_70450 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70621_72319 = state_70522__$1;
(statearr_70621_72319[(2)] = inst_70450);

(statearr_70621_72319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (5))){
var inst_70395 = cljs.core.deref(cs);
var inst_70396 = cljs.core.seq(inst_70395);
var inst_70397 = inst_70396;
var inst_70398 = null;
var inst_70399 = (0);
var inst_70400 = (0);
var state_70522__$1 = (function (){var statearr_70623 = state_70522;
(statearr_70623[(13)] = inst_70397);

(statearr_70623[(14)] = inst_70400);

(statearr_70623[(15)] = inst_70399);

(statearr_70623[(17)] = inst_70398);

return statearr_70623;
})();
var statearr_70624_72322 = state_70522__$1;
(statearr_70624_72322[(2)] = null);

(statearr_70624_72322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (14))){
var state_70522__$1 = state_70522;
var statearr_70628_72323 = state_70522__$1;
(statearr_70628_72323[(2)] = null);

(statearr_70628_72323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (45))){
var inst_70512 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70630_72337 = state_70522__$1;
(statearr_70630_72337[(2)] = inst_70512);

(statearr_70630_72337[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (26))){
var inst_70453 = (state_70522[(29)]);
var inst_70508 = (state_70522[(2)]);
var inst_70509 = cljs.core.seq(inst_70453);
var state_70522__$1 = (function (){var statearr_70631 = state_70522;
(statearr_70631[(31)] = inst_70508);

return statearr_70631;
})();
if(inst_70509){
var statearr_70634_72338 = state_70522__$1;
(statearr_70634_72338[(1)] = (42));

} else {
var statearr_70636_72339 = state_70522__$1;
(statearr_70636_72339[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (16))){
var inst_70419 = (state_70522[(7)]);
var inst_70422 = cljs.core.chunked_seq_QMARK_(inst_70419);
var state_70522__$1 = state_70522;
if(inst_70422){
var statearr_70638_72340 = state_70522__$1;
(statearr_70638_72340[(1)] = (19));

} else {
var statearr_70639_72341 = state_70522__$1;
(statearr_70639_72341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (38))){
var inst_70501 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70643_72342 = state_70522__$1;
(statearr_70643_72342[(2)] = inst_70501);

(statearr_70643_72342[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (30))){
var state_70522__$1 = state_70522;
var statearr_70645_72344 = state_70522__$1;
(statearr_70645_72344[(2)] = null);

(statearr_70645_72344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (10))){
var inst_70400 = (state_70522[(14)]);
var inst_70398 = (state_70522[(17)]);
var inst_70408 = cljs.core._nth(inst_70398,inst_70400);
var inst_70409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70408,(0),null);
var inst_70410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70408,(1),null);
var state_70522__$1 = (function (){var statearr_70648 = state_70522;
(statearr_70648[(26)] = inst_70409);

return statearr_70648;
})();
if(cljs.core.truth_(inst_70410)){
var statearr_70650_72345 = state_70522__$1;
(statearr_70650_72345[(1)] = (13));

} else {
var statearr_70651_72346 = state_70522__$1;
(statearr_70651_72346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (18))){
var inst_70446 = (state_70522[(2)]);
var state_70522__$1 = state_70522;
var statearr_70653_72347 = state_70522__$1;
(statearr_70653_72347[(2)] = inst_70446);

(statearr_70653_72347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (42))){
var state_70522__$1 = state_70522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70522__$1,(45),dchan);
} else {
if((state_val_70523 === (37))){
var inst_70480 = (state_70522[(25)]);
var inst_70490 = (state_70522[(23)]);
var inst_70388 = (state_70522[(12)]);
var inst_70490__$1 = cljs.core.first(inst_70480);
var inst_70491 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_70490__$1,inst_70388,done);
var state_70522__$1 = (function (){var statearr_70655 = state_70522;
(statearr_70655[(23)] = inst_70490__$1);

return statearr_70655;
})();
if(cljs.core.truth_(inst_70491)){
var statearr_70657_72348 = state_70522__$1;
(statearr_70657_72348[(1)] = (39));

} else {
var statearr_70659_72349 = state_70522__$1;
(statearr_70659_72349[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70523 === (8))){
var inst_70400 = (state_70522[(14)]);
var inst_70399 = (state_70522[(15)]);
var inst_70402 = (inst_70400 < inst_70399);
var inst_70403 = inst_70402;
var state_70522__$1 = state_70522;
if(cljs.core.truth_(inst_70403)){
var statearr_70661_72356 = state_70522__$1;
(statearr_70661_72356[(1)] = (10));

} else {
var statearr_70662_72357 = state_70522__$1;
(statearr_70662_72357[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__69378__auto__ = null;
var cljs$core$async$mult_$_state_machine__69378__auto____0 = (function (){
var statearr_70666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70666[(0)] = cljs$core$async$mult_$_state_machine__69378__auto__);

(statearr_70666[(1)] = (1));

return statearr_70666;
});
var cljs$core$async$mult_$_state_machine__69378__auto____1 = (function (state_70522){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70522);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70668){if((e70668 instanceof Object)){
var ex__69381__auto__ = e70668;
var statearr_70669_72358 = state_70522;
(statearr_70669_72358[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72359 = state_70522;
state_70522 = G__72359;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__69378__auto__ = function(state_70522){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__69378__auto____1.call(this,state_70522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__69378__auto____0;
cljs$core$async$mult_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__69378__auto____1;
return cljs$core$async$mult_$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70674 = f__69583__auto__();
(statearr_70674[(6)] = c__69582__auto___72260);

return statearr_70674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__70681 = arguments.length;
switch (G__70681) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_72365 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_72365(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_72370 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_72370(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_72371 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_72371(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_72378 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_72378(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_72379 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_72379(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___72382 = arguments.length;
var i__5767__auto___72383 = (0);
while(true){
if((i__5767__auto___72383 < len__5766__auto___72382)){
args__5772__auto__.push((arguments[i__5767__auto___72383]));

var G__72384 = (i__5767__auto___72383 + (1));
i__5767__auto___72383 = G__72384;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__70746){
var map__70747 = p__70746;
var map__70747__$1 = cljs.core.__destructure_map(map__70747);
var opts = map__70747__$1;
var statearr_70751_72385 = state;
(statearr_70751_72385[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_70753_72386 = state;
(statearr_70753_72386[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_70754_72387 = state;
(statearr_70754_72387[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq70738){
var G__70739 = cljs.core.first(seq70738);
var seq70738__$1 = cljs.core.next(seq70738);
var G__70740 = cljs.core.first(seq70738__$1);
var seq70738__$2 = cljs.core.next(seq70738__$1);
var G__70741 = cljs.core.first(seq70738__$2);
var seq70738__$3 = cljs.core.next(seq70738__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70739,G__70740,G__70741,seq70738__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70771 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70771 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70772){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta70772 = meta70772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70773,meta70772__$1){
var self__ = this;
var _70773__$1 = this;
return (new cljs.core.async.t_cljs$core$async70771(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70772__$1));
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70773){
var self__ = this;
var _70773__$1 = this;
return self__.meta70772;
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70771.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async70771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70772","meta70772",760520557,null)], null);
}));

(cljs.core.async.t_cljs$core$async70771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70771");

(cljs.core.async.t_cljs$core$async70771.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async70771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70771.
 */
cljs.core.async.__GT_t_cljs$core$async70771 = (function cljs$core$async$mix_$___GT_t_cljs$core$async70771(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70772){
return (new cljs.core.async.t_cljs$core$async70771(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70772));
});

}

return (new cljs.core.async.t_cljs$core$async70771(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69582__auto___72398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_70878){
var state_val_70879 = (state_70878[(1)]);
if((state_val_70879 === (7))){
var inst_70831 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
if(cljs.core.truth_(inst_70831)){
var statearr_70883_72399 = state_70878__$1;
(statearr_70883_72399[(1)] = (8));

} else {
var statearr_70884_72400 = state_70878__$1;
(statearr_70884_72400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (20))){
var inst_70823 = (state_70878[(7)]);
var state_70878__$1 = state_70878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_70878__$1,(23),out,inst_70823);
} else {
if((state_val_70879 === (1))){
var inst_70803 = calc_state();
var inst_70804 = cljs.core.__destructure_map(inst_70803);
var inst_70805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70804,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70804,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70804,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70808 = inst_70803;
var state_70878__$1 = (function (){var statearr_70885 = state_70878;
(statearr_70885[(8)] = inst_70805);

(statearr_70885[(9)] = inst_70807);

(statearr_70885[(10)] = inst_70808);

(statearr_70885[(11)] = inst_70806);

return statearr_70885;
})();
var statearr_70886_72401 = state_70878__$1;
(statearr_70886_72401[(2)] = null);

(statearr_70886_72401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (24))){
var inst_70814 = (state_70878[(12)]);
var inst_70808 = inst_70814;
var state_70878__$1 = (function (){var statearr_70887 = state_70878;
(statearr_70887[(10)] = inst_70808);

return statearr_70887;
})();
var statearr_70888_72402 = state_70878__$1;
(statearr_70888_72402[(2)] = null);

(statearr_70888_72402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (4))){
var inst_70823 = (state_70878[(7)]);
var inst_70826 = (state_70878[(13)]);
var inst_70822 = (state_70878[(2)]);
var inst_70823__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70822,(0),null);
var inst_70825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70822,(1),null);
var inst_70826__$1 = (inst_70823__$1 == null);
var state_70878__$1 = (function (){var statearr_70889 = state_70878;
(statearr_70889[(7)] = inst_70823__$1);

(statearr_70889[(14)] = inst_70825);

(statearr_70889[(13)] = inst_70826__$1);

return statearr_70889;
})();
if(cljs.core.truth_(inst_70826__$1)){
var statearr_70890_72406 = state_70878__$1;
(statearr_70890_72406[(1)] = (5));

} else {
var statearr_70891_72407 = state_70878__$1;
(statearr_70891_72407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (15))){
var inst_70848 = (state_70878[(15)]);
var inst_70815 = (state_70878[(16)]);
var inst_70848__$1 = cljs.core.empty_QMARK_(inst_70815);
var state_70878__$1 = (function (){var statearr_70892 = state_70878;
(statearr_70892[(15)] = inst_70848__$1);

return statearr_70892;
})();
if(inst_70848__$1){
var statearr_70893_72408 = state_70878__$1;
(statearr_70893_72408[(1)] = (17));

} else {
var statearr_70894_72409 = state_70878__$1;
(statearr_70894_72409[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (21))){
var inst_70814 = (state_70878[(12)]);
var inst_70808 = inst_70814;
var state_70878__$1 = (function (){var statearr_70895 = state_70878;
(statearr_70895[(10)] = inst_70808);

return statearr_70895;
})();
var statearr_70896_72410 = state_70878__$1;
(statearr_70896_72410[(2)] = null);

(statearr_70896_72410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (13))){
var inst_70840 = (state_70878[(2)]);
var inst_70842 = calc_state();
var inst_70808 = inst_70842;
var state_70878__$1 = (function (){var statearr_70899 = state_70878;
(statearr_70899[(10)] = inst_70808);

(statearr_70899[(17)] = inst_70840);

return statearr_70899;
})();
var statearr_70900_72411 = state_70878__$1;
(statearr_70900_72411[(2)] = null);

(statearr_70900_72411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (22))){
var inst_70869 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
var statearr_70901_72412 = state_70878__$1;
(statearr_70901_72412[(2)] = inst_70869);

(statearr_70901_72412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (6))){
var inst_70825 = (state_70878[(14)]);
var inst_70829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70825,change);
var state_70878__$1 = state_70878;
var statearr_70902_72413 = state_70878__$1;
(statearr_70902_72413[(2)] = inst_70829);

(statearr_70902_72413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (25))){
var state_70878__$1 = state_70878;
var statearr_70903_72414 = state_70878__$1;
(statearr_70903_72414[(2)] = null);

(statearr_70903_72414[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (17))){
var inst_70816 = (state_70878[(18)]);
var inst_70825 = (state_70878[(14)]);
var inst_70851 = (inst_70816.cljs$core$IFn$_invoke$arity$1 ? inst_70816.cljs$core$IFn$_invoke$arity$1(inst_70825) : inst_70816.call(null,inst_70825));
var inst_70852 = cljs.core.not(inst_70851);
var state_70878__$1 = state_70878;
var statearr_70904_72415 = state_70878__$1;
(statearr_70904_72415[(2)] = inst_70852);

(statearr_70904_72415[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (3))){
var inst_70873 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70878__$1,inst_70873);
} else {
if((state_val_70879 === (12))){
var state_70878__$1 = state_70878;
var statearr_70909_72416 = state_70878__$1;
(statearr_70909_72416[(2)] = null);

(statearr_70909_72416[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (2))){
var inst_70808 = (state_70878[(10)]);
var inst_70814 = (state_70878[(12)]);
var inst_70814__$1 = cljs.core.__destructure_map(inst_70808);
var inst_70815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70814__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70814__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70814__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70878__$1 = (function (){var statearr_70915 = state_70878;
(statearr_70915[(18)] = inst_70816);

(statearr_70915[(12)] = inst_70814__$1);

(statearr_70915[(16)] = inst_70815);

return statearr_70915;
})();
return cljs.core.async.ioc_alts_BANG_(state_70878__$1,(4),inst_70817);
} else {
if((state_val_70879 === (23))){
var inst_70860 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
if(cljs.core.truth_(inst_70860)){
var statearr_70916_72417 = state_70878__$1;
(statearr_70916_72417[(1)] = (24));

} else {
var statearr_70917_72418 = state_70878__$1;
(statearr_70917_72418[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (19))){
var inst_70855 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
var statearr_70918_72419 = state_70878__$1;
(statearr_70918_72419[(2)] = inst_70855);

(statearr_70918_72419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (11))){
var inst_70825 = (state_70878[(14)]);
var inst_70837 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_70825);
var state_70878__$1 = state_70878;
var statearr_70923_72420 = state_70878__$1;
(statearr_70923_72420[(2)] = inst_70837);

(statearr_70923_72420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (9))){
var inst_70825 = (state_70878[(14)]);
var inst_70845 = (state_70878[(19)]);
var inst_70815 = (state_70878[(16)]);
var inst_70845__$1 = (inst_70815.cljs$core$IFn$_invoke$arity$1 ? inst_70815.cljs$core$IFn$_invoke$arity$1(inst_70825) : inst_70815.call(null,inst_70825));
var state_70878__$1 = (function (){var statearr_70928 = state_70878;
(statearr_70928[(19)] = inst_70845__$1);

return statearr_70928;
})();
if(cljs.core.truth_(inst_70845__$1)){
var statearr_70929_72422 = state_70878__$1;
(statearr_70929_72422[(1)] = (14));

} else {
var statearr_70930_72423 = state_70878__$1;
(statearr_70930_72423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (5))){
var inst_70826 = (state_70878[(13)]);
var state_70878__$1 = state_70878;
var statearr_70931_72424 = state_70878__$1;
(statearr_70931_72424[(2)] = inst_70826);

(statearr_70931_72424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (14))){
var inst_70845 = (state_70878[(19)]);
var state_70878__$1 = state_70878;
var statearr_70932_72425 = state_70878__$1;
(statearr_70932_72425[(2)] = inst_70845);

(statearr_70932_72425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (26))){
var inst_70865 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
var statearr_70936_72430 = state_70878__$1;
(statearr_70936_72430[(2)] = inst_70865);

(statearr_70936_72430[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (16))){
var inst_70857 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
if(cljs.core.truth_(inst_70857)){
var statearr_70938_72431 = state_70878__$1;
(statearr_70938_72431[(1)] = (20));

} else {
var statearr_70939_72432 = state_70878__$1;
(statearr_70939_72432[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (10))){
var inst_70871 = (state_70878[(2)]);
var state_70878__$1 = state_70878;
var statearr_70940_72433 = state_70878__$1;
(statearr_70940_72433[(2)] = inst_70871);

(statearr_70940_72433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (18))){
var inst_70848 = (state_70878[(15)]);
var state_70878__$1 = state_70878;
var statearr_70945_72434 = state_70878__$1;
(statearr_70945_72434[(2)] = inst_70848);

(statearr_70945_72434[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70879 === (8))){
var inst_70823 = (state_70878[(7)]);
var inst_70835 = (inst_70823 == null);
var state_70878__$1 = state_70878;
if(cljs.core.truth_(inst_70835)){
var statearr_70946_72436 = state_70878__$1;
(statearr_70946_72436[(1)] = (11));

} else {
var statearr_70947_72437 = state_70878__$1;
(statearr_70947_72437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__69378__auto__ = null;
var cljs$core$async$mix_$_state_machine__69378__auto____0 = (function (){
var statearr_70951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70951[(0)] = cljs$core$async$mix_$_state_machine__69378__auto__);

(statearr_70951[(1)] = (1));

return statearr_70951;
});
var cljs$core$async$mix_$_state_machine__69378__auto____1 = (function (state_70878){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_70878);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e70953){if((e70953 instanceof Object)){
var ex__69381__auto__ = e70953;
var statearr_70954_72438 = state_70878;
(statearr_70954_72438[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72439 = state_70878;
state_70878 = G__72439;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__69378__auto__ = function(state_70878){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__69378__auto____1.call(this,state_70878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__69378__auto____0;
cljs$core$async$mix_$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__69378__auto____1;
return cljs$core$async$mix_$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_70955 = f__69583__auto__();
(statearr_70955[(6)] = c__69582__auto___72398);

return statearr_70955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_72440 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_72440(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_72441 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_72441(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_72445 = (function() {
var G__72446 = null;
var G__72446__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__72446__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__72446 = function(p,v){
switch(arguments.length){
case 1:
return G__72446__1.call(this,p);
case 2:
return G__72446__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72446.cljs$core$IFn$_invoke$arity$1 = G__72446__1;
G__72446.cljs$core$IFn$_invoke$arity$2 = G__72446__2;
return G__72446;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__70987 = arguments.length;
switch (G__70987) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72445(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_72445(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__71003 = arguments.length;
switch (G__71003) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__70999_SHARP_){
if(cljs.core.truth_((p1__70999_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__70999_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__70999_SHARP_.call(null,topic)))){
return p1__70999_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70999_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71012 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta71013){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta71013 = meta71013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71014,meta71013__$1){
var self__ = this;
var _71014__$1 = this;
return (new cljs.core.async.t_cljs$core$async71012(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta71013__$1));
}));

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71014){
var self__ = this;
var _71014__$1 = this;
return self__.meta71013;
}));

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async71012.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async71012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta71013","meta71013",739892990,null)], null);
}));

(cljs.core.async.t_cljs$core$async71012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71012");

(cljs.core.async.t_cljs$core$async71012.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async71012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71012.
 */
cljs.core.async.__GT_t_cljs$core$async71012 = (function cljs$core$async$__GT_t_cljs$core$async71012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71013){
return (new cljs.core.async.t_cljs$core$async71012(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta71013));
});

}

return (new cljs.core.async.t_cljs$core$async71012(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__69582__auto___72453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71103){
var state_val_71104 = (state_71103[(1)]);
if((state_val_71104 === (7))){
var inst_71099 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
var statearr_71105_72454 = state_71103__$1;
(statearr_71105_72454[(2)] = inst_71099);

(statearr_71105_72454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (20))){
var state_71103__$1 = state_71103;
var statearr_71106_72455 = state_71103__$1;
(statearr_71106_72455[(2)] = null);

(statearr_71106_72455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (1))){
var state_71103__$1 = state_71103;
var statearr_71107_72456 = state_71103__$1;
(statearr_71107_72456[(2)] = null);

(statearr_71107_72456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (24))){
var inst_71081 = (state_71103[(7)]);
var inst_71091 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_71081);
var state_71103__$1 = state_71103;
var statearr_71109_72457 = state_71103__$1;
(statearr_71109_72457[(2)] = inst_71091);

(statearr_71109_72457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (4))){
var inst_71029 = (state_71103[(8)]);
var inst_71029__$1 = (state_71103[(2)]);
var inst_71030 = (inst_71029__$1 == null);
var state_71103__$1 = (function (){var statearr_71111 = state_71103;
(statearr_71111[(8)] = inst_71029__$1);

return statearr_71111;
})();
if(cljs.core.truth_(inst_71030)){
var statearr_71112_72458 = state_71103__$1;
(statearr_71112_72458[(1)] = (5));

} else {
var statearr_71113_72459 = state_71103__$1;
(statearr_71113_72459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (15))){
var inst_71075 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
var statearr_71114_72460 = state_71103__$1;
(statearr_71114_72460[(2)] = inst_71075);

(statearr_71114_72460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (21))){
var inst_71096 = (state_71103[(2)]);
var state_71103__$1 = (function (){var statearr_71115 = state_71103;
(statearr_71115[(9)] = inst_71096);

return statearr_71115;
})();
var statearr_71116_72461 = state_71103__$1;
(statearr_71116_72461[(2)] = null);

(statearr_71116_72461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (13))){
var inst_71057 = (state_71103[(10)]);
var inst_71059 = cljs.core.chunked_seq_QMARK_(inst_71057);
var state_71103__$1 = state_71103;
if(inst_71059){
var statearr_71117_72462 = state_71103__$1;
(statearr_71117_72462[(1)] = (16));

} else {
var statearr_71118_72463 = state_71103__$1;
(statearr_71118_72463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (22))){
var inst_71088 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
if(cljs.core.truth_(inst_71088)){
var statearr_71119_72464 = state_71103__$1;
(statearr_71119_72464[(1)] = (23));

} else {
var statearr_71120_72465 = state_71103__$1;
(statearr_71120_72465[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (6))){
var inst_71029 = (state_71103[(8)]);
var inst_71083 = (state_71103[(11)]);
var inst_71081 = (state_71103[(7)]);
var inst_71081__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_71029) : topic_fn.call(null,inst_71029));
var inst_71082 = cljs.core.deref(mults);
var inst_71083__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71082,inst_71081__$1);
var state_71103__$1 = (function (){var statearr_71121 = state_71103;
(statearr_71121[(11)] = inst_71083__$1);

(statearr_71121[(7)] = inst_71081__$1);

return statearr_71121;
})();
if(cljs.core.truth_(inst_71083__$1)){
var statearr_71122_72466 = state_71103__$1;
(statearr_71122_72466[(1)] = (19));

} else {
var statearr_71123_72467 = state_71103__$1;
(statearr_71123_72467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (25))){
var inst_71093 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
var statearr_71124_72468 = state_71103__$1;
(statearr_71124_72468[(2)] = inst_71093);

(statearr_71124_72468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (17))){
var inst_71057 = (state_71103[(10)]);
var inst_71066 = cljs.core.first(inst_71057);
var inst_71067 = cljs.core.async.muxch_STAR_(inst_71066);
var inst_71068 = cljs.core.async.close_BANG_(inst_71067);
var inst_71069 = cljs.core.next(inst_71057);
var inst_71039 = inst_71069;
var inst_71040 = null;
var inst_71041 = (0);
var inst_71042 = (0);
var state_71103__$1 = (function (){var statearr_71125 = state_71103;
(statearr_71125[(12)] = inst_71041);

(statearr_71125[(13)] = inst_71068);

(statearr_71125[(14)] = inst_71042);

(statearr_71125[(15)] = inst_71040);

(statearr_71125[(16)] = inst_71039);

return statearr_71125;
})();
var statearr_71126_72471 = state_71103__$1;
(statearr_71126_72471[(2)] = null);

(statearr_71126_72471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (3))){
var inst_71101 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71103__$1,inst_71101);
} else {
if((state_val_71104 === (12))){
var inst_71077 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
var statearr_71127_72473 = state_71103__$1;
(statearr_71127_72473[(2)] = inst_71077);

(statearr_71127_72473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (2))){
var state_71103__$1 = state_71103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71103__$1,(4),ch);
} else {
if((state_val_71104 === (23))){
var state_71103__$1 = state_71103;
var statearr_71128_72474 = state_71103__$1;
(statearr_71128_72474[(2)] = null);

(statearr_71128_72474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (19))){
var inst_71029 = (state_71103[(8)]);
var inst_71083 = (state_71103[(11)]);
var inst_71086 = cljs.core.async.muxch_STAR_(inst_71083);
var state_71103__$1 = state_71103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71103__$1,(22),inst_71086,inst_71029);
} else {
if((state_val_71104 === (11))){
var inst_71039 = (state_71103[(16)]);
var inst_71057 = (state_71103[(10)]);
var inst_71057__$1 = cljs.core.seq(inst_71039);
var state_71103__$1 = (function (){var statearr_71129 = state_71103;
(statearr_71129[(10)] = inst_71057__$1);

return statearr_71129;
})();
if(inst_71057__$1){
var statearr_71130_72477 = state_71103__$1;
(statearr_71130_72477[(1)] = (13));

} else {
var statearr_71131_72478 = state_71103__$1;
(statearr_71131_72478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (9))){
var inst_71079 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
var statearr_71132_72479 = state_71103__$1;
(statearr_71132_72479[(2)] = inst_71079);

(statearr_71132_72479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (5))){
var inst_71036 = cljs.core.deref(mults);
var inst_71037 = cljs.core.vals(inst_71036);
var inst_71038 = cljs.core.seq(inst_71037);
var inst_71039 = inst_71038;
var inst_71040 = null;
var inst_71041 = (0);
var inst_71042 = (0);
var state_71103__$1 = (function (){var statearr_71133 = state_71103;
(statearr_71133[(12)] = inst_71041);

(statearr_71133[(14)] = inst_71042);

(statearr_71133[(15)] = inst_71040);

(statearr_71133[(16)] = inst_71039);

return statearr_71133;
})();
var statearr_71134_72480 = state_71103__$1;
(statearr_71134_72480[(2)] = null);

(statearr_71134_72480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (14))){
var state_71103__$1 = state_71103;
var statearr_71138_72481 = state_71103__$1;
(statearr_71138_72481[(2)] = null);

(statearr_71138_72481[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (16))){
var inst_71057 = (state_71103[(10)]);
var inst_71061 = cljs.core.chunk_first(inst_71057);
var inst_71062 = cljs.core.chunk_rest(inst_71057);
var inst_71063 = cljs.core.count(inst_71061);
var inst_71039 = inst_71062;
var inst_71040 = inst_71061;
var inst_71041 = inst_71063;
var inst_71042 = (0);
var state_71103__$1 = (function (){var statearr_71139 = state_71103;
(statearr_71139[(12)] = inst_71041);

(statearr_71139[(14)] = inst_71042);

(statearr_71139[(15)] = inst_71040);

(statearr_71139[(16)] = inst_71039);

return statearr_71139;
})();
var statearr_71140_72482 = state_71103__$1;
(statearr_71140_72482[(2)] = null);

(statearr_71140_72482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (10))){
var inst_71041 = (state_71103[(12)]);
var inst_71042 = (state_71103[(14)]);
var inst_71040 = (state_71103[(15)]);
var inst_71039 = (state_71103[(16)]);
var inst_71047 = cljs.core._nth(inst_71040,inst_71042);
var inst_71048 = cljs.core.async.muxch_STAR_(inst_71047);
var inst_71049 = cljs.core.async.close_BANG_(inst_71048);
var inst_71054 = (inst_71042 + (1));
var tmp71135 = inst_71041;
var tmp71136 = inst_71040;
var tmp71137 = inst_71039;
var inst_71039__$1 = tmp71137;
var inst_71040__$1 = tmp71136;
var inst_71041__$1 = tmp71135;
var inst_71042__$1 = inst_71054;
var state_71103__$1 = (function (){var statearr_71142 = state_71103;
(statearr_71142[(12)] = inst_71041__$1);

(statearr_71142[(17)] = inst_71049);

(statearr_71142[(14)] = inst_71042__$1);

(statearr_71142[(15)] = inst_71040__$1);

(statearr_71142[(16)] = inst_71039__$1);

return statearr_71142;
})();
var statearr_71144_72483 = state_71103__$1;
(statearr_71144_72483[(2)] = null);

(statearr_71144_72483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (18))){
var inst_71072 = (state_71103[(2)]);
var state_71103__$1 = state_71103;
var statearr_71145_72484 = state_71103__$1;
(statearr_71145_72484[(2)] = inst_71072);

(statearr_71145_72484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71104 === (8))){
var inst_71041 = (state_71103[(12)]);
var inst_71042 = (state_71103[(14)]);
var inst_71044 = (inst_71042 < inst_71041);
var inst_71045 = inst_71044;
var state_71103__$1 = state_71103;
if(cljs.core.truth_(inst_71045)){
var statearr_71146_72485 = state_71103__$1;
(statearr_71146_72485[(1)] = (10));

} else {
var statearr_71147_72486 = state_71103__$1;
(statearr_71147_72486[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71148[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71148[(1)] = (1));

return statearr_71148;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71103){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71103);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71149){if((e71149 instanceof Object)){
var ex__69381__auto__ = e71149;
var statearr_71150_72487 = state_71103;
(statearr_71150_72487[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72488 = state_71103;
state_71103 = G__72488;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71153 = f__69583__auto__();
(statearr_71153[(6)] = c__69582__auto___72453);

return statearr_71153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__71155 = arguments.length;
switch (G__71155) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__71159 = arguments.length;
switch (G__71159) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__71161 = arguments.length;
switch (G__71161) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__69582__auto___72493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71208){
var state_val_71209 = (state_71208[(1)]);
if((state_val_71209 === (7))){
var state_71208__$1 = state_71208;
var statearr_71213_72494 = state_71208__$1;
(statearr_71213_72494[(2)] = null);

(statearr_71213_72494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (1))){
var state_71208__$1 = state_71208;
var statearr_71214_72495 = state_71208__$1;
(statearr_71214_72495[(2)] = null);

(statearr_71214_72495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (4))){
var inst_71170 = (state_71208[(7)]);
var inst_71172 = (inst_71170 < cnt);
var state_71208__$1 = state_71208;
if(cljs.core.truth_(inst_71172)){
var statearr_71215_72496 = state_71208__$1;
(statearr_71215_72496[(1)] = (6));

} else {
var statearr_71216_72497 = state_71208__$1;
(statearr_71216_72497[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (15))){
var inst_71204 = (state_71208[(2)]);
var state_71208__$1 = state_71208;
var statearr_71217_72498 = state_71208__$1;
(statearr_71217_72498[(2)] = inst_71204);

(statearr_71217_72498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (13))){
var inst_71196 = cljs.core.async.close_BANG_(out);
var state_71208__$1 = state_71208;
var statearr_71218_72499 = state_71208__$1;
(statearr_71218_72499[(2)] = inst_71196);

(statearr_71218_72499[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (6))){
var state_71208__$1 = state_71208;
var statearr_71222_72500 = state_71208__$1;
(statearr_71222_72500[(2)] = null);

(statearr_71222_72500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (3))){
var inst_71206 = (state_71208[(2)]);
var state_71208__$1 = state_71208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71208__$1,inst_71206);
} else {
if((state_val_71209 === (12))){
var inst_71193 = (state_71208[(8)]);
var inst_71193__$1 = (state_71208[(2)]);
var inst_71194 = cljs.core.some(cljs.core.nil_QMARK_,inst_71193__$1);
var state_71208__$1 = (function (){var statearr_71223 = state_71208;
(statearr_71223[(8)] = inst_71193__$1);

return statearr_71223;
})();
if(cljs.core.truth_(inst_71194)){
var statearr_71224_72505 = state_71208__$1;
(statearr_71224_72505[(1)] = (13));

} else {
var statearr_71225_72506 = state_71208__$1;
(statearr_71225_72506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (2))){
var inst_71169 = cljs.core.reset_BANG_(dctr,cnt);
var inst_71170 = (0);
var state_71208__$1 = (function (){var statearr_71233 = state_71208;
(statearr_71233[(9)] = inst_71169);

(statearr_71233[(7)] = inst_71170);

return statearr_71233;
})();
var statearr_71240_72511 = state_71208__$1;
(statearr_71240_72511[(2)] = null);

(statearr_71240_72511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (11))){
var inst_71170 = (state_71208[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_71208,(10),Object,null,(9));
var inst_71179 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_71170) : chs__$1.call(null,inst_71170));
var inst_71180 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_71170) : done.call(null,inst_71170));
var inst_71181 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71179,inst_71180);
var state_71208__$1 = state_71208;
var statearr_71247_72512 = state_71208__$1;
(statearr_71247_72512[(2)] = inst_71181);


cljs.core.async.impl.ioc_helpers.process_exception(state_71208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (9))){
var inst_71170 = (state_71208[(7)]);
var inst_71183 = (state_71208[(2)]);
var inst_71185 = (inst_71170 + (1));
var inst_71170__$1 = inst_71185;
var state_71208__$1 = (function (){var statearr_71248 = state_71208;
(statearr_71248[(10)] = inst_71183);

(statearr_71248[(7)] = inst_71170__$1);

return statearr_71248;
})();
var statearr_71249_72513 = state_71208__$1;
(statearr_71249_72513[(2)] = null);

(statearr_71249_72513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (5))){
var inst_71191 = (state_71208[(2)]);
var state_71208__$1 = (function (){var statearr_71250 = state_71208;
(statearr_71250[(11)] = inst_71191);

return statearr_71250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71208__$1,(12),dchan);
} else {
if((state_val_71209 === (14))){
var inst_71193 = (state_71208[(8)]);
var inst_71199 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_71193);
var state_71208__$1 = state_71208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71208__$1,(16),out,inst_71199);
} else {
if((state_val_71209 === (16))){
var inst_71201 = (state_71208[(2)]);
var state_71208__$1 = (function (){var statearr_71261 = state_71208;
(statearr_71261[(12)] = inst_71201);

return statearr_71261;
})();
var statearr_71262_72518 = state_71208__$1;
(statearr_71262_72518[(2)] = null);

(statearr_71262_72518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (10))){
var inst_71174 = (state_71208[(2)]);
var inst_71175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_71208__$1 = (function (){var statearr_71263 = state_71208;
(statearr_71263[(13)] = inst_71174);

return statearr_71263;
})();
var statearr_71264_72519 = state_71208__$1;
(statearr_71264_72519[(2)] = inst_71175);


cljs.core.async.impl.ioc_helpers.process_exception(state_71208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71209 === (8))){
var inst_71189 = (state_71208[(2)]);
var state_71208__$1 = state_71208;
var statearr_71268_72520 = state_71208__$1;
(statearr_71268_72520[(2)] = inst_71189);

(statearr_71268_72520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71269[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71269[(1)] = (1));

return statearr_71269;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71208){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71208);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71270){if((e71270 instanceof Object)){
var ex__69381__auto__ = e71270;
var statearr_71271_72521 = state_71208;
(statearr_71271_72521[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72522 = state_71208;
state_71208 = G__72522;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71272 = f__69583__auto__();
(statearr_71272[(6)] = c__69582__auto___72493);

return statearr_71272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__71279 = arguments.length;
switch (G__71279) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69582__auto___72524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71311){
var state_val_71312 = (state_71311[(1)]);
if((state_val_71312 === (7))){
var inst_71291 = (state_71311[(7)]);
var inst_71290 = (state_71311[(8)]);
var inst_71290__$1 = (state_71311[(2)]);
var inst_71291__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71290__$1,(0),null);
var inst_71292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71290__$1,(1),null);
var inst_71293 = (inst_71291__$1 == null);
var state_71311__$1 = (function (){var statearr_71314 = state_71311;
(statearr_71314[(7)] = inst_71291__$1);

(statearr_71314[(8)] = inst_71290__$1);

(statearr_71314[(9)] = inst_71292);

return statearr_71314;
})();
if(cljs.core.truth_(inst_71293)){
var statearr_71318_72529 = state_71311__$1;
(statearr_71318_72529[(1)] = (8));

} else {
var statearr_71319_72530 = state_71311__$1;
(statearr_71319_72530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (1))){
var inst_71280 = cljs.core.vec(chs);
var inst_71281 = inst_71280;
var state_71311__$1 = (function (){var statearr_71320 = state_71311;
(statearr_71320[(10)] = inst_71281);

return statearr_71320;
})();
var statearr_71321_72534 = state_71311__$1;
(statearr_71321_72534[(2)] = null);

(statearr_71321_72534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (4))){
var inst_71281 = (state_71311[(10)]);
var state_71311__$1 = state_71311;
return cljs.core.async.ioc_alts_BANG_(state_71311__$1,(7),inst_71281);
} else {
if((state_val_71312 === (6))){
var inst_71307 = (state_71311[(2)]);
var state_71311__$1 = state_71311;
var statearr_71324_72535 = state_71311__$1;
(statearr_71324_72535[(2)] = inst_71307);

(statearr_71324_72535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (3))){
var inst_71309 = (state_71311[(2)]);
var state_71311__$1 = state_71311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71311__$1,inst_71309);
} else {
if((state_val_71312 === (2))){
var inst_71281 = (state_71311[(10)]);
var inst_71283 = cljs.core.count(inst_71281);
var inst_71284 = (inst_71283 > (0));
var state_71311__$1 = state_71311;
if(cljs.core.truth_(inst_71284)){
var statearr_71328_72538 = state_71311__$1;
(statearr_71328_72538[(1)] = (4));

} else {
var statearr_71329_72539 = state_71311__$1;
(statearr_71329_72539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (11))){
var inst_71281 = (state_71311[(10)]);
var inst_71300 = (state_71311[(2)]);
var tmp71326 = inst_71281;
var inst_71281__$1 = tmp71326;
var state_71311__$1 = (function (){var statearr_71330 = state_71311;
(statearr_71330[(10)] = inst_71281__$1);

(statearr_71330[(11)] = inst_71300);

return statearr_71330;
})();
var statearr_71331_72543 = state_71311__$1;
(statearr_71331_72543[(2)] = null);

(statearr_71331_72543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (9))){
var inst_71291 = (state_71311[(7)]);
var state_71311__$1 = state_71311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71311__$1,(11),out,inst_71291);
} else {
if((state_val_71312 === (5))){
var inst_71305 = cljs.core.async.close_BANG_(out);
var state_71311__$1 = state_71311;
var statearr_71332_72544 = state_71311__$1;
(statearr_71332_72544[(2)] = inst_71305);

(statearr_71332_72544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (10))){
var inst_71303 = (state_71311[(2)]);
var state_71311__$1 = state_71311;
var statearr_71333_72548 = state_71311__$1;
(statearr_71333_72548[(2)] = inst_71303);

(statearr_71333_72548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71312 === (8))){
var inst_71281 = (state_71311[(10)]);
var inst_71291 = (state_71311[(7)]);
var inst_71290 = (state_71311[(8)]);
var inst_71292 = (state_71311[(9)]);
var inst_71295 = (function (){var cs = inst_71281;
var vec__71286 = inst_71290;
var v = inst_71291;
var c = inst_71292;
return (function (p1__71273_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__71273_SHARP_);
});
})();
var inst_71296 = cljs.core.filterv(inst_71295,inst_71281);
var inst_71281__$1 = inst_71296;
var state_71311__$1 = (function (){var statearr_71334 = state_71311;
(statearr_71334[(10)] = inst_71281__$1);

return statearr_71334;
})();
var statearr_71335_72553 = state_71311__$1;
(statearr_71335_72553[(2)] = null);

(statearr_71335_72553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71336 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71336[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71336[(1)] = (1));

return statearr_71336;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71311){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71311);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71337){if((e71337 instanceof Object)){
var ex__69381__auto__ = e71337;
var statearr_71339_72557 = state_71311;
(statearr_71339_72557[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72558 = state_71311;
state_71311 = G__72558;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71341 = f__69583__auto__();
(statearr_71341[(6)] = c__69582__auto___72524);

return statearr_71341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__71348 = arguments.length;
switch (G__71348) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69582__auto___72564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71372){
var state_val_71373 = (state_71372[(1)]);
if((state_val_71373 === (7))){
var inst_71354 = (state_71372[(7)]);
var inst_71354__$1 = (state_71372[(2)]);
var inst_71355 = (inst_71354__$1 == null);
var inst_71356 = cljs.core.not(inst_71355);
var state_71372__$1 = (function (){var statearr_71374 = state_71372;
(statearr_71374[(7)] = inst_71354__$1);

return statearr_71374;
})();
if(inst_71356){
var statearr_71375_72565 = state_71372__$1;
(statearr_71375_72565[(1)] = (8));

} else {
var statearr_71376_72566 = state_71372__$1;
(statearr_71376_72566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (1))){
var inst_71349 = (0);
var state_71372__$1 = (function (){var statearr_71377 = state_71372;
(statearr_71377[(8)] = inst_71349);

return statearr_71377;
})();
var statearr_71378_72567 = state_71372__$1;
(statearr_71378_72567[(2)] = null);

(statearr_71378_72567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (4))){
var state_71372__$1 = state_71372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71372__$1,(7),ch);
} else {
if((state_val_71373 === (6))){
var inst_71367 = (state_71372[(2)]);
var state_71372__$1 = state_71372;
var statearr_71379_72568 = state_71372__$1;
(statearr_71379_72568[(2)] = inst_71367);

(statearr_71379_72568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (3))){
var inst_71369 = (state_71372[(2)]);
var inst_71370 = cljs.core.async.close_BANG_(out);
var state_71372__$1 = (function (){var statearr_71380 = state_71372;
(statearr_71380[(9)] = inst_71369);

return statearr_71380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71372__$1,inst_71370);
} else {
if((state_val_71373 === (2))){
var inst_71349 = (state_71372[(8)]);
var inst_71351 = (inst_71349 < n);
var state_71372__$1 = state_71372;
if(cljs.core.truth_(inst_71351)){
var statearr_71381_72570 = state_71372__$1;
(statearr_71381_72570[(1)] = (4));

} else {
var statearr_71382_72571 = state_71372__$1;
(statearr_71382_72571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (11))){
var inst_71349 = (state_71372[(8)]);
var inst_71359 = (state_71372[(2)]);
var inst_71360 = (inst_71349 + (1));
var inst_71349__$1 = inst_71360;
var state_71372__$1 = (function (){var statearr_71383 = state_71372;
(statearr_71383[(10)] = inst_71359);

(statearr_71383[(8)] = inst_71349__$1);

return statearr_71383;
})();
var statearr_71384_72577 = state_71372__$1;
(statearr_71384_72577[(2)] = null);

(statearr_71384_72577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (9))){
var state_71372__$1 = state_71372;
var statearr_71385_72582 = state_71372__$1;
(statearr_71385_72582[(2)] = null);

(statearr_71385_72582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (5))){
var state_71372__$1 = state_71372;
var statearr_71390_72584 = state_71372__$1;
(statearr_71390_72584[(2)] = null);

(statearr_71390_72584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (10))){
var inst_71364 = (state_71372[(2)]);
var state_71372__$1 = state_71372;
var statearr_71391_72585 = state_71372__$1;
(statearr_71391_72585[(2)] = inst_71364);

(statearr_71391_72585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71373 === (8))){
var inst_71354 = (state_71372[(7)]);
var state_71372__$1 = state_71372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71372__$1,(11),out,inst_71354);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71393[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71393[(1)] = (1));

return statearr_71393;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71372){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71372);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71394){if((e71394 instanceof Object)){
var ex__69381__auto__ = e71394;
var statearr_71395_72589 = state_71372;
(statearr_71395_72589[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72590 = state_71372;
state_71372 = G__72590;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71398 = f__69583__auto__();
(statearr_71398[(6)] = c__69582__auto___72564);

return statearr_71398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71400 = (function (f,ch,meta71401){
this.f = f;
this.ch = ch;
this.meta71401 = meta71401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71402,meta71401__$1){
var self__ = this;
var _71402__$1 = this;
return (new cljs.core.async.t_cljs$core$async71400(self__.f,self__.ch,meta71401__$1));
}));

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71402){
var self__ = this;
var _71402__$1 = this;
return self__.meta71401;
}));

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71408 = (function (f,ch,meta71401,_,fn1,meta71409){
this.f = f;
this.ch = ch;
this.meta71401 = meta71401;
this._ = _;
this.fn1 = fn1;
this.meta71409 = meta71409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71410,meta71409__$1){
var self__ = this;
var _71410__$1 = this;
return (new cljs.core.async.t_cljs$core$async71408(self__.f,self__.ch,self__.meta71401,self__._,self__.fn1,meta71409__$1));
}));

(cljs.core.async.t_cljs$core$async71408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71410){
var self__ = this;
var _71410__$1 = this;
return self__.meta71409;
}));

(cljs.core.async.t_cljs$core$async71408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async71408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__71399_SHARP_){
var G__71411 = (((p1__71399_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__71399_SHARP_) : self__.f.call(null,p1__71399_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__71411) : f1.call(null,G__71411));
});
}));

(cljs.core.async.t_cljs$core$async71408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71401","meta71401",941907563,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async71400","cljs.core.async/t_cljs$core$async71400",60642991,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta71409","meta71409",1284070746,null)], null);
}));

(cljs.core.async.t_cljs$core$async71408.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71408");

(cljs.core.async.t_cljs$core$async71408.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async71408");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71408.
 */
cljs.core.async.__GT_t_cljs$core$async71408 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71408(f__$1,ch__$1,meta71401__$1,___$2,fn1__$1,meta71409){
return (new cljs.core.async.t_cljs$core$async71408(f__$1,ch__$1,meta71401__$1,___$2,fn1__$1,meta71409));
});

}

return (new cljs.core.async.t_cljs$core$async71408(self__.f,self__.ch,self__.meta71401,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__71416 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__71416) : self__.f.call(null,G__71416));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71400.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async71400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71401","meta71401",941907563,null)], null);
}));

(cljs.core.async.t_cljs$core$async71400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71400");

(cljs.core.async.t_cljs$core$async71400.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async71400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71400.
 */
cljs.core.async.__GT_t_cljs$core$async71400 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async71400(f__$1,ch__$1,meta71401){
return (new cljs.core.async.t_cljs$core$async71400(f__$1,ch__$1,meta71401));
});

}

return (new cljs.core.async.t_cljs$core$async71400(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71421 = (function (f,ch,meta71422){
this.f = f;
this.ch = ch;
this.meta71422 = meta71422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71423,meta71422__$1){
var self__ = this;
var _71423__$1 = this;
return (new cljs.core.async.t_cljs$core$async71421(self__.f,self__.ch,meta71422__$1));
}));

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71423){
var self__ = this;
var _71423__$1 = this;
return self__.meta71422;
}));

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async71421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71422","meta71422",755246007,null)], null);
}));

(cljs.core.async.t_cljs$core$async71421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71421");

(cljs.core.async.t_cljs$core$async71421.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async71421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71421.
 */
cljs.core.async.__GT_t_cljs$core$async71421 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async71421(f__$1,ch__$1,meta71422){
return (new cljs.core.async.t_cljs$core$async71421(f__$1,ch__$1,meta71422));
});

}

return (new cljs.core.async.t_cljs$core$async71421(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71426 = (function (p,ch,meta71427){
this.p = p;
this.ch = ch;
this.meta71427 = meta71427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71428,meta71427__$1){
var self__ = this;
var _71428__$1 = this;
return (new cljs.core.async.t_cljs$core$async71426(self__.p,self__.ch,meta71427__$1));
}));

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71428){
var self__ = this;
var _71428__$1 = this;
return self__.meta71427;
}));

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async71426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta71427","meta71427",765666245,null)], null);
}));

(cljs.core.async.t_cljs$core$async71426.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71426");

(cljs.core.async.t_cljs$core$async71426.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async71426");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71426.
 */
cljs.core.async.__GT_t_cljs$core$async71426 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async71426(p__$1,ch__$1,meta71427){
return (new cljs.core.async.t_cljs$core$async71426(p__$1,ch__$1,meta71427));
});

}

return (new cljs.core.async.t_cljs$core$async71426(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__71433 = arguments.length;
switch (G__71433) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69582__auto___72618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71454){
var state_val_71455 = (state_71454[(1)]);
if((state_val_71455 === (7))){
var inst_71450 = (state_71454[(2)]);
var state_71454__$1 = state_71454;
var statearr_71456_72619 = state_71454__$1;
(statearr_71456_72619[(2)] = inst_71450);

(statearr_71456_72619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (1))){
var state_71454__$1 = state_71454;
var statearr_71457_72621 = state_71454__$1;
(statearr_71457_72621[(2)] = null);

(statearr_71457_72621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (4))){
var inst_71436 = (state_71454[(7)]);
var inst_71436__$1 = (state_71454[(2)]);
var inst_71437 = (inst_71436__$1 == null);
var state_71454__$1 = (function (){var statearr_71458 = state_71454;
(statearr_71458[(7)] = inst_71436__$1);

return statearr_71458;
})();
if(cljs.core.truth_(inst_71437)){
var statearr_71459_72622 = state_71454__$1;
(statearr_71459_72622[(1)] = (5));

} else {
var statearr_71460_72623 = state_71454__$1;
(statearr_71460_72623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (6))){
var inst_71436 = (state_71454[(7)]);
var inst_71441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71436) : p.call(null,inst_71436));
var state_71454__$1 = state_71454;
if(cljs.core.truth_(inst_71441)){
var statearr_71461_72625 = state_71454__$1;
(statearr_71461_72625[(1)] = (8));

} else {
var statearr_71462_72626 = state_71454__$1;
(statearr_71462_72626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (3))){
var inst_71452 = (state_71454[(2)]);
var state_71454__$1 = state_71454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71454__$1,inst_71452);
} else {
if((state_val_71455 === (2))){
var state_71454__$1 = state_71454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71454__$1,(4),ch);
} else {
if((state_val_71455 === (11))){
var inst_71444 = (state_71454[(2)]);
var state_71454__$1 = state_71454;
var statearr_71463_72627 = state_71454__$1;
(statearr_71463_72627[(2)] = inst_71444);

(statearr_71463_72627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (9))){
var state_71454__$1 = state_71454;
var statearr_71464_72632 = state_71454__$1;
(statearr_71464_72632[(2)] = null);

(statearr_71464_72632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (5))){
var inst_71439 = cljs.core.async.close_BANG_(out);
var state_71454__$1 = state_71454;
var statearr_71465_72633 = state_71454__$1;
(statearr_71465_72633[(2)] = inst_71439);

(statearr_71465_72633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (10))){
var inst_71447 = (state_71454[(2)]);
var state_71454__$1 = (function (){var statearr_71466 = state_71454;
(statearr_71466[(8)] = inst_71447);

return statearr_71466;
})();
var statearr_71467_72634 = state_71454__$1;
(statearr_71467_72634[(2)] = null);

(statearr_71467_72634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71455 === (8))){
var inst_71436 = (state_71454[(7)]);
var state_71454__$1 = state_71454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71454__$1,(11),out,inst_71436);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71468 = [null,null,null,null,null,null,null,null,null];
(statearr_71468[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71468[(1)] = (1));

return statearr_71468;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71454){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71454);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71469){if((e71469 instanceof Object)){
var ex__69381__auto__ = e71469;
var statearr_71470_72636 = state_71454;
(statearr_71470_72636[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72637 = state_71454;
state_71454 = G__72637;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71471 = f__69583__auto__();
(statearr_71471[(6)] = c__69582__auto___72618);

return statearr_71471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__71474 = arguments.length;
switch (G__71474) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__69582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71585){
var state_val_71586 = (state_71585[(1)]);
if((state_val_71586 === (7))){
var inst_71579 = (state_71585[(2)]);
var state_71585__$1 = state_71585;
var statearr_71587_72640 = state_71585__$1;
(statearr_71587_72640[(2)] = inst_71579);

(statearr_71587_72640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (20))){
var inst_71505 = (state_71585[(7)]);
var inst_71516 = (state_71585[(2)]);
var inst_71517 = cljs.core.next(inst_71505);
var inst_71488 = inst_71517;
var inst_71489 = null;
var inst_71490 = (0);
var inst_71491 = (0);
var state_71585__$1 = (function (){var statearr_71589 = state_71585;
(statearr_71589[(8)] = inst_71516);

(statearr_71589[(9)] = inst_71490);

(statearr_71589[(10)] = inst_71491);

(statearr_71589[(11)] = inst_71488);

(statearr_71589[(12)] = inst_71489);

return statearr_71589;
})();
var statearr_71590_72641 = state_71585__$1;
(statearr_71590_72641[(2)] = null);

(statearr_71590_72641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (1))){
var state_71585__$1 = state_71585;
var statearr_71591_72643 = state_71585__$1;
(statearr_71591_72643[(2)] = null);

(statearr_71591_72643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (4))){
var inst_71477 = (state_71585[(13)]);
var inst_71477__$1 = (state_71585[(2)]);
var inst_71478 = (inst_71477__$1 == null);
var state_71585__$1 = (function (){var statearr_71592 = state_71585;
(statearr_71592[(13)] = inst_71477__$1);

return statearr_71592;
})();
if(cljs.core.truth_(inst_71478)){
var statearr_71593_72664 = state_71585__$1;
(statearr_71593_72664[(1)] = (5));

} else {
var statearr_71597_72665 = state_71585__$1;
(statearr_71597_72665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (15))){
var state_71585__$1 = state_71585;
var statearr_71601_72667 = state_71585__$1;
(statearr_71601_72667[(2)] = null);

(statearr_71601_72667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (21))){
var state_71585__$1 = state_71585;
var statearr_71602_72669 = state_71585__$1;
(statearr_71602_72669[(2)] = null);

(statearr_71602_72669[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (13))){
var inst_71490 = (state_71585[(9)]);
var inst_71491 = (state_71585[(10)]);
var inst_71488 = (state_71585[(11)]);
var inst_71489 = (state_71585[(12)]);
var inst_71501 = (state_71585[(2)]);
var inst_71502 = (inst_71491 + (1));
var tmp71598 = inst_71490;
var tmp71599 = inst_71488;
var tmp71600 = inst_71489;
var inst_71488__$1 = tmp71599;
var inst_71489__$1 = tmp71600;
var inst_71490__$1 = tmp71598;
var inst_71491__$1 = inst_71502;
var state_71585__$1 = (function (){var statearr_71603 = state_71585;
(statearr_71603[(9)] = inst_71490__$1);

(statearr_71603[(10)] = inst_71491__$1);

(statearr_71603[(11)] = inst_71488__$1);

(statearr_71603[(14)] = inst_71501);

(statearr_71603[(12)] = inst_71489__$1);

return statearr_71603;
})();
var statearr_71604_72677 = state_71585__$1;
(statearr_71604_72677[(2)] = null);

(statearr_71604_72677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (22))){
var state_71585__$1 = state_71585;
var statearr_71605_72678 = state_71585__$1;
(statearr_71605_72678[(2)] = null);

(statearr_71605_72678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (6))){
var inst_71477 = (state_71585[(13)]);
var inst_71486 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71477) : f.call(null,inst_71477));
var inst_71487 = cljs.core.seq(inst_71486);
var inst_71488 = inst_71487;
var inst_71489 = null;
var inst_71490 = (0);
var inst_71491 = (0);
var state_71585__$1 = (function (){var statearr_71606 = state_71585;
(statearr_71606[(9)] = inst_71490);

(statearr_71606[(10)] = inst_71491);

(statearr_71606[(11)] = inst_71488);

(statearr_71606[(12)] = inst_71489);

return statearr_71606;
})();
var statearr_71607_72697 = state_71585__$1;
(statearr_71607_72697[(2)] = null);

(statearr_71607_72697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (17))){
var inst_71505 = (state_71585[(7)]);
var inst_71509 = cljs.core.chunk_first(inst_71505);
var inst_71510 = cljs.core.chunk_rest(inst_71505);
var inst_71511 = cljs.core.count(inst_71509);
var inst_71488 = inst_71510;
var inst_71489 = inst_71509;
var inst_71490 = inst_71511;
var inst_71491 = (0);
var state_71585__$1 = (function (){var statearr_71608 = state_71585;
(statearr_71608[(9)] = inst_71490);

(statearr_71608[(10)] = inst_71491);

(statearr_71608[(11)] = inst_71488);

(statearr_71608[(12)] = inst_71489);

return statearr_71608;
})();
var statearr_71609_72702 = state_71585__$1;
(statearr_71609_72702[(2)] = null);

(statearr_71609_72702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (3))){
var inst_71581 = (state_71585[(2)]);
var state_71585__$1 = state_71585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71585__$1,inst_71581);
} else {
if((state_val_71586 === (12))){
var inst_71569 = (state_71585[(2)]);
var state_71585__$1 = state_71585;
var statearr_71610_72724 = state_71585__$1;
(statearr_71610_72724[(2)] = inst_71569);

(statearr_71610_72724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (2))){
var state_71585__$1 = state_71585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71585__$1,(4),in$);
} else {
if((state_val_71586 === (23))){
var inst_71577 = (state_71585[(2)]);
var state_71585__$1 = state_71585;
var statearr_71611_72727 = state_71585__$1;
(statearr_71611_72727[(2)] = inst_71577);

(statearr_71611_72727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (19))){
var inst_71564 = (state_71585[(2)]);
var state_71585__$1 = state_71585;
var statearr_71612_72728 = state_71585__$1;
(statearr_71612_72728[(2)] = inst_71564);

(statearr_71612_72728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (11))){
var inst_71488 = (state_71585[(11)]);
var inst_71505 = (state_71585[(7)]);
var inst_71505__$1 = cljs.core.seq(inst_71488);
var state_71585__$1 = (function (){var statearr_71613 = state_71585;
(statearr_71613[(7)] = inst_71505__$1);

return statearr_71613;
})();
if(inst_71505__$1){
var statearr_71625_72730 = state_71585__$1;
(statearr_71625_72730[(1)] = (14));

} else {
var statearr_71626_72735 = state_71585__$1;
(statearr_71626_72735[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (9))){
var inst_71571 = (state_71585[(2)]);
var inst_71572 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_71585__$1 = (function (){var statearr_71627 = state_71585;
(statearr_71627[(15)] = inst_71571);

return statearr_71627;
})();
if(cljs.core.truth_(inst_71572)){
var statearr_71628_72740 = state_71585__$1;
(statearr_71628_72740[(1)] = (21));

} else {
var statearr_71629_72742 = state_71585__$1;
(statearr_71629_72742[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (5))){
var inst_71480 = cljs.core.async.close_BANG_(out);
var state_71585__$1 = state_71585;
var statearr_71630_72743 = state_71585__$1;
(statearr_71630_72743[(2)] = inst_71480);

(statearr_71630_72743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (14))){
var inst_71505 = (state_71585[(7)]);
var inst_71507 = cljs.core.chunked_seq_QMARK_(inst_71505);
var state_71585__$1 = state_71585;
if(inst_71507){
var statearr_71631_72748 = state_71585__$1;
(statearr_71631_72748[(1)] = (17));

} else {
var statearr_71632_72750 = state_71585__$1;
(statearr_71632_72750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (16))){
var inst_71567 = (state_71585[(2)]);
var state_71585__$1 = state_71585;
var statearr_71633_72753 = state_71585__$1;
(statearr_71633_72753[(2)] = inst_71567);

(statearr_71633_72753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71586 === (10))){
var inst_71491 = (state_71585[(10)]);
var inst_71489 = (state_71585[(12)]);
var inst_71499 = cljs.core._nth(inst_71489,inst_71491);
var state_71585__$1 = state_71585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71585__$1,(13),out,inst_71499);
} else {
if((state_val_71586 === (18))){
var inst_71505 = (state_71585[(7)]);
var inst_71514 = cljs.core.first(inst_71505);
var state_71585__$1 = state_71585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71585__$1,(20),out,inst_71514);
} else {
if((state_val_71586 === (8))){
var inst_71490 = (state_71585[(9)]);
var inst_71491 = (state_71585[(10)]);
var inst_71496 = (inst_71491 < inst_71490);
var inst_71497 = inst_71496;
var state_71585__$1 = state_71585;
if(cljs.core.truth_(inst_71497)){
var statearr_71634_72769 = state_71585__$1;
(statearr_71634_72769[(1)] = (10));

} else {
var statearr_71635_72774 = state_71585__$1;
(statearr_71635_72774[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__69378__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__69378__auto____0 = (function (){
var statearr_71636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71636[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__69378__auto__);

(statearr_71636[(1)] = (1));

return statearr_71636;
});
var cljs$core$async$mapcat_STAR__$_state_machine__69378__auto____1 = (function (state_71585){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71585);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71637){if((e71637 instanceof Object)){
var ex__69381__auto__ = e71637;
var statearr_71638_72779 = state_71585;
(statearr_71638_72779[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72783 = state_71585;
state_71585 = G__72783;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__69378__auto__ = function(state_71585){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__69378__auto____1.call(this,state_71585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__69378__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__69378__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71639 = f__69583__auto__();
(statearr_71639[(6)] = c__69582__auto__);

return statearr_71639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));

return c__69582__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__71641 = arguments.length;
switch (G__71641) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__71643 = arguments.length;
switch (G__71643) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__71647 = arguments.length;
switch (G__71647) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69582__auto___72792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71675){
var state_val_71676 = (state_71675[(1)]);
if((state_val_71676 === (7))){
var inst_71670 = (state_71675[(2)]);
var state_71675__$1 = state_71675;
var statearr_71679_72796 = state_71675__$1;
(statearr_71679_72796[(2)] = inst_71670);

(statearr_71679_72796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (1))){
var inst_71651 = null;
var state_71675__$1 = (function (){var statearr_71680 = state_71675;
(statearr_71680[(7)] = inst_71651);

return statearr_71680;
})();
var statearr_71681_72797 = state_71675__$1;
(statearr_71681_72797[(2)] = null);

(statearr_71681_72797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (4))){
var inst_71655 = (state_71675[(8)]);
var inst_71655__$1 = (state_71675[(2)]);
var inst_71656 = (inst_71655__$1 == null);
var inst_71657 = cljs.core.not(inst_71656);
var state_71675__$1 = (function (){var statearr_71682 = state_71675;
(statearr_71682[(8)] = inst_71655__$1);

return statearr_71682;
})();
if(inst_71657){
var statearr_71683_72798 = state_71675__$1;
(statearr_71683_72798[(1)] = (5));

} else {
var statearr_71684_72799 = state_71675__$1;
(statearr_71684_72799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (6))){
var state_71675__$1 = state_71675;
var statearr_71685_72800 = state_71675__$1;
(statearr_71685_72800[(2)] = null);

(statearr_71685_72800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (3))){
var inst_71672 = (state_71675[(2)]);
var inst_71673 = cljs.core.async.close_BANG_(out);
var state_71675__$1 = (function (){var statearr_71686 = state_71675;
(statearr_71686[(9)] = inst_71672);

return statearr_71686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71675__$1,inst_71673);
} else {
if((state_val_71676 === (2))){
var state_71675__$1 = state_71675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71675__$1,(4),ch);
} else {
if((state_val_71676 === (11))){
var inst_71655 = (state_71675[(8)]);
var inst_71664 = (state_71675[(2)]);
var inst_71651 = inst_71655;
var state_71675__$1 = (function (){var statearr_71687 = state_71675;
(statearr_71687[(7)] = inst_71651);

(statearr_71687[(10)] = inst_71664);

return statearr_71687;
})();
var statearr_71688_72803 = state_71675__$1;
(statearr_71688_72803[(2)] = null);

(statearr_71688_72803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (9))){
var inst_71655 = (state_71675[(8)]);
var state_71675__$1 = state_71675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71675__$1,(11),out,inst_71655);
} else {
if((state_val_71676 === (5))){
var inst_71651 = (state_71675[(7)]);
var inst_71655 = (state_71675[(8)]);
var inst_71659 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71655,inst_71651);
var state_71675__$1 = state_71675;
if(inst_71659){
var statearr_71690_72805 = state_71675__$1;
(statearr_71690_72805[(1)] = (8));

} else {
var statearr_71691_72807 = state_71675__$1;
(statearr_71691_72807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (10))){
var inst_71667 = (state_71675[(2)]);
var state_71675__$1 = state_71675;
var statearr_71692_72808 = state_71675__$1;
(statearr_71692_72808[(2)] = inst_71667);

(statearr_71692_72808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71676 === (8))){
var inst_71651 = (state_71675[(7)]);
var tmp71689 = inst_71651;
var inst_71651__$1 = tmp71689;
var state_71675__$1 = (function (){var statearr_71693 = state_71675;
(statearr_71693[(7)] = inst_71651__$1);

return statearr_71693;
})();
var statearr_71694_72810 = state_71675__$1;
(statearr_71694_72810[(2)] = null);

(statearr_71694_72810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71695[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71695[(1)] = (1));

return statearr_71695;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71675){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71675);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71696){if((e71696 instanceof Object)){
var ex__69381__auto__ = e71696;
var statearr_71697_72811 = state_71675;
(statearr_71697_72811[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72814 = state_71675;
state_71675 = G__72814;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71701 = f__69583__auto__();
(statearr_71701[(6)] = c__69582__auto___72792);

return statearr_71701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__71703 = arguments.length;
switch (G__71703) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69582__auto___72826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71741){
var state_val_71742 = (state_71741[(1)]);
if((state_val_71742 === (7))){
var inst_71737 = (state_71741[(2)]);
var state_71741__$1 = state_71741;
var statearr_71753_72827 = state_71741__$1;
(statearr_71753_72827[(2)] = inst_71737);

(statearr_71753_72827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (1))){
var inst_71704 = (new Array(n));
var inst_71705 = inst_71704;
var inst_71706 = (0);
var state_71741__$1 = (function (){var statearr_71754 = state_71741;
(statearr_71754[(7)] = inst_71705);

(statearr_71754[(8)] = inst_71706);

return statearr_71754;
})();
var statearr_71758_72828 = state_71741__$1;
(statearr_71758_72828[(2)] = null);

(statearr_71758_72828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (4))){
var inst_71709 = (state_71741[(9)]);
var inst_71709__$1 = (state_71741[(2)]);
var inst_71710 = (inst_71709__$1 == null);
var inst_71711 = cljs.core.not(inst_71710);
var state_71741__$1 = (function (){var statearr_71759 = state_71741;
(statearr_71759[(9)] = inst_71709__$1);

return statearr_71759;
})();
if(inst_71711){
var statearr_71760_72829 = state_71741__$1;
(statearr_71760_72829[(1)] = (5));

} else {
var statearr_71761_72830 = state_71741__$1;
(statearr_71761_72830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (15))){
var inst_71731 = (state_71741[(2)]);
var state_71741__$1 = state_71741;
var statearr_71762_72836 = state_71741__$1;
(statearr_71762_72836[(2)] = inst_71731);

(statearr_71762_72836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (13))){
var state_71741__$1 = state_71741;
var statearr_71770_72837 = state_71741__$1;
(statearr_71770_72837[(2)] = null);

(statearr_71770_72837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (6))){
var inst_71706 = (state_71741[(8)]);
var inst_71727 = (inst_71706 > (0));
var state_71741__$1 = state_71741;
if(cljs.core.truth_(inst_71727)){
var statearr_71774_72848 = state_71741__$1;
(statearr_71774_72848[(1)] = (12));

} else {
var statearr_71775_72849 = state_71741__$1;
(statearr_71775_72849[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (3))){
var inst_71739 = (state_71741[(2)]);
var state_71741__$1 = state_71741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71741__$1,inst_71739);
} else {
if((state_val_71742 === (12))){
var inst_71705 = (state_71741[(7)]);
var inst_71729 = cljs.core.vec(inst_71705);
var state_71741__$1 = state_71741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71741__$1,(15),out,inst_71729);
} else {
if((state_val_71742 === (2))){
var state_71741__$1 = state_71741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71741__$1,(4),ch);
} else {
if((state_val_71742 === (11))){
var inst_71721 = (state_71741[(2)]);
var inst_71722 = (new Array(n));
var inst_71705 = inst_71722;
var inst_71706 = (0);
var state_71741__$1 = (function (){var statearr_71776 = state_71741;
(statearr_71776[(7)] = inst_71705);

(statearr_71776[(8)] = inst_71706);

(statearr_71776[(10)] = inst_71721);

return statearr_71776;
})();
var statearr_71777_72859 = state_71741__$1;
(statearr_71777_72859[(2)] = null);

(statearr_71777_72859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (9))){
var inst_71705 = (state_71741[(7)]);
var inst_71719 = cljs.core.vec(inst_71705);
var state_71741__$1 = state_71741;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71741__$1,(11),out,inst_71719);
} else {
if((state_val_71742 === (5))){
var inst_71705 = (state_71741[(7)]);
var inst_71714 = (state_71741[(11)]);
var inst_71709 = (state_71741[(9)]);
var inst_71706 = (state_71741[(8)]);
var inst_71713 = (inst_71705[inst_71706] = inst_71709);
var inst_71714__$1 = (inst_71706 + (1));
var inst_71715 = (inst_71714__$1 < n);
var state_71741__$1 = (function (){var statearr_71781 = state_71741;
(statearr_71781[(11)] = inst_71714__$1);

(statearr_71781[(12)] = inst_71713);

return statearr_71781;
})();
if(cljs.core.truth_(inst_71715)){
var statearr_71786_72870 = state_71741__$1;
(statearr_71786_72870[(1)] = (8));

} else {
var statearr_71790_72871 = state_71741__$1;
(statearr_71790_72871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (14))){
var inst_71734 = (state_71741[(2)]);
var inst_71735 = cljs.core.async.close_BANG_(out);
var state_71741__$1 = (function (){var statearr_71792 = state_71741;
(statearr_71792[(13)] = inst_71734);

return statearr_71792;
})();
var statearr_71793_72872 = state_71741__$1;
(statearr_71793_72872[(2)] = inst_71735);

(statearr_71793_72872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (10))){
var inst_71725 = (state_71741[(2)]);
var state_71741__$1 = state_71741;
var statearr_71797_72873 = state_71741__$1;
(statearr_71797_72873[(2)] = inst_71725);

(statearr_71797_72873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71742 === (8))){
var inst_71705 = (state_71741[(7)]);
var inst_71714 = (state_71741[(11)]);
var tmp71791 = inst_71705;
var inst_71705__$1 = tmp71791;
var inst_71706 = inst_71714;
var state_71741__$1 = (function (){var statearr_71802 = state_71741;
(statearr_71802[(7)] = inst_71705__$1);

(statearr_71802[(8)] = inst_71706);

return statearr_71802;
})();
var statearr_71803_72874 = state_71741__$1;
(statearr_71803_72874[(2)] = null);

(statearr_71803_72874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71804[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71804[(1)] = (1));

return statearr_71804;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71741){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71741);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71805){if((e71805 instanceof Object)){
var ex__69381__auto__ = e71805;
var statearr_71808_72876 = state_71741;
(statearr_71808_72876[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72877 = state_71741;
state_71741 = G__72877;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71809 = f__69583__auto__();
(statearr_71809[(6)] = c__69582__auto___72826);

return statearr_71809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__71811 = arguments.length;
switch (G__71811) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__69582__auto___72887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_71856){
var state_val_71857 = (state_71856[(1)]);
if((state_val_71857 === (7))){
var inst_71852 = (state_71856[(2)]);
var state_71856__$1 = state_71856;
var statearr_71858_72888 = state_71856__$1;
(statearr_71858_72888[(2)] = inst_71852);

(statearr_71858_72888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (1))){
var inst_71812 = [];
var inst_71813 = inst_71812;
var inst_71814 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71856__$1 = (function (){var statearr_71859 = state_71856;
(statearr_71859[(7)] = inst_71813);

(statearr_71859[(8)] = inst_71814);

return statearr_71859;
})();
var statearr_71860_72893 = state_71856__$1;
(statearr_71860_72893[(2)] = null);

(statearr_71860_72893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (4))){
var inst_71817 = (state_71856[(9)]);
var inst_71817__$1 = (state_71856[(2)]);
var inst_71818 = (inst_71817__$1 == null);
var inst_71819 = cljs.core.not(inst_71818);
var state_71856__$1 = (function (){var statearr_71861 = state_71856;
(statearr_71861[(9)] = inst_71817__$1);

return statearr_71861;
})();
if(inst_71819){
var statearr_71862_72906 = state_71856__$1;
(statearr_71862_72906[(1)] = (5));

} else {
var statearr_71863_72911 = state_71856__$1;
(statearr_71863_72911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (15))){
var inst_71813 = (state_71856[(7)]);
var inst_71844 = cljs.core.vec(inst_71813);
var state_71856__$1 = state_71856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71856__$1,(18),out,inst_71844);
} else {
if((state_val_71857 === (13))){
var inst_71839 = (state_71856[(2)]);
var state_71856__$1 = state_71856;
var statearr_71866_72918 = state_71856__$1;
(statearr_71866_72918[(2)] = inst_71839);

(statearr_71866_72918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (6))){
var inst_71813 = (state_71856[(7)]);
var inst_71841 = inst_71813.length;
var inst_71842 = (inst_71841 > (0));
var state_71856__$1 = state_71856;
if(cljs.core.truth_(inst_71842)){
var statearr_71878_72923 = state_71856__$1;
(statearr_71878_72923[(1)] = (15));

} else {
var statearr_71879_72924 = state_71856__$1;
(statearr_71879_72924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (17))){
var inst_71849 = (state_71856[(2)]);
var inst_71850 = cljs.core.async.close_BANG_(out);
var state_71856__$1 = (function (){var statearr_71880 = state_71856;
(statearr_71880[(10)] = inst_71849);

return statearr_71880;
})();
var statearr_71881_72926 = state_71856__$1;
(statearr_71881_72926[(2)] = inst_71850);

(statearr_71881_72926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (3))){
var inst_71854 = (state_71856[(2)]);
var state_71856__$1 = state_71856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71856__$1,inst_71854);
} else {
if((state_val_71857 === (12))){
var inst_71813 = (state_71856[(7)]);
var inst_71832 = cljs.core.vec(inst_71813);
var state_71856__$1 = state_71856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71856__$1,(14),out,inst_71832);
} else {
if((state_val_71857 === (2))){
var state_71856__$1 = state_71856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71856__$1,(4),ch);
} else {
if((state_val_71857 === (11))){
var inst_71813 = (state_71856[(7)]);
var inst_71821 = (state_71856[(11)]);
var inst_71817 = (state_71856[(9)]);
var inst_71829 = inst_71813.push(inst_71817);
var tmp71883 = inst_71813;
var inst_71813__$1 = tmp71883;
var inst_71814 = inst_71821;
var state_71856__$1 = (function (){var statearr_71885 = state_71856;
(statearr_71885[(7)] = inst_71813__$1);

(statearr_71885[(8)] = inst_71814);

(statearr_71885[(12)] = inst_71829);

return statearr_71885;
})();
var statearr_71886_72942 = state_71856__$1;
(statearr_71886_72942[(2)] = null);

(statearr_71886_72942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (9))){
var inst_71814 = (state_71856[(8)]);
var inst_71825 = cljs.core.keyword_identical_QMARK_(inst_71814,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_71856__$1 = state_71856;
var statearr_71887_72949 = state_71856__$1;
(statearr_71887_72949[(2)] = inst_71825);

(statearr_71887_72949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (5))){
var inst_71822 = (state_71856[(13)]);
var inst_71814 = (state_71856[(8)]);
var inst_71821 = (state_71856[(11)]);
var inst_71817 = (state_71856[(9)]);
var inst_71821__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_71817) : f.call(null,inst_71817));
var inst_71822__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71821__$1,inst_71814);
var state_71856__$1 = (function (){var statearr_71888 = state_71856;
(statearr_71888[(13)] = inst_71822__$1);

(statearr_71888[(11)] = inst_71821__$1);

return statearr_71888;
})();
if(inst_71822__$1){
var statearr_71889_72960 = state_71856__$1;
(statearr_71889_72960[(1)] = (8));

} else {
var statearr_71890_72961 = state_71856__$1;
(statearr_71890_72961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (14))){
var inst_71821 = (state_71856[(11)]);
var inst_71817 = (state_71856[(9)]);
var inst_71834 = (state_71856[(2)]);
var inst_71835 = [];
var inst_71836 = inst_71835.push(inst_71817);
var inst_71813 = inst_71835;
var inst_71814 = inst_71821;
var state_71856__$1 = (function (){var statearr_71891 = state_71856;
(statearr_71891[(7)] = inst_71813);

(statearr_71891[(8)] = inst_71814);

(statearr_71891[(14)] = inst_71836);

(statearr_71891[(15)] = inst_71834);

return statearr_71891;
})();
var statearr_71892_72964 = state_71856__$1;
(statearr_71892_72964[(2)] = null);

(statearr_71892_72964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (16))){
var state_71856__$1 = state_71856;
var statearr_71893_72965 = state_71856__$1;
(statearr_71893_72965[(2)] = null);

(statearr_71893_72965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (10))){
var inst_71827 = (state_71856[(2)]);
var state_71856__$1 = state_71856;
if(cljs.core.truth_(inst_71827)){
var statearr_71894_72970 = state_71856__$1;
(statearr_71894_72970[(1)] = (11));

} else {
var statearr_71895_72971 = state_71856__$1;
(statearr_71895_72971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (18))){
var inst_71846 = (state_71856[(2)]);
var state_71856__$1 = state_71856;
var statearr_71896_72972 = state_71856__$1;
(statearr_71896_72972[(2)] = inst_71846);

(statearr_71896_72972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71857 === (8))){
var inst_71822 = (state_71856[(13)]);
var state_71856__$1 = state_71856;
var statearr_71897_72978 = state_71856__$1;
(statearr_71897_72978[(2)] = inst_71822);

(statearr_71897_72978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__69378__auto__ = null;
var cljs$core$async$state_machine__69378__auto____0 = (function (){
var statearr_71898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71898[(0)] = cljs$core$async$state_machine__69378__auto__);

(statearr_71898[(1)] = (1));

return statearr_71898;
});
var cljs$core$async$state_machine__69378__auto____1 = (function (state_71856){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_71856);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e71899){if((e71899 instanceof Object)){
var ex__69381__auto__ = e71899;
var statearr_71900_72985 = state_71856;
(statearr_71900_72985[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72986 = state_71856;
state_71856 = G__72986;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
cljs$core$async$state_machine__69378__auto__ = function(state_71856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__69378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__69378__auto____1.call(this,state_71856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__69378__auto____0;
cljs$core$async$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__69378__auto____1;
return cljs$core$async$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_71901 = f__69583__auto__();
(statearr_71901[(6)] = c__69582__auto___72887);

return statearr_71901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

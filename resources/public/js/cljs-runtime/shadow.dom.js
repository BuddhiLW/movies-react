goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_73173 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_73173(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_73175 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_73175(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__71952 = coll;
var G__71953 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__71952,G__71953) : shadow.dom.lazy_native_coll_seq.call(null,G__71952,G__71953));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__72001 = arguments.length;
switch (G__72001) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__72014 = arguments.length;
switch (G__72014) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__72029 = arguments.length;
switch (G__72029) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__72048 = arguments.length;
switch (G__72048) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__72062 = arguments.length;
switch (G__72062) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__72079 = arguments.length;
switch (G__72079) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e72097){if((e72097 instanceof Object)){
var e = e72097;
return console.log("didnt support attachEvent",el,e);
} else {
throw e72097;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__72119 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__72120 = null;
var count__72121 = (0);
var i__72122 = (0);
while(true){
if((i__72122 < count__72121)){
var el = chunk__72120.cljs$core$IIndexed$_nth$arity$2(null,i__72122);
var handler_73193__$1 = ((function (seq__72119,chunk__72120,count__72121,i__72122,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72119,chunk__72120,count__72121,i__72122,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73193__$1);


var G__73194 = seq__72119;
var G__73195 = chunk__72120;
var G__73196 = count__72121;
var G__73197 = (i__72122 + (1));
seq__72119 = G__73194;
chunk__72120 = G__73195;
count__72121 = G__73196;
i__72122 = G__73197;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72119);
if(temp__5804__auto__){
var seq__72119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72119__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72119__$1);
var G__73198 = cljs.core.chunk_rest(seq__72119__$1);
var G__73199 = c__5565__auto__;
var G__73200 = cljs.core.count(c__5565__auto__);
var G__73201 = (0);
seq__72119 = G__73198;
chunk__72120 = G__73199;
count__72121 = G__73200;
i__72122 = G__73201;
continue;
} else {
var el = cljs.core.first(seq__72119__$1);
var handler_73202__$1 = ((function (seq__72119,chunk__72120,count__72121,i__72122,el,seq__72119__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72119,chunk__72120,count__72121,i__72122,el,seq__72119__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73202__$1);


var G__73205 = cljs.core.next(seq__72119__$1);
var G__73206 = null;
var G__73207 = (0);
var G__73208 = (0);
seq__72119 = G__73205;
chunk__72120 = G__73206;
count__72121 = G__73207;
i__72122 = G__73208;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__72149 = arguments.length;
switch (G__72149) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__72169 = cljs.core.seq(events);
var chunk__72170 = null;
var count__72171 = (0);
var i__72172 = (0);
while(true){
if((i__72172 < count__72171)){
var vec__72193 = chunk__72170.cljs$core$IIndexed$_nth$arity$2(null,i__72172);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72193,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73213 = seq__72169;
var G__73214 = chunk__72170;
var G__73215 = count__72171;
var G__73216 = (i__72172 + (1));
seq__72169 = G__73213;
chunk__72170 = G__73214;
count__72171 = G__73215;
i__72172 = G__73216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72169);
if(temp__5804__auto__){
var seq__72169__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72169__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72169__$1);
var G__73218 = cljs.core.chunk_rest(seq__72169__$1);
var G__73219 = c__5565__auto__;
var G__73220 = cljs.core.count(c__5565__auto__);
var G__73221 = (0);
seq__72169 = G__73218;
chunk__72170 = G__73219;
count__72171 = G__73220;
i__72172 = G__73221;
continue;
} else {
var vec__72199 = cljs.core.first(seq__72169__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72199,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73222 = cljs.core.next(seq__72169__$1);
var G__73223 = null;
var G__73224 = (0);
var G__73225 = (0);
seq__72169 = G__73222;
chunk__72170 = G__73223;
count__72171 = G__73224;
i__72172 = G__73225;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__72203 = cljs.core.seq(styles);
var chunk__72204 = null;
var count__72205 = (0);
var i__72206 = (0);
while(true){
if((i__72206 < count__72205)){
var vec__72222 = chunk__72204.cljs$core$IIndexed$_nth$arity$2(null,i__72206);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72222,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72222,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73226 = seq__72203;
var G__73227 = chunk__72204;
var G__73228 = count__72205;
var G__73229 = (i__72206 + (1));
seq__72203 = G__73226;
chunk__72204 = G__73227;
count__72205 = G__73228;
i__72206 = G__73229;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72203);
if(temp__5804__auto__){
var seq__72203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72203__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72203__$1);
var G__73230 = cljs.core.chunk_rest(seq__72203__$1);
var G__73231 = c__5565__auto__;
var G__73232 = cljs.core.count(c__5565__auto__);
var G__73233 = (0);
seq__72203 = G__73230;
chunk__72204 = G__73231;
count__72205 = G__73232;
i__72206 = G__73233;
continue;
} else {
var vec__72239 = cljs.core.first(seq__72203__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72239,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73234 = cljs.core.next(seq__72203__$1);
var G__73235 = null;
var G__73236 = (0);
var G__73237 = (0);
seq__72203 = G__73234;
chunk__72204 = G__73235;
count__72205 = G__73236;
i__72206 = G__73237;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__72253_73238 = key;
var G__72253_73239__$1 = (((G__72253_73238 instanceof cljs.core.Keyword))?G__72253_73238.fqn:null);
switch (G__72253_73239__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_73245 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_73245,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_73245,"aria-");
}
})())){
el.setAttribute(ks_73245,value);
} else {
(el[ks_73245] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__72274){
var map__72275 = p__72274;
var map__72275__$1 = cljs.core.__destructure_map(map__72275);
var props = map__72275__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72275__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__72277 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72277,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72277,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72277,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__72284 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__72284,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__72284;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__72288 = arguments.length;
switch (G__72288) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__72304){
var vec__72307 = p__72304;
var seq__72308 = cljs.core.seq(vec__72307);
var first__72309 = cljs.core.first(seq__72308);
var seq__72308__$1 = cljs.core.next(seq__72308);
var nn = first__72309;
var first__72309__$1 = cljs.core.first(seq__72308__$1);
var seq__72308__$2 = cljs.core.next(seq__72308__$1);
var np = first__72309__$1;
var nc = seq__72308__$2;
var node = vec__72307;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72316 = nn;
var G__72317 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72316,G__72317) : create_fn.call(null,G__72316,G__72317));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72320 = nn;
var G__72321 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72320,G__72321) : create_fn.call(null,G__72320,G__72321));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__72324 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72324,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72324,(1),null);
var seq__72327_73258 = cljs.core.seq(node_children);
var chunk__72328_73259 = null;
var count__72329_73260 = (0);
var i__72330_73261 = (0);
while(true){
if((i__72330_73261 < count__72329_73260)){
var child_struct_73262 = chunk__72328_73259.cljs$core$IIndexed$_nth$arity$2(null,i__72330_73261);
var children_73263 = shadow.dom.dom_node(child_struct_73262);
if(cljs.core.seq_QMARK_(children_73263)){
var seq__72372_73264 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73263));
var chunk__72374_73265 = null;
var count__72375_73266 = (0);
var i__72376_73267 = (0);
while(true){
if((i__72376_73267 < count__72375_73266)){
var child_73268 = chunk__72374_73265.cljs$core$IIndexed$_nth$arity$2(null,i__72376_73267);
if(cljs.core.truth_(child_73268)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73268);


var G__73269 = seq__72372_73264;
var G__73270 = chunk__72374_73265;
var G__73271 = count__72375_73266;
var G__73272 = (i__72376_73267 + (1));
seq__72372_73264 = G__73269;
chunk__72374_73265 = G__73270;
count__72375_73266 = G__73271;
i__72376_73267 = G__73272;
continue;
} else {
var G__73273 = seq__72372_73264;
var G__73274 = chunk__72374_73265;
var G__73275 = count__72375_73266;
var G__73276 = (i__72376_73267 + (1));
seq__72372_73264 = G__73273;
chunk__72374_73265 = G__73274;
count__72375_73266 = G__73275;
i__72376_73267 = G__73276;
continue;
}
} else {
var temp__5804__auto___73277 = cljs.core.seq(seq__72372_73264);
if(temp__5804__auto___73277){
var seq__72372_73279__$1 = temp__5804__auto___73277;
if(cljs.core.chunked_seq_QMARK_(seq__72372_73279__$1)){
var c__5565__auto___73283 = cljs.core.chunk_first(seq__72372_73279__$1);
var G__73284 = cljs.core.chunk_rest(seq__72372_73279__$1);
var G__73285 = c__5565__auto___73283;
var G__73286 = cljs.core.count(c__5565__auto___73283);
var G__73287 = (0);
seq__72372_73264 = G__73284;
chunk__72374_73265 = G__73285;
count__72375_73266 = G__73286;
i__72376_73267 = G__73287;
continue;
} else {
var child_73288 = cljs.core.first(seq__72372_73279__$1);
if(cljs.core.truth_(child_73288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73288);


var G__73289 = cljs.core.next(seq__72372_73279__$1);
var G__73290 = null;
var G__73291 = (0);
var G__73292 = (0);
seq__72372_73264 = G__73289;
chunk__72374_73265 = G__73290;
count__72375_73266 = G__73291;
i__72376_73267 = G__73292;
continue;
} else {
var G__73293 = cljs.core.next(seq__72372_73279__$1);
var G__73294 = null;
var G__73295 = (0);
var G__73296 = (0);
seq__72372_73264 = G__73293;
chunk__72374_73265 = G__73294;
count__72375_73266 = G__73295;
i__72376_73267 = G__73296;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73263);
}


var G__73297 = seq__72327_73258;
var G__73298 = chunk__72328_73259;
var G__73299 = count__72329_73260;
var G__73300 = (i__72330_73261 + (1));
seq__72327_73258 = G__73297;
chunk__72328_73259 = G__73298;
count__72329_73260 = G__73299;
i__72330_73261 = G__73300;
continue;
} else {
var temp__5804__auto___73301 = cljs.core.seq(seq__72327_73258);
if(temp__5804__auto___73301){
var seq__72327_73302__$1 = temp__5804__auto___73301;
if(cljs.core.chunked_seq_QMARK_(seq__72327_73302__$1)){
var c__5565__auto___73303 = cljs.core.chunk_first(seq__72327_73302__$1);
var G__73304 = cljs.core.chunk_rest(seq__72327_73302__$1);
var G__73305 = c__5565__auto___73303;
var G__73306 = cljs.core.count(c__5565__auto___73303);
var G__73307 = (0);
seq__72327_73258 = G__73304;
chunk__72328_73259 = G__73305;
count__72329_73260 = G__73306;
i__72330_73261 = G__73307;
continue;
} else {
var child_struct_73308 = cljs.core.first(seq__72327_73302__$1);
var children_73309 = shadow.dom.dom_node(child_struct_73308);
if(cljs.core.seq_QMARK_(children_73309)){
var seq__72388_73310 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73309));
var chunk__72390_73311 = null;
var count__72391_73312 = (0);
var i__72392_73313 = (0);
while(true){
if((i__72392_73313 < count__72391_73312)){
var child_73314 = chunk__72390_73311.cljs$core$IIndexed$_nth$arity$2(null,i__72392_73313);
if(cljs.core.truth_(child_73314)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73314);


var G__73315 = seq__72388_73310;
var G__73316 = chunk__72390_73311;
var G__73317 = count__72391_73312;
var G__73318 = (i__72392_73313 + (1));
seq__72388_73310 = G__73315;
chunk__72390_73311 = G__73316;
count__72391_73312 = G__73317;
i__72392_73313 = G__73318;
continue;
} else {
var G__73319 = seq__72388_73310;
var G__73320 = chunk__72390_73311;
var G__73321 = count__72391_73312;
var G__73322 = (i__72392_73313 + (1));
seq__72388_73310 = G__73319;
chunk__72390_73311 = G__73320;
count__72391_73312 = G__73321;
i__72392_73313 = G__73322;
continue;
}
} else {
var temp__5804__auto___73323__$1 = cljs.core.seq(seq__72388_73310);
if(temp__5804__auto___73323__$1){
var seq__72388_73324__$1 = temp__5804__auto___73323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72388_73324__$1)){
var c__5565__auto___73325 = cljs.core.chunk_first(seq__72388_73324__$1);
var G__73326 = cljs.core.chunk_rest(seq__72388_73324__$1);
var G__73327 = c__5565__auto___73325;
var G__73328 = cljs.core.count(c__5565__auto___73325);
var G__73329 = (0);
seq__72388_73310 = G__73326;
chunk__72390_73311 = G__73327;
count__72391_73312 = G__73328;
i__72392_73313 = G__73329;
continue;
} else {
var child_73331 = cljs.core.first(seq__72388_73324__$1);
if(cljs.core.truth_(child_73331)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73331);


var G__73333 = cljs.core.next(seq__72388_73324__$1);
var G__73334 = null;
var G__73335 = (0);
var G__73336 = (0);
seq__72388_73310 = G__73333;
chunk__72390_73311 = G__73334;
count__72391_73312 = G__73335;
i__72392_73313 = G__73336;
continue;
} else {
var G__73337 = cljs.core.next(seq__72388_73324__$1);
var G__73338 = null;
var G__73339 = (0);
var G__73340 = (0);
seq__72388_73310 = G__73337;
chunk__72390_73311 = G__73338;
count__72391_73312 = G__73339;
i__72392_73313 = G__73340;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73309);
}


var G__73341 = cljs.core.next(seq__72327_73302__$1);
var G__73342 = null;
var G__73343 = (0);
var G__73344 = (0);
seq__72327_73258 = G__73341;
chunk__72328_73259 = G__73342;
count__72329_73260 = G__73343;
i__72330_73261 = G__73344;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__72426 = cljs.core.seq(node);
var chunk__72427 = null;
var count__72428 = (0);
var i__72429 = (0);
while(true){
if((i__72429 < count__72428)){
var n = chunk__72427.cljs$core$IIndexed$_nth$arity$2(null,i__72429);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73345 = seq__72426;
var G__73346 = chunk__72427;
var G__73347 = count__72428;
var G__73348 = (i__72429 + (1));
seq__72426 = G__73345;
chunk__72427 = G__73346;
count__72428 = G__73347;
i__72429 = G__73348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72426);
if(temp__5804__auto__){
var seq__72426__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72426__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72426__$1);
var G__73350 = cljs.core.chunk_rest(seq__72426__$1);
var G__73351 = c__5565__auto__;
var G__73352 = cljs.core.count(c__5565__auto__);
var G__73353 = (0);
seq__72426 = G__73350;
chunk__72427 = G__73351;
count__72428 = G__73352;
i__72429 = G__73353;
continue;
} else {
var n = cljs.core.first(seq__72426__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73355 = cljs.core.next(seq__72426__$1);
var G__73356 = null;
var G__73357 = (0);
var G__73358 = (0);
seq__72426 = G__73355;
chunk__72427 = G__73356;
count__72428 = G__73357;
i__72429 = G__73358;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__72448 = arguments.length;
switch (G__72448) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__72452 = arguments.length;
switch (G__72452) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__72470 = arguments.length;
switch (G__72470) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73366 = arguments.length;
var i__5767__auto___73367 = (0);
while(true){
if((i__5767__auto___73367 < len__5766__auto___73366)){
args__5772__auto__.push((arguments[i__5767__auto___73367]));

var G__73368 = (i__5767__auto___73367 + (1));
i__5767__auto___73367 = G__73368;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__72501_73369 = cljs.core.seq(nodes);
var chunk__72502_73370 = null;
var count__72503_73371 = (0);
var i__72504_73372 = (0);
while(true){
if((i__72504_73372 < count__72503_73371)){
var node_73373 = chunk__72502_73370.cljs$core$IIndexed$_nth$arity$2(null,i__72504_73372);
fragment.appendChild(shadow.dom._to_dom(node_73373));


var G__73374 = seq__72501_73369;
var G__73375 = chunk__72502_73370;
var G__73376 = count__72503_73371;
var G__73377 = (i__72504_73372 + (1));
seq__72501_73369 = G__73374;
chunk__72502_73370 = G__73375;
count__72503_73371 = G__73376;
i__72504_73372 = G__73377;
continue;
} else {
var temp__5804__auto___73378 = cljs.core.seq(seq__72501_73369);
if(temp__5804__auto___73378){
var seq__72501_73379__$1 = temp__5804__auto___73378;
if(cljs.core.chunked_seq_QMARK_(seq__72501_73379__$1)){
var c__5565__auto___73380 = cljs.core.chunk_first(seq__72501_73379__$1);
var G__73381 = cljs.core.chunk_rest(seq__72501_73379__$1);
var G__73382 = c__5565__auto___73380;
var G__73383 = cljs.core.count(c__5565__auto___73380);
var G__73384 = (0);
seq__72501_73369 = G__73381;
chunk__72502_73370 = G__73382;
count__72503_73371 = G__73383;
i__72504_73372 = G__73384;
continue;
} else {
var node_73385 = cljs.core.first(seq__72501_73379__$1);
fragment.appendChild(shadow.dom._to_dom(node_73385));


var G__73386 = cljs.core.next(seq__72501_73379__$1);
var G__73387 = null;
var G__73388 = (0);
var G__73389 = (0);
seq__72501_73369 = G__73386;
chunk__72502_73370 = G__73387;
count__72503_73371 = G__73388;
i__72504_73372 = G__73389;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq72492){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72492));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__72525_73425 = cljs.core.seq(scripts);
var chunk__72526_73426 = null;
var count__72527_73427 = (0);
var i__72528_73428 = (0);
while(true){
if((i__72528_73428 < count__72527_73427)){
var vec__72545_73429 = chunk__72526_73426.cljs$core$IIndexed$_nth$arity$2(null,i__72528_73428);
var script_tag_73430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72545_73429,(0),null);
var script_body_73431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72545_73429,(1),null);
eval(script_body_73431);


var G__73434 = seq__72525_73425;
var G__73435 = chunk__72526_73426;
var G__73436 = count__72527_73427;
var G__73437 = (i__72528_73428 + (1));
seq__72525_73425 = G__73434;
chunk__72526_73426 = G__73435;
count__72527_73427 = G__73436;
i__72528_73428 = G__73437;
continue;
} else {
var temp__5804__auto___73442 = cljs.core.seq(seq__72525_73425);
if(temp__5804__auto___73442){
var seq__72525_73445__$1 = temp__5804__auto___73442;
if(cljs.core.chunked_seq_QMARK_(seq__72525_73445__$1)){
var c__5565__auto___73446 = cljs.core.chunk_first(seq__72525_73445__$1);
var G__73449 = cljs.core.chunk_rest(seq__72525_73445__$1);
var G__73450 = c__5565__auto___73446;
var G__73451 = cljs.core.count(c__5565__auto___73446);
var G__73452 = (0);
seq__72525_73425 = G__73449;
chunk__72526_73426 = G__73450;
count__72527_73427 = G__73451;
i__72528_73428 = G__73452;
continue;
} else {
var vec__72554_73456 = cljs.core.first(seq__72525_73445__$1);
var script_tag_73457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72554_73456,(0),null);
var script_body_73458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72554_73456,(1),null);
eval(script_body_73458);


var G__73459 = cljs.core.next(seq__72525_73445__$1);
var G__73460 = null;
var G__73461 = (0);
var G__73462 = (0);
seq__72525_73425 = G__73459;
chunk__72526_73426 = G__73460;
count__72527_73427 = G__73461;
i__72528_73428 = G__73462;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__72559){
var vec__72560 = p__72559;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72560,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72560,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__72588 = arguments.length;
switch (G__72588) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__72612 = cljs.core.seq(style_keys);
var chunk__72613 = null;
var count__72614 = (0);
var i__72615 = (0);
while(true){
if((i__72615 < count__72614)){
var it = chunk__72613.cljs$core$IIndexed$_nth$arity$2(null,i__72615);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73489 = seq__72612;
var G__73490 = chunk__72613;
var G__73491 = count__72614;
var G__73492 = (i__72615 + (1));
seq__72612 = G__73489;
chunk__72613 = G__73490;
count__72614 = G__73491;
i__72615 = G__73492;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__72612);
if(temp__5804__auto__){
var seq__72612__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72612__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__72612__$1);
var G__73494 = cljs.core.chunk_rest(seq__72612__$1);
var G__73495 = c__5565__auto__;
var G__73496 = cljs.core.count(c__5565__auto__);
var G__73497 = (0);
seq__72612 = G__73494;
chunk__72613 = G__73495;
count__72614 = G__73496;
i__72615 = G__73497;
continue;
} else {
var it = cljs.core.first(seq__72612__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73498 = cljs.core.next(seq__72612__$1);
var G__73499 = null;
var G__73500 = (0);
var G__73501 = (0);
seq__72612 = G__73498;
chunk__72613 = G__73499;
count__72614 = G__73500;
i__72615 = G__73501;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k72629,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__72639 = k72629;
var G__72639__$1 = (((G__72639 instanceof cljs.core.Keyword))?G__72639.fqn:null);
switch (G__72639__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72629,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__72642){
var vec__72648 = p__72642;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72648,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72648,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72628){
var self__ = this;
var G__72628__$1 = this;
return (new cljs.core.RecordIter((0),G__72628__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72630,other72631){
var self__ = this;
var this72630__$1 = this;
return (((!((other72631 == null)))) && ((((this72630__$1.constructor === other72631.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72630__$1.x,other72631.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72630__$1.y,other72631.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72630__$1.__extmap,other72631.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k72629){
var self__ = this;
var this__5347__auto____$1 = this;
var G__72789 = k72629;
var G__72789__$1 = (((G__72789 instanceof cljs.core.Keyword))?G__72789.fqn:null);
switch (G__72789__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72629);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__72628){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__72793 = cljs.core.keyword_identical_QMARK_;
var expr__72794 = k__5349__auto__;
if(cljs.core.truth_((pred__72793.cljs$core$IFn$_invoke$arity$2 ? pred__72793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__72794) : pred__72793.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__72794)))){
return (new shadow.dom.Coordinate(G__72628,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72793.cljs$core$IFn$_invoke$arity$2 ? pred__72793.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__72794) : pred__72793.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__72794)))){
return (new shadow.dom.Coordinate(self__.x,G__72628,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__72628),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__72628){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__72628,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__72635){
var extmap__5382__auto__ = (function (){var G__72821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72635,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__72635)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72821);
} else {
return G__72821;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__72635),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__72635),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k72861,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__72875 = k72861;
var G__72875__$1 = (((G__72875 instanceof cljs.core.Keyword))?G__72875.fqn:null);
switch (G__72875__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72861,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__72883){
var vec__72884 = p__72883;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72884,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72884,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72860){
var self__ = this;
var G__72860__$1 = this;
return (new cljs.core.RecordIter((0),G__72860__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72862,other72863){
var self__ = this;
var this72862__$1 = this;
return (((!((other72863 == null)))) && ((((this72862__$1.constructor === other72863.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72862__$1.w,other72863.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72862__$1.h,other72863.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72862__$1.__extmap,other72863.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k72861){
var self__ = this;
var this__5347__auto____$1 = this;
var G__72987 = k72861;
var G__72987__$1 = (((G__72987 instanceof cljs.core.Keyword))?G__72987.fqn:null);
switch (G__72987__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k72861);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__72860){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__72994 = cljs.core.keyword_identical_QMARK_;
var expr__72995 = k__5349__auto__;
if(cljs.core.truth_((pred__72994.cljs$core$IFn$_invoke$arity$2 ? pred__72994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__72995) : pred__72994.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__72995)))){
return (new shadow.dom.Size(G__72860,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__72994.cljs$core$IFn$_invoke$arity$2 ? pred__72994.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__72995) : pred__72994.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__72995)))){
return (new shadow.dom.Size(self__.w,G__72860,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__72860),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__72860){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__72860,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__72869){
var extmap__5382__auto__ = (function (){var G__72999 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__72869,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__72869)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72999);
} else {
return G__72999;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__72869),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__72869),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__73541 = (i + (1));
var G__73542 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__73541;
ret = G__73542;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__73010){
var vec__73011 = p__73010;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73011,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__73016 = arguments.length;
switch (G__73016) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__73544 = ps;
var G__73545 = (i + (1));
el__$1 = G__73544;
i = G__73545;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__73039 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73039,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73039,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73039,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__73043_73550 = cljs.core.seq(props);
var chunk__73044_73551 = null;
var count__73045_73552 = (0);
var i__73046_73553 = (0);
while(true){
if((i__73046_73553 < count__73045_73552)){
var vec__73054_73554 = chunk__73044_73551.cljs$core$IIndexed$_nth$arity$2(null,i__73046_73553);
var k_73555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73054_73554,(0),null);
var v_73556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73054_73554,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_73555);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73555),v_73556);


var G__73557 = seq__73043_73550;
var G__73558 = chunk__73044_73551;
var G__73559 = count__73045_73552;
var G__73560 = (i__73046_73553 + (1));
seq__73043_73550 = G__73557;
chunk__73044_73551 = G__73558;
count__73045_73552 = G__73559;
i__73046_73553 = G__73560;
continue;
} else {
var temp__5804__auto___73561 = cljs.core.seq(seq__73043_73550);
if(temp__5804__auto___73561){
var seq__73043_73562__$1 = temp__5804__auto___73561;
if(cljs.core.chunked_seq_QMARK_(seq__73043_73562__$1)){
var c__5565__auto___73563 = cljs.core.chunk_first(seq__73043_73562__$1);
var G__73564 = cljs.core.chunk_rest(seq__73043_73562__$1);
var G__73565 = c__5565__auto___73563;
var G__73566 = cljs.core.count(c__5565__auto___73563);
var G__73567 = (0);
seq__73043_73550 = G__73564;
chunk__73044_73551 = G__73565;
count__73045_73552 = G__73566;
i__73046_73553 = G__73567;
continue;
} else {
var vec__73057_73568 = cljs.core.first(seq__73043_73562__$1);
var k_73569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73057_73568,(0),null);
var v_73570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73057_73568,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_73569);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73569),v_73570);


var G__73574 = cljs.core.next(seq__73043_73562__$1);
var G__73575 = null;
var G__73576 = (0);
var G__73577 = (0);
seq__73043_73550 = G__73574;
chunk__73044_73551 = G__73575;
count__73045_73552 = G__73576;
i__73046_73553 = G__73577;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__73063 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73063,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73063,(1),null);
var seq__73066_73582 = cljs.core.seq(node_children);
var chunk__73068_73583 = null;
var count__73069_73584 = (0);
var i__73070_73585 = (0);
while(true){
if((i__73070_73585 < count__73069_73584)){
var child_struct_73586 = chunk__73068_73583.cljs$core$IIndexed$_nth$arity$2(null,i__73070_73585);
if((!((child_struct_73586 == null)))){
if(typeof child_struct_73586 === 'string'){
var text_73587 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73587),child_struct_73586].join(''));
} else {
var children_73588 = shadow.dom.svg_node(child_struct_73586);
if(cljs.core.seq_QMARK_(children_73588)){
var seq__73107_73589 = cljs.core.seq(children_73588);
var chunk__73109_73590 = null;
var count__73110_73591 = (0);
var i__73111_73592 = (0);
while(true){
if((i__73111_73592 < count__73110_73591)){
var child_73593 = chunk__73109_73590.cljs$core$IIndexed$_nth$arity$2(null,i__73111_73592);
if(cljs.core.truth_(child_73593)){
node.appendChild(child_73593);


var G__73594 = seq__73107_73589;
var G__73595 = chunk__73109_73590;
var G__73596 = count__73110_73591;
var G__73597 = (i__73111_73592 + (1));
seq__73107_73589 = G__73594;
chunk__73109_73590 = G__73595;
count__73110_73591 = G__73596;
i__73111_73592 = G__73597;
continue;
} else {
var G__73598 = seq__73107_73589;
var G__73599 = chunk__73109_73590;
var G__73600 = count__73110_73591;
var G__73601 = (i__73111_73592 + (1));
seq__73107_73589 = G__73598;
chunk__73109_73590 = G__73599;
count__73110_73591 = G__73600;
i__73111_73592 = G__73601;
continue;
}
} else {
var temp__5804__auto___73602 = cljs.core.seq(seq__73107_73589);
if(temp__5804__auto___73602){
var seq__73107_73603__$1 = temp__5804__auto___73602;
if(cljs.core.chunked_seq_QMARK_(seq__73107_73603__$1)){
var c__5565__auto___73604 = cljs.core.chunk_first(seq__73107_73603__$1);
var G__73605 = cljs.core.chunk_rest(seq__73107_73603__$1);
var G__73606 = c__5565__auto___73604;
var G__73607 = cljs.core.count(c__5565__auto___73604);
var G__73608 = (0);
seq__73107_73589 = G__73605;
chunk__73109_73590 = G__73606;
count__73110_73591 = G__73607;
i__73111_73592 = G__73608;
continue;
} else {
var child_73609 = cljs.core.first(seq__73107_73603__$1);
if(cljs.core.truth_(child_73609)){
node.appendChild(child_73609);


var G__73610 = cljs.core.next(seq__73107_73603__$1);
var G__73611 = null;
var G__73612 = (0);
var G__73613 = (0);
seq__73107_73589 = G__73610;
chunk__73109_73590 = G__73611;
count__73110_73591 = G__73612;
i__73111_73592 = G__73613;
continue;
} else {
var G__73614 = cljs.core.next(seq__73107_73603__$1);
var G__73615 = null;
var G__73616 = (0);
var G__73617 = (0);
seq__73107_73589 = G__73614;
chunk__73109_73590 = G__73615;
count__73110_73591 = G__73616;
i__73111_73592 = G__73617;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73588);
}
}


var G__73618 = seq__73066_73582;
var G__73619 = chunk__73068_73583;
var G__73620 = count__73069_73584;
var G__73621 = (i__73070_73585 + (1));
seq__73066_73582 = G__73618;
chunk__73068_73583 = G__73619;
count__73069_73584 = G__73620;
i__73070_73585 = G__73621;
continue;
} else {
var G__73622 = seq__73066_73582;
var G__73623 = chunk__73068_73583;
var G__73624 = count__73069_73584;
var G__73625 = (i__73070_73585 + (1));
seq__73066_73582 = G__73622;
chunk__73068_73583 = G__73623;
count__73069_73584 = G__73624;
i__73070_73585 = G__73625;
continue;
}
} else {
var temp__5804__auto___73626 = cljs.core.seq(seq__73066_73582);
if(temp__5804__auto___73626){
var seq__73066_73628__$1 = temp__5804__auto___73626;
if(cljs.core.chunked_seq_QMARK_(seq__73066_73628__$1)){
var c__5565__auto___73631 = cljs.core.chunk_first(seq__73066_73628__$1);
var G__73632 = cljs.core.chunk_rest(seq__73066_73628__$1);
var G__73633 = c__5565__auto___73631;
var G__73634 = cljs.core.count(c__5565__auto___73631);
var G__73635 = (0);
seq__73066_73582 = G__73632;
chunk__73068_73583 = G__73633;
count__73069_73584 = G__73634;
i__73070_73585 = G__73635;
continue;
} else {
var child_struct_73636 = cljs.core.first(seq__73066_73628__$1);
if((!((child_struct_73636 == null)))){
if(typeof child_struct_73636 === 'string'){
var text_73637 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73637),child_struct_73636].join(''));
} else {
var children_73638 = shadow.dom.svg_node(child_struct_73636);
if(cljs.core.seq_QMARK_(children_73638)){
var seq__73119_73639 = cljs.core.seq(children_73638);
var chunk__73121_73640 = null;
var count__73122_73641 = (0);
var i__73123_73642 = (0);
while(true){
if((i__73123_73642 < count__73122_73641)){
var child_73643 = chunk__73121_73640.cljs$core$IIndexed$_nth$arity$2(null,i__73123_73642);
if(cljs.core.truth_(child_73643)){
node.appendChild(child_73643);


var G__73644 = seq__73119_73639;
var G__73645 = chunk__73121_73640;
var G__73646 = count__73122_73641;
var G__73647 = (i__73123_73642 + (1));
seq__73119_73639 = G__73644;
chunk__73121_73640 = G__73645;
count__73122_73641 = G__73646;
i__73123_73642 = G__73647;
continue;
} else {
var G__73648 = seq__73119_73639;
var G__73649 = chunk__73121_73640;
var G__73650 = count__73122_73641;
var G__73651 = (i__73123_73642 + (1));
seq__73119_73639 = G__73648;
chunk__73121_73640 = G__73649;
count__73122_73641 = G__73650;
i__73123_73642 = G__73651;
continue;
}
} else {
var temp__5804__auto___73652__$1 = cljs.core.seq(seq__73119_73639);
if(temp__5804__auto___73652__$1){
var seq__73119_73653__$1 = temp__5804__auto___73652__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73119_73653__$1)){
var c__5565__auto___73654 = cljs.core.chunk_first(seq__73119_73653__$1);
var G__73655 = cljs.core.chunk_rest(seq__73119_73653__$1);
var G__73656 = c__5565__auto___73654;
var G__73657 = cljs.core.count(c__5565__auto___73654);
var G__73658 = (0);
seq__73119_73639 = G__73655;
chunk__73121_73640 = G__73656;
count__73122_73641 = G__73657;
i__73123_73642 = G__73658;
continue;
} else {
var child_73659 = cljs.core.first(seq__73119_73653__$1);
if(cljs.core.truth_(child_73659)){
node.appendChild(child_73659);


var G__73660 = cljs.core.next(seq__73119_73653__$1);
var G__73661 = null;
var G__73662 = (0);
var G__73663 = (0);
seq__73119_73639 = G__73660;
chunk__73121_73640 = G__73661;
count__73122_73641 = G__73662;
i__73123_73642 = G__73663;
continue;
} else {
var G__73664 = cljs.core.next(seq__73119_73653__$1);
var G__73665 = null;
var G__73666 = (0);
var G__73667 = (0);
seq__73119_73639 = G__73664;
chunk__73121_73640 = G__73665;
count__73122_73641 = G__73666;
i__73123_73642 = G__73667;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73638);
}
}


var G__73668 = cljs.core.next(seq__73066_73628__$1);
var G__73669 = null;
var G__73670 = (0);
var G__73671 = (0);
seq__73066_73582 = G__73668;
chunk__73068_73583 = G__73669;
count__73069_73584 = G__73670;
i__73070_73585 = G__73671;
continue;
} else {
var G__73672 = cljs.core.next(seq__73066_73628__$1);
var G__73673 = null;
var G__73674 = (0);
var G__73675 = (0);
seq__73066_73582 = G__73672;
chunk__73068_73583 = G__73673;
count__73069_73584 = G__73674;
i__73070_73585 = G__73675;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___73676 = arguments.length;
var i__5767__auto___73677 = (0);
while(true){
if((i__5767__auto___73677 < len__5766__auto___73676)){
args__5772__auto__.push((arguments[i__5767__auto___73677]));

var G__73678 = (i__5767__auto___73677 + (1));
i__5767__auto___73677 = G__73678;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq73136){
var G__73137 = cljs.core.first(seq73136);
var seq73136__$1 = cljs.core.next(seq73136);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73137,seq73136__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__73142 = arguments.length;
switch (G__73142) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__69582__auto___73682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__69583__auto__ = (function (){var switch__69377__auto__ = (function (state_73156){
var state_val_73157 = (state_73156[(1)]);
if((state_val_73157 === (1))){
var state_73156__$1 = state_73156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73156__$1,(2),once_or_cleanup);
} else {
if((state_val_73157 === (2))){
var inst_73153 = (state_73156[(2)]);
var inst_73154 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_73156__$1 = (function (){var statearr_73158 = state_73156;
(statearr_73158[(7)] = inst_73153);

return statearr_73158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73156__$1,inst_73154);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__69378__auto__ = null;
var shadow$dom$state_machine__69378__auto____0 = (function (){
var statearr_73159 = [null,null,null,null,null,null,null,null];
(statearr_73159[(0)] = shadow$dom$state_machine__69378__auto__);

(statearr_73159[(1)] = (1));

return statearr_73159;
});
var shadow$dom$state_machine__69378__auto____1 = (function (state_73156){
while(true){
var ret_value__69379__auto__ = (function (){try{while(true){
var result__69380__auto__ = switch__69377__auto__(state_73156);
if(cljs.core.keyword_identical_QMARK_(result__69380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__69380__auto__;
}
break;
}
}catch (e73160){if((e73160 instanceof Object)){
var ex__69381__auto__ = e73160;
var statearr_73161_73685 = state_73156;
(statearr_73161_73685[(5)] = ex__69381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__69379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73686 = state_73156;
state_73156 = G__73686;
continue;
} else {
return ret_value__69379__auto__;
}
break;
}
});
shadow$dom$state_machine__69378__auto__ = function(state_73156){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__69378__auto____0.call(this);
case 1:
return shadow$dom$state_machine__69378__auto____1.call(this,state_73156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__69378__auto____0;
shadow$dom$state_machine__69378__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__69378__auto____1;
return shadow$dom$state_machine__69378__auto__;
})()
})();
var state__69584__auto__ = (function (){var statearr_73162 = f__69583__auto__();
(statearr_73162[(6)] = c__69582__auto___73682);

return statearr_73162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__69584__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

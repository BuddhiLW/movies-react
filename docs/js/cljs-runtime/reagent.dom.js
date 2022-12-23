goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__75146 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__75147 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__75147);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__75151 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__75152 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__75152);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__75151);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__75146);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__75166 = arguments.length;
switch (G__75166) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__75170 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75170,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75170,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__75181_75221 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__75182_75222 = null;
var count__75183_75223 = (0);
var i__75184_75224 = (0);
while(true){
if((i__75184_75224 < count__75183_75223)){
var vec__75196_75226 = chunk__75182_75222.cljs$core$IIndexed$_nth$arity$2(null,i__75184_75224);
var container_75227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75196_75226,(0),null);
var comp_75228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75196_75226,(1),null);
reagent.dom.re_render_component(comp_75228,container_75227);


var G__75229 = seq__75181_75221;
var G__75230 = chunk__75182_75222;
var G__75231 = count__75183_75223;
var G__75232 = (i__75184_75224 + (1));
seq__75181_75221 = G__75229;
chunk__75182_75222 = G__75230;
count__75183_75223 = G__75231;
i__75184_75224 = G__75232;
continue;
} else {
var temp__5804__auto___75233 = cljs.core.seq(seq__75181_75221);
if(temp__5804__auto___75233){
var seq__75181_75234__$1 = temp__5804__auto___75233;
if(cljs.core.chunked_seq_QMARK_(seq__75181_75234__$1)){
var c__5565__auto___75235 = cljs.core.chunk_first(seq__75181_75234__$1);
var G__75236 = cljs.core.chunk_rest(seq__75181_75234__$1);
var G__75237 = c__5565__auto___75235;
var G__75238 = cljs.core.count(c__5565__auto___75235);
var G__75239 = (0);
seq__75181_75221 = G__75236;
chunk__75182_75222 = G__75237;
count__75183_75223 = G__75238;
i__75184_75224 = G__75239;
continue;
} else {
var vec__75204_75240 = cljs.core.first(seq__75181_75234__$1);
var container_75241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75204_75240,(0),null);
var comp_75242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75204_75240,(1),null);
reagent.dom.re_render_component(comp_75242,container_75241);


var G__75243 = cljs.core.next(seq__75181_75234__$1);
var G__75244 = null;
var G__75245 = (0);
var G__75246 = (0);
seq__75181_75221 = G__75243;
chunk__75182_75222 = G__75244;
count__75183_75223 = G__75245;
i__75184_75224 = G__75246;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

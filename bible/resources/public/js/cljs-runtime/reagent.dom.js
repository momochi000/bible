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
var _STAR_always_update_STAR__orig_val__12340 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12341 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12341);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__12342 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__12343 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__12343);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12342);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__12340);
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
var G__12345 = arguments.length;
switch (G__12345) {
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
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__12346 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12346,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12346,(1),null);
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

var seq__12349_12366 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__12350_12367 = null;
var count__12351_12368 = (0);
var i__12352_12369 = (0);
while(true){
if((i__12352_12369 < count__12351_12368)){
var vec__12359_12370 = chunk__12350_12367.cljs$core$IIndexed$_nth$arity$2(null,i__12352_12369);
var container_12371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359_12370,(0),null);
var comp_12372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359_12370,(1),null);
reagent.dom.re_render_component(comp_12372,container_12371);


var G__12373 = seq__12349_12366;
var G__12374 = chunk__12350_12367;
var G__12375 = count__12351_12368;
var G__12376 = (i__12352_12369 + (1));
seq__12349_12366 = G__12373;
chunk__12350_12367 = G__12374;
count__12351_12368 = G__12375;
i__12352_12369 = G__12376;
continue;
} else {
var temp__5823__auto___12377 = cljs.core.seq(seq__12349_12366);
if(temp__5823__auto___12377){
var seq__12349_12378__$1 = temp__5823__auto___12377;
if(cljs.core.chunked_seq_QMARK_(seq__12349_12378__$1)){
var c__5548__auto___12379 = cljs.core.chunk_first(seq__12349_12378__$1);
var G__12380 = cljs.core.chunk_rest(seq__12349_12378__$1);
var G__12381 = c__5548__auto___12379;
var G__12382 = cljs.core.count(c__5548__auto___12379);
var G__12383 = (0);
seq__12349_12366 = G__12380;
chunk__12350_12367 = G__12381;
count__12351_12368 = G__12382;
i__12352_12369 = G__12383;
continue;
} else {
var vec__12362_12384 = cljs.core.first(seq__12349_12378__$1);
var container_12385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362_12384,(0),null);
var comp_12386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12362_12384,(1),null);
reagent.dom.re_render_component(comp_12386,container_12385);


var G__12387 = cljs.core.next(seq__12349_12378__$1);
var G__12388 = null;
var G__12389 = (0);
var G__12390 = (0);
seq__12349_12366 = G__12387;
chunk__12350_12367 = G__12388;
count__12351_12368 = G__12389;
i__12352_12369 = G__12390;
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

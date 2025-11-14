goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_9957 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._header[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._header["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_9957(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_9958 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._has_body[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._has_body["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_9958(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_9959 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._body[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._body["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_9959(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9903 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9903["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9904 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9904["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9905 = temp__5821__auto____$2;
return (o9905["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9906 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9906["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9907 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9907["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9908 = temp__5821__auto____$2;
return (o9908["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9909 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9909["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9910 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9910["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9911 = temp__5821__auto____$2;
return (o9911["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9912 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9912["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9913 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9913["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9914 = temp__5821__auto____$2;
return (o9914["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9915 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9915["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9916 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9916["templating"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9917 = temp__5821__auto____$2;
return (o9917["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9918 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9918["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9919 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9919["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9920 = temp__5821__auto____$2;
return (o9920["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5821__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5821__auto__)){
var o9921 = temp__5821__auto__;
var temp__5821__auto____$1 = (o9921["formatters"]);
if(cljs.core.truth_(temp__5821__auto____$1)){
var o9922 = temp__5821__auto____$1;
var temp__5821__auto____$2 = (o9922["markup"]);
if(cljs.core.truth_(temp__5821__auto____$2)){
var o9923 = temp__5821__auto____$2;
return (o9923["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9961 = arguments.length;
var i__5750__auto___9962 = (0);
while(true){
if((i__5750__auto___9962 < len__5749__auto___9961)){
args__5755__auto__.push((arguments[i__5750__auto___9962]));

var G__9963 = (i__5750__auto___9962 + (1));
i__5750__auto___9962 = G__9963;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq9928){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9928));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9964 = arguments.length;
var i__5750__auto___9965 = (0);
while(true){
if((i__5750__auto___9965 < len__5749__auto___9964)){
args__5755__auto__.push((arguments[i__5750__auto___9965]));

var G__9966 = (i__5750__auto___9965 + (1));
i__5750__auto___9965 = G__9966;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq9929){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9929));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9967 = arguments.length;
var i__5750__auto___9968 = (0);
while(true){
if((i__5750__auto___9968 < len__5749__auto___9967)){
args__5755__auto__.push((arguments[i__5750__auto___9968]));

var G__9970 = (i__5750__auto___9968 + (1));
i__5750__auto___9968 = G__9970;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq9930){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9930));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9974 = arguments.length;
var i__5750__auto___9975 = (0);
while(true){
if((i__5750__auto___9975 < len__5749__auto___9974)){
args__5755__auto__.push((arguments[i__5750__auto___9975]));

var G__9976 = (i__5750__auto___9975 + (1));
i__5750__auto___9975 = G__9976;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq9932){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9932));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9977 = arguments.length;
var i__5750__auto___9978 = (0);
while(true){
if((i__5750__auto___9978 < len__5749__auto___9977)){
args__5755__auto__.push((arguments[i__5750__auto___9978]));

var G__9979 = (i__5750__auto___9978 + (1));
i__5750__auto___9978 = G__9979;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq9933){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9933));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9980 = arguments.length;
var i__5750__auto___9981 = (0);
while(true){
if((i__5750__auto___9981 < len__5749__auto___9980)){
args__5755__auto__.push((arguments[i__5750__auto___9981]));

var G__9982 = (i__5750__auto___9981 + (1));
i__5750__auto___9981 = G__9982;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq9934){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9934));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9983 = arguments.length;
var i__5750__auto___9984 = (0);
while(true){
if((i__5750__auto___9984 < len__5749__auto___9983)){
args__5755__auto__.push((arguments[i__5750__auto___9984]));

var G__9985 = (i__5750__auto___9984 + (1));
i__5750__auto___9984 = G__9985;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq9935){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9935));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9986 = arguments.length;
var i__5750__auto___9987 = (0);
while(true){
if((i__5750__auto___9987 < len__5749__auto___9986)){
args__5755__auto__.push((arguments[i__5750__auto___9987]));

var G__9988 = (i__5750__auto___9987 + (1));
i__5750__auto___9987 = G__9988;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__9939){
var vec__9940 = p__9939;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9940,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__9936_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__9936_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq9937){
var G__9938 = cljs.core.first(seq9937);
var seq9937__$1 = cljs.core.next(seq9937);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9938,seq9937__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__9943 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__9944 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__9945 = (function (){var G__9946 = new cljs.core.Keyword(null,"li","li",723558921);
var G__9947 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__9948 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__9946,G__9947,G__9948) : devtools.format.make_template_fn.call(null,G__9946,G__9947,G__9948));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__9943,G__9944,G__9945) : devtools.format.make_template_fn.call(null,G__9943,G__9944,G__9945));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9989 = arguments.length;
var i__5750__auto___9990 = (0);
while(true){
if((i__5750__auto___9990 < len__5749__auto___9989)){
args__5755__auto__.push((arguments[i__5750__auto___9990]));

var G__9991 = (i__5750__auto___9990 + (1));
i__5750__auto___9990 = G__9991;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq9949){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9949));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9992 = arguments.length;
var i__5750__auto___9993 = (0);
while(true){
if((i__5750__auto___9993 < len__5749__auto___9992)){
args__5755__auto__.push((arguments[i__5750__auto___9993]));

var G__9994 = (i__5750__auto___9993 + (1));
i__5750__auto___9993 = G__9994;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq9954){
var G__9955 = cljs.core.first(seq9954);
var seq9954__$1 = cljs.core.next(seq9954);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9955,seq9954__$1);
}));


//# sourceMappingURL=devtools.format.js.map

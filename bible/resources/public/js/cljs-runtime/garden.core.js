goog.provide('garden.core');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14438 = arguments.length;
var i__5750__auto___14439 = (0);
while(true){
if((i__5750__auto___14439 < len__5749__auto___14438)){
args__5755__auto__.push((arguments[i__5750__auto___14439]));

var G__14440 = (i__5750__auto___14439 + (1));
i__5750__auto___14439 = G__14440;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
}));

(garden.core.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.css.cljs$lang$applyTo = (function (seq14436){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14436));
}));

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14441 = arguments.length;
var i__5750__auto___14442 = (0);
while(true){
if((i__5750__auto___14442 < len__5749__auto___14441)){
args__5755__auto__.push((arguments[i__5750__auto___14442]));

var G__14443 = (i__5750__auto___14442 + (1));
i__5750__auto___14442 = G__14443;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
}));

(garden.core.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.core.style.cljs$lang$applyTo = (function (seq14437){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14437));
}));


//# sourceMappingURL=garden.core.js.map

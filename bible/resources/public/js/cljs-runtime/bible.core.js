goog.provide('bible.core');
if((typeof bible !== 'undefined') && (typeof bible.core !== 'undefined') && (typeof bible.core.app_state !== 'undefined')){
} else {
bible.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-book","current-book",931951540),"Genesis",new cljs.core.Keyword(null,"current-chapter","current-chapter",1339502985),(1),new cljs.core.Keyword(null,"current-verse","current-verse",580524240),null], null));
}
bible.core.header = (function bible$core$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Bible Reader"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A self-contained offline Bible"], null)], null);
});
bible.core.navigation = (function bible$core$navigation(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("Previous Chapter");
})], null),"\u2190 Previous"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-book","current-book",931951540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible.core.app_state)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-chapter","current-chapter",1339502985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(bible.core.app_state)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("Next Chapter");
})], null),"Next \u2192"], null)], null)], null);
});
bible.core.verse_display = (function bible$core$verse_display(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verse-container","div.verse-container",-17267405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sample verse text will go here..."], null)], null);
});
bible.core.root_component = (function bible$core$root_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#main-container","div#main-container",-1400327018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bible.core.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bible.core.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bible.core.verse_display], null)], null);
});
bible.core.mount_root = (function bible$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bible.core.root_component], null),document.getElementById("app"));
});
bible.core.init_BANG_ = (function bible$core$init_BANG_(){
bible.styles.inject_styles_BANG_();

return bible.core.mount_root();
});
bible.core.reload_BANG_ = (function bible$core$reload_BANG_(){
return bible.core.mount_root();
});

//# sourceMappingURL=bible.core.js.map

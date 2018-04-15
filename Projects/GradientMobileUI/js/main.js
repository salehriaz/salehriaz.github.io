(function($){
    
    var tlScreen1 = new TimelineMax();
    
//    TweenMax.to("#earth", 3, {x:500, scale:0.5, rotation:720, opacity: 0.5});
//    TweenLite.to("#astro", 3, { ease: Elastic.easeOut.config(1, 1), x: 500, scale: 0.5}); 
    
    tlScreen1
    .set(".text_max", {visibility: "visible"})
    .add("start")
    .set("#thunder", {fillOpacity: 1})
    .from("#thunder", 1.2, {y:-500, ease: Elastic.easeOut.config(1, 1.1)})
    .from(".text_max", 1.3, {opacity: 0, y:200, ease: Elastic.easeOut.config(1, 1.5)},"start")
    .set(".loader", {visibility: "visible"})
    .from(".loader", 3, {x:-375, ease: Power0.easeNone})
    .to("#logo", 0.5, {y:-575, scale: 0.5})
    .to(".text_max", 0.2, {opacity: 0}, "-=0.5")
    .add("nextScreen")
    .set([".options", ".signup-form", ".text-signup"], {visibility: "visible"})
    .to(".logo-txt", 2, {opacity: 1})
    .from(".text-signup", 1.5,{y:500, opacity: 0, ease: Elastic.easeOut.config(1, 1.5)}, "nextScreen")
    .from(".signup-form", 1.5,{y:500, opacity: 0, ease: Elastic.easeOut.config(1, 1.5)}, "nextScreen")
    .from([".float-left",".float-right"], 1.5,{y:35, opacity: 0, ease: Elastic.easeOut.config(1, 1.5)},"-=0.4");
    
    $("#createBtn").mousedown(function() {
        $(this).css("box-shadow","unset");
    });
    
    $("#createBtn").mouseup(function() {
        $(this).css("box-shadow","0px 5px 11px 0px #0000001a");
    });
    
    $("#restart").click(function() {
        $(".signup-form input").val("");
        tlScreen1.restart();
    });
    
})(jQuery);



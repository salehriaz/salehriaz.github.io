// hide body scroll when WIP overlay
var wipDisplay = $('.work-in-progress').css('display');
console.log(wipDisplay);

if (wipDisplay == "block") {
    $("body").css("overflow", "hidden");
}



//    options = {
//        "cursorOuter": "circle-basic",
//        "hoverEffect": "circle-move",
//        "hoverItemMove": false,
//        "defaultCursor": false,
//        "outerWidth": 30,
//        "outerHeight": 30
//    };
//    magicMouse(options);

function pageRedirect() {
    window.location.replace("playground.html");
}

$(".clickme").click(function () {
    $(".loader-overlay").css("transform", "translateX(100%)");

    setTimeout("pageRedirect()", 3400);
});

//    setTimeout(function() {
//        $('.social-div').css("overflow", "visible")
//    }, 2000);


//email copy
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

//turn off original click and add a new listener
$('a[href^=mailto]').click(function () {
    //        return false;

});

$('a[href^=mailto]').click(function () {
    var myemail = $('a[href^=mailto]').attr("title");
    console.log(myemail);
    copyToClipboard(myemail);
    //        $('.tooltip > .tooltip-inner').innerHTML("Email Copied!");
    setTimeout(function () {
        $('.tooltip > .tooltip-inner').attr("title", myemail);
    }, 2000);

});


//hover company
$(".introduction-link").hover(function () {
    console.log("company");
    $(".company-profile").css("visibility", "visible");
    //        $(".company-profile").css("transform", "translateY(0px)");
}, function () {
    $(".company-profile").css("visibility", "hidden");
    //        $(".company-profile").css("transform", "translateY(30px)");
});

$(".company-profile").hover(function () {
    $(".company-profile").css("visibility", "visible");
    //        $(".company-profile").css("transform", "translateY(0px)");
}, function () {
    $(".company-profile").css("visibility", "hidden");
    // $(".company-profile").css("transform", "translateY(30px)");
});
// hide all annotations
function hideAll() {
    var nameArray = ["#a", "#b", "#c", "#d", "#e", "#f"]
    for(var i = 0; i < nameArray.length; i++) {
        $(nameArray[i]).hide();
    }
}

function makeBreaks(num){
    var breaks = "";
    for( var i = 0; i < num; i++ ) {
        breaks += "<br>";
    }
    $("#breaks").html(breaks);
}

function showAnno(anno){
    hideAll();
    makeBreaks(parseInt($(anno).attr("breaks")));
    $(anno).show();
}

// when span in lyrics are clicked, hidfe all
$(document).ready(function(){
    $(".texta").click(function(){
        showAnno("#a");
    });
});

$(document).ready(function(){
    $(".textb").click(function(){
        showAnno("#b");
    });
});

$(document).ready(function(){
    $(".textc").click(function(){
        showAnno("#c");
    });
});

$(document).ready(function(){
    $(".textd").click(function(){
        showAnno("#d");
    });
});

$(document).ready(function(){
    $(".texte").click(function(){
        showAnno("#e");
    });
});

$(document).ready(function(){
    $(".textf").click(function(){
        showAnno("#f");
    });
});

$(document).ready(function(){
    hideAll();
});
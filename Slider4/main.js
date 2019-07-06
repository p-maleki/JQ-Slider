$(document).ready(function(){
$("#slider").mouseenter(function(){
    let d=setInterval(function(){
        showSlides(slideIndex+=1);
    }, 2000);
    $("#slider").mouseleave(function(){
       clearInterval(d);
    })
    $("#next").click(function(){
        clearInterval(d);
    });
    $("#prev").click(function(){
        clearInterval(d);
    });
});





let slideIndex=1;
showSlides(slideIndex);

$("#prev").click(function(){
showSlides(slideIndex-=1);
});

$("#next").click(function(){
showSlides(slideIndex+=1);
});


function showSlides(n) {
    let slideCount=$(".mySlides").length;
    if(n<1){slideIndex=slideCount;}
    if(n>slideCount){slideIndex=1;}

    let slide=$("#slider").find(".mySlides");
    $(".mySlides").css("display","none");
     $(slide[slideIndex-1]).css("display","block");
}

});


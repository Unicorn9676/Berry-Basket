$(document).ready(function () {
  $(".box").css("color", "red");

  $(".button").click(function () {
    $(".container").toggleClass("karthik");
  });

  $(".left-radio").click(function () {
  $(".box").toggleClass("blue");
   });

  $(".right-radio").click(function () {
  $(".box").toggleClass("red");
  });

  $(".second-button").click(function () {
    $(".box").eq(7).addClass("use");
     $(".box").eq(9).addClass("user");
     $(".box").parent().css("border","1px");
  });

  $(".drawer-title").click(function(){
    $(".opener").toggleClass("switch");

  });

  $(".radio-submit").click(function () {
    $(".spot-text").eq(0).toggleClass("spot-text-one");
    
  });

  $(".radio-submit").click(function () {
    $(".spot-text-img").eq(1).toggleClass("spot-text-two");
    
  });

  $("h1").click(function () {
    $(this).toggleClass("addso");
    
  });

  

});

$(window).on("load",function() {
// executes when complete page is fully loaded, including all frames, objects and images
alert("window is loaded");
});

$(document).ready(function () {
    $(".azure").click(function () {
        $(".spotlight-text").removeClass("change-color");
        $(".spotlight-text").toggleClass("change");
        

    });
    $(".yellow").click(function () {
        $(".spotlight-text").removeClass("change");
        $(".spotlight-text").toggleClass("change-color");
        
    })
    $(".drawer-title").click(function () {
        $(".drawer-content").toggleClass("switch");
    });

    // $(".four-blade-button").click(function () {
    //     $(".blade-four-rows").eq(0).toggleClass("position-change")
    // })
});
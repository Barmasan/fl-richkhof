// A $( document ).ready() block.
$( document ).ready(function() {
    let stages = new Object();
    stages.reg = $(".registration");
    stages.test = $(".test-no-media");
    stages.testMedia = $(".test-media");
    stages.table = $(".table-stage");
    stages.slider = $(".slider-wrapper");
    stages.slider.hide();

    $("#reg").on("click", function(){
        $(".stage").removeClass("active-stage");
        stages.reg.addClass("active-stage");
    });

    $("#test").on("click", function(){
        $(".stage").removeClass("active-stage");
        stages.test.addClass("active-stage");
    });

    $("#test-media").on("click", function(){
        $(".stage").removeClass("active-stage");
        stages.testMedia.addClass("active-stage");
    });

    $("#slider").on("click", function(){
        $(".stage").removeClass("active-stage");
        stages.slider.addClass("active-stage");
    });

    $("#table-stage").on("click", function(){
        $(".stage").removeClass("active-stage");
        stages.table.addClass("active-stage");
    });



    


});
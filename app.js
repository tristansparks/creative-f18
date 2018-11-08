$(document).ready(function () {

    var juliaIndex = 1;
    $("#slideshow > div:gt(0)").hide();

    $("#fwd").on("click", function () {
        if (juliaIndex < 4){
            $('#im_'+juliaIndex)
                .stop()
                .fadeOut(500);
            juliaIndex++;
            $('#im_'+juliaIndex)
                .stop()
                .fadeIn(500);
        }
    });
    
    $("#bwd").on("click", function () {
        if (juliaIndex > 1){
            $('#im_'+juliaIndex)
                .stop()
                .fadeOut(500);
            juliaIndex--;
            $('#im_'+juliaIndex)
                .stop()
                .fadeIn(500);
        }
    });
});

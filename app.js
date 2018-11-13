$(document).ready(function () {

    var juliaIndex = 1;
    var kIndex = 1;
    $("#slideshow > div:gt(0)").hide();
    $("#slideshow18 > div:gt(0)").hide();
    $("#fwd").on("click", function () {
        if (juliaIndex < 3){
            $('#im_'+juliaIndex)
                .stop()
                .fadeOut(500);
            juliaIndex++;
            $('#im_'+juliaIndex)
                .stop()
                .fadeIn(500);
        }
    });
    $("#fwd18").on("click", function () {
        if (kIndex < 2){
            $('#im18_'+kIndex)
                .stop()
                .fadeOut(500);
            kIndex++;
            $('#im18_'+kIndex)
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
    
    $("#bwd18").on("click", function () {
        if (kIndex > 1){
            $('#im18_'+kIndex)
                .stop()
                .fadeOut(500);
            kIndex--;
            $('#im18_'+kIndex)
                .stop()
                .fadeIn(500);
        }
    });

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    if ($(document).width() < 800) {
        console.log("whatup");
        var vid = document.getElementById("matt-video");
        vid.autoplay = false;
        vid.controls = true;
    }

    // document.getElementById("front-page-vid").addEventListener('loadedmetadata', function () {
    //     this.
    // })
});

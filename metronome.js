$(function(){
    var bpm = 120;
    //var speedMs = 60000 / bpm;
    var interval;
    var start = false;
    
    
    function click() {
        if (!start) {
            clearInterval(interval);
            return;
        }
        audio = new Audio();
        audio.src = "audio/click.mp3";
        audio.play();
    };
    
    $('.start').on('click', function(){
        if (!start) {
            start = true;
            interval = setInterval(click, 60000 / bpm);
        }
        else {
            start = false;
            click();
        };
    });    
    
    
    $('.preset').on('click', function() {
        var sp = $(this).text();
        bpm = sp;
        $('#speed').text(sp);    
    });   
    
});
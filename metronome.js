var start = false;
var bpm = 60;
var speedMs = 60000;
var interval;
var st = $('.start');
$(function(){    
    $('.start').on('click', function(){
        
        if (st.text() === 'START') {
            st.text('STOP');
        }
        else {
            st.text('START');
        }
        buttonPress(bpm, start);
    });    
    
    
    $('.preset').on('click', function() {
        var sp = $(this).text();
        st.text('STOP');
        clearInterval(interval);
        buttonPress(sp, false);
        
        $('#speed').text(sp);
    });   

    function click() {
        if (!start) {
            clearInterval(interval);
            return;
        }
        audio = new Audio();
        audio.src = "audio/click.mp3";
        audio.play();
    };    
    
    function buttonPress(bpmX, startX) {
        if (!startX) {
            startX = true;
            interval = setInterval(click, speedMs / bpmX);
        }
        else {
            startX = false;
        };
        start = startX;
    }
});


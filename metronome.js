var start = false;      //default state - off
var speedMs = 60000;    //milliseconds in one second
var interval;           //Interval id for clearInterval
var st = $('.start');   //START button
var presetSpeed = 60;   //preset bpm (60 as default)

$(function(){    
    
    //START button
    
    $('.start').on('click', function(){
        
        if (st.text() === 'START') {
            st.text('STOP');
        }
        else {
            st.text('START');
            clearInterval(interval);
        }
        buttonPress(presetSpeed, start);
    });    
    
    //Plus and minus
    
    $('#plus').on('click', function() {
        clearInterval(interval);
        presetSpeed++;
        $('#speed').text(presetSpeed);
        if (start) {
            buttonPress(presetSpeed, false);
        }
    });
    
    $('#minus').on('click', function() {
        clearInterval(interval);
        if (presetSpeed > 0) {
            presetSpeed--;
        }
        else {
            return;
        }
        $('#speed').text(presetSpeed);
        if (start) {
            buttonPress(presetSpeed, false);
        }
    });
    
    
    //Preset buttons
    
    $('.preset').on('click', function() {
        presetSpeed = $(this).text();
        clearInterval(interval);
        if (start) {
            buttonPress(presetSpeed, false);
        }
        $('#speed').text(presetSpeed);
    });   
    
    //Metronome sound function
    
    function click() {
        if (!start) {
            clearInterval(interval);
            return;
        }
        audio = new Audio();
        audio.src = "audio/click.mp3";
        audio.play();
    };    
    
    //Function for switching on/off
    
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


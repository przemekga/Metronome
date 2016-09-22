// var start = false;      //default state - off
// var speedMs = 60000;    //milliseconds in one second
// var interval;           //Interval id for clearInterval
// var st = $('.start');   //START button
// var presetSpeed = 60;   //preset bpm (60 as default)

$(function(){
    var presetSpeed = 60;
    var config = {
        settings: {
            start: false,      //default state - off
            speedMs: 60000,    //milliseconds in one second
            interval: undefined //Interval id for clearInterval
        },

        selectors: {
            st : $('.start'),  //START button
            plus: $('#plus'),
            minus: $('#minus'),
            speed: $('#speed'),
            preset: $('.preset')
        }
    }
    //START button
    
    config.selectors.st.on('click', function(){
        
        if (config.selectors.st.text() === 'START') {
            config.selectors.st.text('STOP');
        }
        else {
            config.selectors.st.text('START');
            clearInterval(config.settings.interval);
        }
        buttonPress(presetSpeed, config.settings.start);
    });    
    
    //Plus and minus

    config.selectors.plus.on('click', function() {
        clearInterval(config.settings.interval);
        presetSpeed++;
        config.selectors.speed.text(presetSpeed);
        if (start) {
            buttonPress(presetSpeed, false);
        }
    });

    config.selectors.minus.on('click', function() {
        clearInterval(config.settings.interval);
        if (presetSpeed > 0) {
            presetSpeed--;
        }
        else {
            return;
        }
        config.selectors.speed.text(presetSpeed);
        if (start) {
            buttonPress(presetSpeed, false);
        }
    });
    
    
    //Preset buttons

    config.selectors.preset.on('click', function() {
        presetSpeed = $(this).text();
        clearInterval(config.settings.interval);
        if (start) {
            buttonPress(presetSpeed, false);
        }
        config.selectors.speed.text(presetSpeed);
    });   
    
    //Metronome sound function
    
    function click() {
        if (!start) {
            clearInterval(config.settings.interval);
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
            config.settings.interval = setInterval(click, speedMs / bpmX);
        }
        else {
            startX = false;
        };
        start = startX;
    }
});


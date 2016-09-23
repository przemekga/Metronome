var metronome = function(){
    var config = {
        settings: {
            start: false,      //default state - off
            speedMs: 60000,    //milliseconds in one second
            interval: undefined, //Interval id for clearInterval
            presetSpeed: 60
        },

        selectors: {
            st : $('.start'),  //START button
            plus: $('#plus'),
            minus: $('#minus'),
            speed: $('#speed'),
            preset: $('.preset')
        }
    };

    function init() {

        //START button
        config.selectors.st.on('click', function () {

            if (config.selectors.st.text() === 'START') {
                config.selectors.st.text('STOP');
            }
            else {
                config.selectors.st.text('START');
                clearInterval(config.settings.interval);
            }
            buttonPress(config.settings.presetSpeed, config.settings.start);
        });

        //Plus and minus

        config.selectors.plus.on('click', function () {
            clearInterval(config.settings.interval);
            config.settings.presetSpeed++;
            config.selectors.speed.text(config.settings.presetSpeed);
            if (config.settings.start) {
                buttonPress(config.settings.presetSpeed, false);
            }
        });

        config.selectors.minus.on('click', function () {
            clearInterval(config.settings.interval);
            if (config.settings.presetSpeed > 0) {
                config.settings.presetSpeed--;
            }
            else {
                return;
            }
            config.selectors.speed.text(config.settings.presetSpeed);
            if (config.settings.start) {
                buttonPress(config.settings.presetSpeed, false);
            }
        });


        //Preset buttons

        config.selectors.preset.on('click', function () {
            config.settings.presetSpeed = $(this).text();
            clearInterval(config.settings.interval);
            if (config.settings.start) {
                buttonPress(config.settings.presetSpeed, false);
            }
            config.selectors.speed.text(config.settings.presetSpeed);
        });

        //Metronome sound function

        function click() {
            if (!config.settings.start) {
                clearInterval(config.settings.interval);
                return;
            }
            audio = new Audio();
            audio.src = "audio/click.mp3";
            audio.play();
        }

        //Function for switching on/off

        function buttonPress(bpmX, startX) {
            if (!startX) {
                startX = true;
                config.settings.interval = setInterval(click, config.settings.speedMs / bpmX);
            }
            else {
                startX = false;
            }

            config.settings.start = startX;
        }

    }
    return {
        init:init,
        config:config
    };
}();
metronome.init();


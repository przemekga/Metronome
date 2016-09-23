$(function(){
    // var minutes = $('#minutes').val(),
    //     seconds = $('#seconds').val(),
    var    addTimer = $('#addTimer'),
        timerList = $('#timerList');

    addTimer.on('click', function(){
        var minutes = $('#minutes').val(),
            seconds = $('#seconds').val();
        if(seconds === "" && minutes === "") {
            return
        } else if (parseInt(seconds) > 59) {
            return
        }else if (seconds === "" && minutes.length > 0){
            seconds = '00';
        } else if (minutes === "" && seconds.length > 0) {
            minutes = '00';
        }
        timerList.append('<li>' + minutes + ':' + seconds + '</li>')
    })
})
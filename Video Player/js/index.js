// controls variables
var play = document.getElementById('play');
var mute = document.getElementById('mute');
var replay = document.getElementById('replay');

// video element
var video = document.querySelector('video');

// Control Methods
var controls = {
    togglePlay: function () {
        if (video.paused) {
            video.play();
            play.innerHTML = '<i class="fa fa-pause"></i>'
        } else {
            video.pause();
            play.innerHTML = '<i class="fa fa-play"></i>';
        }
    },
    toggleSound: function() {
        if (video.muted === false) {
            video.muted = true;
            mute.textContent = 'Unmute';
        } else {
            video.muted = false;
            mute.textContent = 'Mute';
        }
    },
    pressReplay: function() {
        video.pause();
        video.currentTime = 0;
        video.play();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    }
};

//Setup Event Listeners 

var listeners = {
    togglePlay: function() {
        play.addEventListener('click',function(){
            controls.togglePlay();
        }, false);
    },
    toggleSound: function() {
        mute.addEventListener('click', function(){
            controls.toggleSound();
        },false);
    },
    runReplay: function() {
        replay.addEventListener('click', function(){
            controls.pressReplay();
        }, false);
    },
    runEvents: function() {
        this.togglePlay();
        this.toggleSound();
        this.runReplay();
    }
}

//Run events
listeners.runEvents();
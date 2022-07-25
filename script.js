var video = document.querySelector('videos');
var btn = document.getElementById('play-pause');

function togglePlayPause(){
    if(video.paused){
        btn.className='pause';
        video.play();
    }
    else{
        btn.className='play';
        video.pause();
    }
}

btn.onclick = function(){
    togglePlayPause();
}
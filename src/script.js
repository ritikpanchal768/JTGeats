// video functionality
var video = document.querySelector('video');
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

// add to cart modal
var open = document.getElementById('open');
var modal_container = document.getElementById('modal-container');
var close = document.getElementById('close');

open.addEventListener('click',()=>{
    modal_container.classList.add('show');
});

close.addEventListener('click',()=>{
    modal_container.classList.remove('show');
});

// Request a dish Modal
var opened = document.getElementById('opened');
var modal_request = document.getElementById('modal-request-a-dish');
var cancel = document.getElementById('cancel');
var submit=document.getElementById('submit')

opened.addEventListener('click',()=>{
    modal_request.classList.add('showed');
    document.documentElement.scrollTop = 0;
});

cancel.addEventListener('click',()=>{
    modal_request.classList.remove('showed');
});
submit.addEventListener('click',()=>{
    modal_request.classList.remove('showed');
});
// carousel
$(document).ready(function(){
    $('.carousel-item ').slick({
        accessibility:true,
        adaptiveHeight:true,
        centerMode:false,
        cssEase:'ease',
        slidesToShow: 3,
        prevArrow:'<img class="slick-prev" src="src/Assignment Assest/Assets/icons/play.svg" style="height : 70px; width : 70px; left : -78px" />',
        nextArrow:'<img class="slick-next" src="src/Assignment Assest/Assets/icons/play.svg" style="height : 70px; width : 70px; right : -32px" />'
    });
  });
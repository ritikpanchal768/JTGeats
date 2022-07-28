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
 let slide = 3 ;
 console.log(slide);
//  window.addEventListener('resize', (event) => {
//     // slide = window.innerWidth <1262 ? 2 : 3;
//     // console.log(slide,innerWidth);
//     if(window.innerWidth <1262)
//     $('.carousel-item ').slick('slickSetOption', 'slidesToShow', 2);
//     else
//     $('.carousel-item ').slick('slickSetOption', 'slidesToShow', 3);
//  });
// if($(window).width()<1262){
//     slide=2
// }
$(document).ready(function(){
    // $('.carousel-item ').slick({
    //     accessibility:true,
    //     adaptiveHeight:true,
    //     centerMode:false,
    //     cssEase:'ease',
    //     // slidesToShow: slide,
    //     slidesToShow: 3,
    //     prevArrow:'<img class="slick-prev" src="src/Assignment Assest/Assets/icons/Arrow.svg" />',
    //     nextArrow:'<img class="slick-next" src="src/Assignment Assest/Assets/icons/Arrow.svg" />',
    //     // hov_prevArrow:'<img class="hav_slick-prev" src="src/Assignment Assest/Assets/icons/play.svg" />',
    //     // hov_prevArrow:'<img class="hav_slick-prev" src="src/Assignment Assest/Assets/icons/play.svg" />'
    // });
    $('.carousel-item').slick({
        accessibility:true,
        adaptiveHeight:true,
        infinite: true,
        centerMode:false,
        cssEase:'ease',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow:'<img class="slick-prev carousel-btn" src="src/Assignment Assest/Assets/icons/Arrow.svg" data-hover="src/Assignment Assest/Assets/icons/play.svg" data-src="src/Assignment Assest/Assets/icons/Arrow.svg"/>',
        nextArrow:'<img class="slick-next carousel-btn" src="src/Assignment Assest/Assets/icons/Arrow.svg" data-hover="src/Assignment Assest/Assets/icons/play.svg" data-src="src/Assignment Assest/Assets/icons/Arrow.svg"/>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1008,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      $(".carousel-btn").mouseover(function () {
        $(this).attr('src', $(this).data("hover"));
      }).mouseout(function () {
        $(this).attr('src', $(this).data("src"));
      });
  });

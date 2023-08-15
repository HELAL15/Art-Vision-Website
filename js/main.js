

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})


// Select all videos, play buttons, and pause buttons within the .owl-carousel
// let videos = document.querySelectorAll('.owl-carousel .item video');
// let playButtons = document.querySelectorAll('.owl-carousel .item .play');
// let pauseButtons = document.querySelectorAll('.owl-carousel .item .pause');
// let posters = document.querySelectorAll('owl-carousel .item .poster img');

// playButtons.forEach((play, index) => {
//   play.addEventListener('click', () => {
//     videos[index].play();
//     play.style.display = 'none';
//     pauseButtons[index].style.display = 'block';
//     posters[index].style.display = 'none';
//   });
// });

// pauseButtons.forEach((pause, index) => {
//   pause.addEventListener('click', () => {
//     videos[index].pause();
//     pause.style.display = 'none';
//     playButtons[index].style.display = 'block';
//     posters[index].style.display = 'block';
//   });
// });

let videos = document.querySelectorAll('.owl-carousel .item video');
let playButtons = document.querySelectorAll('.owl-carousel .item .play');
let pauseButtons = document.querySelectorAll('.owl-carousel .item .pause');
let posters = document.querySelectorAll('.owl-carousel .item .poster img');

playButtons.forEach((play, index) => {
  play.addEventListener('click', () => {
    videos[index].play();
    play.style.display = 'none';
    pauseButtons[index].style.display = 'block';
    posters[index].style.display = 'none';
  });
});

pauseButtons.forEach((pause, index) => {
  pause.addEventListener('click', () => {
    videos[index].pause();
    pause.style.display = 'none';
    playButtons[index].style.display = 'block';
    posters[index].style.display = 'block';
  });
});




$('.owl-carousel.partners').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout:3000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
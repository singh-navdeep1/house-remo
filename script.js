
       

    $(document).ready(function () {
        var $overlay = $('<div class="overlay"></div>');
  
        $('body').append($overlay);
  
        $('#open').click(function () {
          $('.overlay').fadeIn(300);
  
         $('.slidein').fadeIn(300)
        });
  
        $('.overlay, .close').click(function () {
  
          $('.overlay').fadeOut(300);
          $('.slidein').fadeOut(300)
        });
      })

      const slides = document.querySelectorAll('.testimonial .slide');

const slidesWrap = document.querySelector('.testimonial .slides-wrap');

var temp = Array.from(slides);

var slideHeights = temp.map((slide)=>{
  return slide.offsetHeight;
});



var slideMaxHeight = Math.max.apply(null, slideHeights);
slidesWrap.style.height = slideMaxHeight+20 + 'px';

var currentSlide = 0;


slides.forEach((slide, index)=>{
  slide.style.transform = `translateX(${100 * index}%)`;
               });

setInterval(()=>{
  next();
}, 4000);

function next(){
  currentSlide++;
  
  currentSlide = currentSlide == slides.length ? 0:currentSlide;
  slides.forEach((slide, index)=>{
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
  
}


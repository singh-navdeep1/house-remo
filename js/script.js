


let popup = document.querySelector(".backdrop");

function openPopup(){
    popup.classList.add("open-popup")
}
function closebutton(){
    popup.classList.remove("open-popup")
}

$('#toggle').click(function(e) {
    e.stopPropagation();
    $(".navlinks").toggleClass('mobile-menu')
  });
  $('body').click(function(e) {
    if ($('.navlinks').hasClass('mobile-menu')) {
      $(".navlinks").toggleClass('mobile-menu')
    }
  })


  document.querySelector(".right-arrow").addEventListener('click',nextslide);
  document.querySelector(".left-arrow").addEventListener('click',prevslide);
  
  let index=0;
  let slide= document.querySelectorAll('.carousel-item');
  
  function nextslide(){
  if(index < slide.length -1){
                  index++
  }
  else{
      index=0
  }
  
  console.log(index) 
      for(i=0; i<slide.length ; i++){
        slide[i].classList.add('hide'); 
        slide[i].classList.remove('show');   
      }
  
      slide[index].classList.add('show');
      slide[index].classList.remove('hide');
  }
  function prevslide(){
      if(index > 0){
          index--;
      }
      else{
          index= slide.length -1;
      }
      for(i=0; i<slide.length ; i++){
      slide[i].classList.add('hide'); 
      slide[i].classList.remove('show');   
    }
  
    slide[index].classList.add('show');
    slide[index].classList.remove('hide');
  }

  let popupimg = document.querySelector(".backdrop-image");
    
  function openPopup2(){
      popupimg.classList.add("open-popup-img")
  }
  function closebutton2(){
      popupimg.classList.remove("open-popup-img")
  }


  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
  $('.responsive').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
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
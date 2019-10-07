// Nav Bar Responsiveness
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openResponsiveMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// function addActiveClass() {
//   var x = document.querySelector(".link");
//     x.className += "active";
// }


  function closeResponsiveMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "responsive") {
      x.className = "topnav";
    } else {
      x.className = "topnav";
    }
  }      
  //   } else {
  //     x.className = "responsive";
  //   }
  // }


// Add active class to the current link (highlight it)
var header = document.getElementById("myTopNav");
var links = document.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}




// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// Multiple Slide Shows

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides1");
//   var dots = document.getElementsByClassName("dot1");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }





//Page Transitions

$(document).ready(function () {

  $('.slide-section').click(function (e) {
  
      var linkHref = $(this).attr('href');
  
      $('html, body').animate({
          scrollTop: $(linkHref).offset().top - 50
      }, 1500);
  
      e.preventDefault();
  });
  });
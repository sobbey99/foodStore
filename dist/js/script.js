(function () {
    'use strict';
    // this function is strict...
 }());
// START PRELOADER 
let 
    bodiSite = document.querySelector(".bodyNoScroll"),
    preloader = document.getElementById("page-preloader"),
    header = document.getElementById("header"),
    images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    perc_display = document.getElementById("loader-percentage");



for( var i = 0; i < images_total_count; i++) 
{
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;

}

function image_loaded() {
    images_loaded_count++;

    perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + "%";

    if( images_loaded_count >= images_total_count) {
        setTimeout(function(){
            if( !preloader.classList.contains("preloader-done")) {
                preloader.classList.add("preloader-done");
                bodiSite.classList.remove("bodyNoScroll");
                header.classList.remove("header-off");
            }
        }, 1000);
    }
    
}

// END PRELOADER

//HEADER LANGUAGE DROPDOWN - START
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.header-dropdown__btn')) {
  
      var dropdowns = document.getElementsByClassName("header-dropdown__content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
//HEADER LANGUAGE DROPDOWN - END
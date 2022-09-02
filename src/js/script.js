(function () {
    'use strict';
    // this function is strict...
 }());
// START PRELOADER 
let 
    bodiSite = document.querySelector("body"),
    htmlSite = document.querySelector('html'),
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
                htmlSite.classList.remove("bodyNoScroll");
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
  };{
  
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


//HAMBURGER OPEN-CLOSE - START
let hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.header-mobileMenu'),
  full = document.querySelector('.header-mobile__full'),
  closeMobMenu = document.querySelector('.header-mobile__close'),
  bodiOfSite = document.querySelector('body');
  htmlOfSite = document.querySelector('html');


hamburger.addEventListener('click', function(e){
  hamburger.classList.add("hamburger_active");
  menu.classList.add('header-mobileMenu_active');
  full.classList.add('active');
  bodiOfSite.classList.add('noMoreScroll');
  htmlOfSite.classList.add('noMoreScroll');
});

// Close the backside menu if the user clicks outside of it
// full.addEventListener('click', (e) =>{
//   if(e.target === full){

//     full.classList.remove('active');
//     menu.classList.remove('header-mobileMenu_active');

//   }
// });

// Close the backside menu if the user clicks on X
closeMobMenu.addEventListener('click', (e) => {
    full.classList.remove('active');
    menu.classList.remove('header-mobileMenu_active');
    bodiOfSite.classList.remove('noMoreScroll');
    htmlOfSite.classList.remove('noMoreScroll');
});
//HAMBURGER OPEN-CLOSE - END

if ( bodiOfSite.classList.contains('bodyCart') ) {
  let leftSideCatalogMenu = document.querySelector('.production-left'),
  leftSideCatalogArrow = document.querySelector('.menu-arrow');
  

  leftSideCatalogArrow.addEventListener('click', (e) => {
    leftSideCatalogMenu.classList.toggle('production-left_activated');
    leftSideCatalogArrow.classList.toggle('menu-arrow_activated');
  });
}
//Catalog LeftSideMenu Expanation



//Login Modal On/Off
let loginMenuClick = document.querySelector('#loginMenuClick'),
    loginMenuModal = document.querySelector('.login-modal'),
    loginMenuClose = document.querySelector('.login-close'),
    loginMobileMenuClick = document.querySelector('#loginMobileMenuClick');


    loginMenuClick.addEventListener('click', function() {
      loginMenuModal.classList.add('login-modal_active');
      bodiOfSite.classList.add('noMoreScroll');
      htmlOfSite.classList.add('noMoreScroll');
    });

    loginMobileMenuClick.addEventListener('click', function() {
      loginMenuModal.classList.add('login-modal_active');
      bodiOfSite.classList.add('noMoreScroll');
      htmlOfSite.classList.add('noMoreScroll');
    });

    loginMenuClose.addEventListener('click', function() {
      loginMenuModal.classList.remove('login-modal_active');
      bodiOfSite.classList.remove('noMoreScroll');
      htmlOfSite.classList.remove('noMoreScroll');
    });

//Register Modal On/Off
let registerMenuClick = document.querySelector('#registerMenuClick'),
registerMenuModal = document.querySelector('.register-modal'),
registerMenuClose = document.querySelector('.register-close'),
registerMobileMenuClick = document.querySelector('#registerMobileMenuClick');

registerMenuClick.addEventListener('click', function() {
  registerMenuModal.classList.add('register-modal_active');
  bodiOfSite.classList.add('noMoreScroll');
  htmlOfSite.classList.add('noMoreScroll');
});

registerMenuClose.addEventListener('click', function() {
  registerMenuModal.classList.remove('register-modal_active');
  bodiOfSite.classList.remove('noMoreScroll');
  htmlOfSite.classList.remove('noMoreScroll');
});

registerMobileMenuClick.addEventListener('click', function() {
  registerMenuModal.classList.add('register-modal_active');
  bodiOfSite.classList.add('noMoreScroll');
  htmlOfSite.classList.add('noMoreScroll');
});

// Search modal On/Off
let searchMenuClick = document.querySelector('#searchMenuClick'),
    searchModal = document.querySelector('.search-modal'),
    searchModalClose = document.querySelector('.search-close');

searchMenuClick.addEventListener('click', function() {
  searchModal.classList.add('search-modal_active');
  bodiOfSite.classList.add('noMoreScroll');
  htmlOfSite.classList.add('noMoreScroll');
});

searchModalClose.addEventListener('click', function() {
  searchModal.classList.remove('search-modal_active');
  bodiOfSite.classList.remove('noMoreScroll');
  htmlOfSite.classList.remove('noMoreScroll');
});
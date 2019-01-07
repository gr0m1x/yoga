$(document).ready(function(){

    $('.about_us_slider').slick({

    });
    
    $('.elements_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 9999,
            settings: 'unslick',
        }, {
          breakpoint: 990,
          settings: 'slick',
          
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            
          }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            
          }
    ]
    });

    $('.blog_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.blog_slider_next',
        fade: true,  
        responsive: [{
          
        breakpoint: 580,
        settings: {
          arrows: true,
          fade: false,
        }
        
      }
  ]
    });
    
    $('.blog_slider_next').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.blog_slider',
        focusOnSelect: true,
        responsive: [{
          
        breakpoint: 580,
        settings: 'unslick',
        
      }
  ]
        
    });


    

    // slow scroll menu
    $("#menu").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

            toggleMenu();
            
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $("#id_logo").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;
            
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // site nav
    var siteHeader = $('body')

    $(window).scroll( function(){
        if (window.pageYOffset > '1' ) {
            siteHeader.addClass('navigation-fixed');
        } else {
            siteHeader.removeClass('navigation-fixed');
        }
    })


     // hamburger
    var hamburgerButton = $('.hamburger');
    var siteNav = $('.site-nav_list');

    hamburgerButton.click(toggleMenu);

    function toggleMenu() {
        hamburgerButton.toggleClass('is-active');
        siteNav.toggleClass('site-nav_list__visible');
    }

    
// Form

$(document).ready(function(){
  
    var 
        $nameError = "<span class='field-error-text'>Name not entered</span>",
        $phoneError = "<span class='field-error-text'>Phone is incorrect</span>",
        $selectError = "<span class='field-error-text'>Nothing selected</span>",
        
        $username = $('#user-name'),
        $phone = $('#user-phone'),
        $select = $('#select-class'),
        
        $phoneRE = /^\d[\d\(\)\ -]{2,14}\d$/; //4-14 symbols, first and last - number
    
    $("#submit-btn").on("click", function (e) {
      e.preventDefault();
      
      if($username.val() === "") {
        if($username.siblings('.field-error-text').length === 0) {
          $username.parent().append($nameError);
          $username.addClass('field-error');
        }
      } else {
        $username.siblings(".field-error-text").detach();
        $username.removeClass('field-error');
      };
         
      if(!$phoneRE.test($phone.val())) {
        if($phone.siblings('.field-error-text').length === 0) {
          $phone.parent().append($phoneError);
          $phone.addClass('field-error');
        }
      } else {
        $phone.siblings(".field-error-text").detach();
        $phone.removeClass('field-error');
      };
      
      if($select.val() === "") {
        if($select.siblings('.field-error-text').length === 0) {
          $select.parent().append($selectError);
          $select.addClass('field-error');
        }
      } else {
        $select.siblings(".field-error-text").detach();
        $select.removeClass('field-error');
      };
      
      if($('form .field-error').length === 0) {
        // console.log('Success!');
        $('form').submit();
      }
      
    });
    
    $username.focus(function(){
      if($username.siblings('.field-error-text').length !== 0) {
        $username.siblings(".field-error-text").detach();
        $username.removeClass('field-error');
      }
    });
    
    $phone.focus(function(){
      if($phone.siblings('.field-error-text').length !== 0) {
        $phone.siblings(".field-error-text").detach();
        $phone.removeClass('field-error');
      }
    });
    
    $select.change(function(){
      if($select.siblings('.field-error-text').length !== 0) {
        $select.siblings(".field-error-text").detach();
        $select.removeClass('field-error');
      }
    });
    
  });


});


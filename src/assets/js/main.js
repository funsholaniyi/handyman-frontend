jQuery(document).ready(function ($) {

  $('[data-toggle="tooltip"]').tooltip();

  //primary navigation slide-in effect
  // Toggles the top-navs fixed and scroll state.

  var headerHeight = $('.mainHeader').height();
  $(window).on('scroll', {
      previousTop: 0
    },
    function () {
      var currentTop = $(window).scrollTop();
      //check if user is scrolling up
      if (currentTop < this.previousTop) {
        //if scrolling up...
        if (currentTop > 0 && $('.mainHeader').hasClass('is-fixed')) {
          $('.mainHeader').addClass('is-visible');
        } else {
          $('.mainHeader').removeClass('is-visible is-fixed');
        }
      } else {
        //if scrolling down...
        $('.mainHeader').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.mainHeader').hasClass('is-fixed')) $('.mainHeader').addClass('is-fixed');
      }
      this.previousTop = currentTop;
    });

  //open/close primary navigation
  $('.primary-nav-trigger').on('click', function (event) {
    event.stopPropagation();
    $('.menu-icon').toggleClass('is-clicked');
    $('.mainHeader').toggleClass('menu-is-open');
    $('.mainHeader').toggleClass('is-active');
    $('body').toggleClass('nav_active');
    $('body').toggleClass('scroll_lock');
  });

  //open search widget
  $('.btn_search_trigger > a').on('click', function () {
    event.stopPropagation();
    $('.navbar_search_form').addClass('has_value');
    $('.mainHeader').addClass('show_search');
  });

  $('.navbar_search_reset').on('click', function () {
    event.stopPropagation();
    if ($('.mainHeader').hasClass('show_search')) {
      $('.mainHeader').removeClass('show_search');
    }
  });

  $('.form-control').on('input', function () {
    var $input_field = $(this).closest('.funky_form');
    if (this.value) {
      $input_field.addClass('not_empty');
    } else {
      $input_field.removeClass('not_empty');
    }
  });

  $('.navbar_search_input').on('input', function () {
    var parent_container = $(this).closest('.navbar_search_form');

    if (this.value) {
      parent_container.addClass('has_value');
    } else if (!($('.mainHeader').hasClass('show_search'))) {
      parent_container.removeClass('has_value');
    }
  });

  var sidebar_nav = $('.cm_page_sidebar'),
    sidebarTrigger = $('.primary-nav-trigger');

  //open/close primary navigation
  sidebarTrigger.on('click', function (event) {
    event.preventDefault();
    $([sidebar_nav, sidebarTrigger]).toggleClass('nav_active');
  });

  // Show the user account widget
  $('body').on('click', '.info_toggle', function (event) {
    var parent_container = $(this).closest('.cm_user_info');
    event.preventDefault();
    event.stopPropagation();
    parent_container.addClass('widget_open');
  });

  //open/close sidbar menu panel
  $('body').on('click', '.close_dialog', function (event) {
    event.stopPropagation();
    $('.cm_user_info').removeClass('widget_open');
  });

  $(document).on('click', function () {
    var parent_container = $('.cm_user_info');
    if (parent_container.hasClass('widget_open')) {
      parent_container.removeClass('widget_open');
    }
  });

  /*Custom Selector*/
  var selector = $(".cst_selector"),
    target_container = $('.custom_selector');

  selector.on('click', function () {
    if ($(this).attr("checked"), true) {
      $(this).parents(".custom_selector").find(".selector_item").removeClass('selected');
      $(this).parents(".selector_item").addClass("selected");
    } else {
      $(this).parents(".selector_item").removeClass('selected');
    }
  });

});

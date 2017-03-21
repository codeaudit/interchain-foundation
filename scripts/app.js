$(document).ready(function() {
  'use strict'
  $('#cover').click(function() {
    $('html, body').animate({
      scrollTop: $('#first-section').offset().top
    }, 1000)
  })
});

// Sidebar collapse
$(document).ready(function () {
  $('#sidebar-collapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

// Scrollspy
$('body').scrollspy({ target: '.nav-menu' })

// Scroll to top
const mybutton = document.getElementById('scroll-to-top');

window.onscroll = () => scrollCheck();

const scrollCheck = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.location.hash = '';
};

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
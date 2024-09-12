var top1 = $('#home').offset().top;
var top2 = $('#portfolio').offset().top;
var top3 = $('#skills').offset().top;
var top4 = $('#timeline').offset().top;
var top5 = $('#contact').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('#a-home').css('color', '#218172');
    $('#a-portfolio').css('color', '#000');
    $('#a-skills').css('color', '#000');
    $('#a-timeline').css('color', '#000');
    $('#a-contact').css('color', '#000');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('#a-home').css('color', '#000');
    $('#a-portfolio').css('color', '#218172');
    $('#a-skills').css('color', '#000');
    $('#a-timeline').css('color', '#000');
    $('#a-contact').css('color', '#000');
  } else if (scrollPos >= top3 && scrollPos < top4) {
    $('#a-home').css('color', '#000');
    $('#a-portfolio').css('color', '#000');
    $('#a-skills').css('color', '#218172');
    $('#a-timeline').css('color', '#000');
    $('#a-contact').css('color', '#000');
  } else if (scrollPos >= top4 && scrollPos < top5) {
    $('#a-home').css('color', '#000');
    $('#a-portfolio').css('color', '#000');
    $('#a-skills').css('color', '#000');
    $('#a-timeline').css('color', '#218172');
    $('#a-contact').css('color', '#000');
  }
});

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    $('#a-home').css('color', '#000');
    $('#a-portfolio').css('color', '#000');
    $('#a-skills').css('color', '#000');
    $('#a-timeline').css('color', '#000');
    $('#a-contact').css('color', '#218172');
  }
};
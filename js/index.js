
console.log("Your index.js file is loaded correctly!");

$(document).ready(function (){
  $("#arrowHero").click(function (){
      $('html, body').animate({
          scrollTop: $("#topIntro").offset().top
      }, 800);
  $("#arrowHero").hide(100);       
  });
});



$(document).ready(function (){
  $("#arrowIntro").click(function (){
      $('html, body').animate({
          scrollTop: $("#arrowIntro").offset().top
      }, 800);
  $("#arrowIntro").hide(1000);
  });
});
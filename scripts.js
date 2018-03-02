$(document).ready(function()
{

let option = $('.picker').val();
console.log(option);

$('.subButton').on("click", function(e) {
  $('.box').removeClass("woah comeInStyle");
  $('.box').addClass("woah wowzors");
})

});

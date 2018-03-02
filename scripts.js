function testAnim(x) {
  $('.box').removeClass().addClass('box' + ' woah ' + x, function(){
    //$(this).removeClass();
  });
};


$(document).ready(function()
{



  $('.subButton').click(function(e){
        e.preventDefault();
        var anim = $('.picker').val();
        testAnim(anim);
      });

      $('.picker').change(function(){
        var anim = $(this).val();
        testAnim(anim);
      });
    });



// let option = $('.picker').val();
// console.log(option);
//
// $('.subButton').on("click", function(e) {
//   $('.box').removeClass("woah comeInStyle");
//   $('.box').addClass("woah wowzors");
// })

// });

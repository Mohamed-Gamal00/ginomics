
$(document).ready(function()
{
$("#link3").click(function(){
    $("#bton1").show()
});
});

$(document).ready(function()
                 {
   $("#bton1").click(function()
                 {
       $("#text_box").slideToggle()
   });
});


$(document).ready(function()
                 {
   $(".local_img").click(function()
                 {
       $(".Form_Box1").slideToggle(1000)
   });
});

$(document).ready(function()
                 {
   $(".local_img2").click(function()
                 {
       $(".Form_Box2").slideToggle(1000)
   });
});

$(document).ready(function()
                 {
   $("#local_link").click(function()
                 {
                    var div = $(".local_img");  
                    div.animate({height: 0}, "slow");
                    div.animate({width: 0}, "slow");
                    div.animate({height: 80}, "slow");
                    div.animate({width: 250}, "slow");
   });
});

$(document).ready(function()
                 {
   $("#global_link").click(function()
                 {
                    var div = $(".local_img2");  
                    div.animate({height: 0}, "slow");
                    div.animate({width: 0}, "slow");
                    div.animate({height: 80}, "slow");
                    div.animate({width: 250}, "slow");
   });
});

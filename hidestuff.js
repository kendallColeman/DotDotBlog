$(document).ready(function(){
          
        $(".Label1").hide();
        $(".text").hide();
        $("#text").hide();

       $(".square").hover(function(){
            
             $(".Label1").show( //switch with rand
             $(this).addClass('.fadeIn').show);
             $(".text").show();
        });

});

$(document).ready(function(){
          
        $(".Label1").hide();
        $(".Label2").hide();
        $(".Label3").hide();
        $(".text").hide();
        $("#text").hide();

       $(".square1").hover(function(){
            
             $(".Label1").show( //switch with rand
             $(this).addClass('.slideInUp').show);
             $(".text").show();
        });
    $(".square2").hover(function(){
            
             $(".Label2").show( //switch with rand
             $(this).addClass('.slideInUp').show);
             $(".text").show();
        });
        $(".square3").hover(function(){
            
             $(".Label3").show( //switch with rand
             $(this).addClass('.slideInUp').show);
             $(".text").show();
        });

});



var user_array = []; var arr = ["red", "green", "blue", "yellow"]; var check_array = []; var level=0; var check_var; var user_var;
var started = false;

function onload(){
  $("body").on("keydown", function(){

    if (!started){
       $("h1").text("Level" + level);
       game();
       started = true;
    }
  });
}



 function game(){
        
        user_array = [];
        level++;
        $("h1").text("Level " + level);

        var random = Math.floor(Math.random() * 4);
        
        
         check_var = arr[random];
        
         check_array.push(check_var);

         $("#" + check_var).fadeIn(100).fadeOut(100).fadeIn(100);
         playSound(check_var);
  }
      
        $(".btn").on("click", function(event){
        
         user_var = $(this).attr("id");
         clicked_effect(user_var);
         playSound(user_var);
        
        user_array.push(user_var);
        var indexOfLastElement = user_array.length - 1;

       checking(indexOfLastElement);

       })







       
       function checking(current_level){
       if (user_array[current_level] === check_array[current_level]){
        console.log("success");
             if (user_array.length === check_array.length){
              setTimeout(game, 1000);
             }
        }
       
       
       else{
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("pressed");
        setTimeout(function(){
          $("body").removeClass("pressed");
        }, 200)
        $("h1").text("Game over, press any key to restart");
        startOver();


      }}

        
       function startOver(){
         level = 0;
         check_array = [];
         started = false;
      }

        function clicked_effect(clicked_button){
          
          $("." + clicked_button).addClass("pressed");
          setTimeout(function(){
            $("." + clicked_button).removeClass("pressed");
          }, 100);
        }

        function playSound(sound){
          var audio = new Audio( "sounds/" + sound + ".mp3");
          audio.play();
      }
        
 
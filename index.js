
// Checking if all fields are filled: 

document.getElementById("submit").addEventListener("click", function(event){
  
    if(document.querySelector('form').checkValidity()){
        event.preventDefault();
        main();
        console.log("hello! from before main !");
      }else{
        console.log("this is from prevent form submission !");
        event.preventDefault();
        document.getElementById("hidden").style.visibility= "visible";
        document.querySelector(".alertDiv").style.height= "190px";
        document.getElementById("p").innerHTML="Fill in all fields please!";
      }
})

// The function that will be called when the user click on the submit button:

function main(){

//Declaring the variables, and assign them to the form inputs:

const Fname = document.getElementById("Fname");
const Sname = document.getElementById("Sname");



//Capitalizing input's values to be stored in one form:

var Fname_value = Fname.value;
var Fname_first_char = Fname_value.slice(0,1);
var Fname_first_char_upper_case = Fname_first_char.toUpperCase();
var Fname_restChars = Fname_value.slice(1);
var Fname_restChars_lower_case = Fname_restChars.toLowerCase();
Cap_Fname = Fname_first_char_upper_case + Fname_restChars_lower_case;


var Sname_value = Sname.value;
var Sname_first_char = Sname_value.slice(0,1);
var Sname_first_char_upper_case = Sname_first_char.toUpperCase();
var Sname_restChars = Sname_value.slice(1);
var Sname_restChars_lower_case = Sname_restChars.toLowerCase();
Cap_Sname = Sname_first_char_upper_case + Sname_restChars_lower_case;




//Declaring an array to store the data and assigning the capitalized names to an object:

var lovers1, lovers2, loversArray, score;


var newCouple = {lover : Cap_Fname, crush: Cap_Sname, Score:score}; 

lovers1 = {lover: "Hi", crush:"kamal", Score: 100, j: 20};
lovers2 = {lover: "Hell", crush:"kama", Score: 80, j:30};





//Checking if the array is arleady in the localStorage:

if ("loversArray" in localStorage){
   console.log(loversArray);

}else{

    loversArray = [lovers1, lovers2];

    localStorage.setItem("loversArray", JSON.stringify(loversArray));

}
 

var data = localStorage.getItem("loversArray");
loversArray = JSON.parse(data);




// Checking if the object is arleady in the array or not:

     var finalArray = loversArray.filter(myFunctio);

     if  (finalArray.length == 0){
        score = calculate_love_score();
        console.log("this is the zero length array, which calculate new score, which is:" + score);
        newCouple.Score = score; 
        loversArray.push(newCouple);
        localStorage.setItem("loversArray", JSON.stringify(loversArray));
        return lover_message(score);
     }
     else{
        var finalObject = finalArray[0];
        score = finalObject.Score;
        return lover_message(score); 
     } 

  
 

function myFunctio (object){
    if (object.lover  === Cap_Fname&&  object.crush === Cap_Sname  || object.crush === Cap_Fname && object.lover ===   Cap_Sname){
        score = object.Score;
        return true;
    }
    else{
        return false;
    }}


}


// Calculating the user's score: 

function calculate_love_score(){

    var n = Math.random();
    n = Math.floor(n * 100) + 1;

    return n;
}

// Sending a message to the user depending on their score:

function lover_message (score){
   
   if (score > 90){
       document.getElementById("hidden").style.visibility= "visible" ;
       document.getElementById("p").innerHTML= "Your score is "+score+ "%!✨ This is incredible! \n Your love is a true love! ✨💖";
   }
   else if (score > 70){
    document.getElementById("hidden").style.visibility =  "visible" ;
    document.getElementById("p").innerHTML= "Your score is "+score+ "%!\n Keep going!\n You are good together!❤️‍🔥";
   }
   else if (score > 50){
    document.getElementById("hidden").style.visibility = "visible";
    document.getElementById("p").innerHTML= "Your score is "+score+ "%!, You still have a chance!\nヾ(≧▽≦*)o";
   }
   else if (score < 50 && score > 35){
    document.getElementById("hidden").style.visibility = "visible";
    document.getElementById("p").innerHTML= "Your score is "+score+ "%, Maybe it's one sided love?";
   }
   else {
    document.getElementById("hidden").style.visibility = "visible";
    document.getElementById("p").innerHTML= "Your score is " + score + "%, Sorry but... There is no love between you guys 💔";
   }
}



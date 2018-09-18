var number = 10;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;


    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
function check(){
var q1 = document.quiz.q1.value;
var q2 = document.quiz.q2.value;
var q3 = document.quiz.q3.value;
var q4 = document.quiz.q4.value;
var q5 = document.quiz.q5.value;
var q6 = document.quiz.q6.value;
var q7 = document.quiz.q7.value;
var q8 = document.quiz.q8.value;
var correct = 0;

  if(q1=="b"){
      correct++;
    }
    if(q2=="a"){
        correct++;
      }
      if(q3=="c"){
        correct++;
      }
      if(q4=="d"){
        correct++;
      }
      if(q5=="a"){
        correct++;

      }
      if(q6=="b"){
        correct++;
      }
      if(q7=="a"){
        correct++;
      }
      if(q8=="d"){
        correct++;
      }
      var messages = ["Great job!", "That's just okay", "You really need to do better"]
      var range;
      if(corect<1){
          range = 2;
      }
      if(correct > 0 && correct < 3){
          score = 1;
      }
      if(correct > 2){
        score = 0;
      }
 document.getElementById("message").innerHTML = messages [range];
 document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
      




 
   
    }
  


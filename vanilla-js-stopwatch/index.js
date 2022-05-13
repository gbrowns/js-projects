
(function(){   
    window.addEventListener("load", (e) =>{
    
        console.log("window loaded")

        //define variables
        let seconds = 00;
        let tens = 00;
        let appendSeconds = document.getElementById('sec');
        let appendTens = document.getElementById('tens')
        let startBtn = document.querySelector('#start'); 
        let stopBtn = document.querySelector('#stop');
        let resetBtn = document.querySelector('#reset'); 
        let Interval; //control variable

        console.log(startBtn, stopBtn, resetBtn)

        //start button event
        startBtn.addEventListener("click", function(){

            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        })

        //stop button evnt
        stopBtn.addEventListener('click', function(){

            clearInterval(Interval);
        })

        //reset button event
        resetBtn.addEventListener('click', function(){
            clearInterval(Interval);

            tens = "00";
            seconds = "00"
           
            appendTens.innerHTML = tens; //error here
            appendSeconds.innerHTML = seconds;
        })


        //timer function
        function startTimer(){
            tens++; //increament tens variable

            try{

                //check for conditions
                //timer count below ten
                if (tens <= 9){
                    console.log(typeof tens);//debug
                    appendTens.innerHTML ="0" + String(tens); //error here (null property)
                    console.log(`Tens < 9 (after) ${tens}`); //debug
                }

                //timer count above ten
                if (tens > 9){
                    console.log(typeof tens);//debug
                    appendTens.innerHTML = String(tens); //error here
                    console.log(`Tens < 9 (after) ${tens}`);//debug
                }

                if (tens > 99){
                    console.log("Begin seconds");

                    console.log(typeof tens);//debug
                    seconds++;
                    appendSeconds.innerHTML = "0" + seconds;
                    tens = 0;
                    console.log(typeof tens);//debug
                    appendTens.innerHTML = "0" + String(tens);
                    console.log(`Tens > 99 (after) ${tens}`);//debug
                }

                if (seconds > 9){
                    appendSeconds.innerHTML = seconds;
                }

            }catch(e){
                console.log(e);
            }


        }
    })

 })();

/*     window.onload = function () {

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("sec");
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var Interval;

  buttonStart.onclick = function () {

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };


  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };



  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

  }


}; */

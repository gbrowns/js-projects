//declare variables that grab elements from inner HTML

/**grab the time elements */
let hour = document.querySelector(".val1");
let minute = document.querySelector(".val2");
let second = document.querySelector(".val3");

/**grab the profile elements */
let weather = document.querySelector(".img");
let profile = document.querySelector(".alert1");
let msg = document.querySelector(".alert2");
let user = "Brown"
let body = document.querySelector(".bdy");

//function defination

  function watch() {
     //declare local variables
     let date = new Date();
     let h = date.getHours();
     let m = date.getMinutes();
     let s = date.getSeconds();
     let year = date.getFullYear();
     let month = date.getMonth();
     let today = date.getDate();
     let day = date.getDay();

     //set the days of the week in a switch loop
     switch (day) {
          case 0:
               day = "Sunday";
               break;
          case 1:
               day = "Monday";
          case 2:
               day = "Tuesday";
               break;
          case 3:
               day = "Wednesday";
               break;
          case 4:
               day = "Thursday";
               break;
          case 5:
               day = "Friday"
               break;
          case 6:
               day = "Saturday";
               break;
     }

     //setting image greetings abd today date

     if (h < 12){
          weather.style.backgroundColor = "blue"
          profile.innerHTML = `Goodmorning  ${user}`
         
     }
     else if ( h >= 12 && h < 15 && m <=59){
          weather.innerHTML = "noon"
          profile.innerHTML = `Good Afternoon ${user}`
     }
     else if(h >= 15 && h < 20 && m <=59){
          weather.innerHTML = "evening"
          profile.innerHTML = `Good Evening ${user}`
     }
     else if ( h >= 20 && h <= 23 && m <=59){
          weather.innerHTML = "night"
          profile.innerHTML = `Good Night ${user}`
      return false;  
     }


     msg.innerHTML = `Today is </br>${day}, ${today}/ ${month}/ ${year}`
     hour.innerHTML = h;
     minute.innerHTML = m 
     second.innerHTML = s


    

     return true;   
}
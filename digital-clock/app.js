//declare variables that grab elements from inner HTML

/**grab the time elements */
let hour = document.querySelector(".val1");
let minute = document.querySelector(".val2");
let second = document.querySelector(".val3");

/**grab the profile elements */
let weather = document.querySelector(".forecast");
let description = document.querySelector(".desc");
let profile = document.querySelector(".greet-alert");
let msg = document.querySelector(".date-alert");
let user = "Brown"
let remind = document.querySelector(".remind");

//create image elements
//image 1
var img1 = document.createElement("img");
img1.setAttribute("src","/images/morning.png")
//img1.style.height = "1cm";
img1.style.width = "2.5cm";
//image 2
var img2 = document.createElement("img");
img2.setAttribute("src","/images/noon.png")
//img2.style.height = "1cm";
img2.style.width = "2.5cm";
//image 3
var img3 = document.createElement("img");
img3.setAttribute("src","/images/evening1.png")
//img3.style.height = "1cm";
img3.style.width = "2.5cm";
//image 4
var img4 = document.createElement("img");
img4.setAttribute("src","/images/night1.jpg")
//img4.style.height = "1cm";
img4.style.width = "2.5cm";





//add eventListener to the document object
document.addEventListener('DOMContentLoaded', watch);

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


      //setting image for forecast
      if (h <  12){
          //code
          weather.appendChild(img1);
          description.innerHTML = "Morning";
     }
     else if(h >= 12 && h < 16 && m <=59) {
          //code
          weather.appendChild(img2);
          description.innerHTML = "Noon";
     }
     else if(h >= 16 && h < 19 && m <=59){
          //code
          weather.appendChild(img3);
          description.innerHTML = "Evening";
     }
     else if(h >= 19 && h < 24 && m <=59){
          //code
          weather.appendChild(img4);
          description.innerHTML = "Night";
     }

     //set greeting for the user
     if (h < 12){
         
          profile.innerHTML = `Goodmorning  ${user}`
         
     }
     else if ( h >= 12 && h < 16 ){
         
          profile.innerHTML = `Good Afternoon ${user}`
     }
     else if(h >= 16 && h < 21){

          profile.innerHTML = `Good Evening ${user}`
     }
     else if ( h >= 20 && h < 24){
     
          profile.innerHTML = `Good Night ${user}`
      
     }

     //set reminder
     setTimeout(() =>{
          if (h >= 9 && h < 12 && m <=30){
               //code
               remind.innerHTML = " Time to take Breakfast!!"
          }
          else if(h >= 13 && h < 15 ){
               //code
               remind.innerHTML = " Time to take lunch!!"
          }
          else if(h >= 20 && h < 23 && m <=30){
               //code
               remind.innerHTML = " Time to take Dinner!!"
          }
          else if (h >= 20){
               remind.innerHTML = " Time to sleep," + user;
          }
     },3600);
     

     //padd the hour minute and second with leading zero
     h = ("0" + h).slice(-2);
     m = ("0" + m).slice(-2);
     s = ("0" + s).slice(-2);


     msg.innerHTML = `Today is </br>${day}, ${today}/ ${month}/ ${year}`
     hour.innerHTML = h;
     minute.innerHTML = m 
     second.innerHTML = s

     //method for dynamic time
     var t = setTimeout(watch,500);

    
}


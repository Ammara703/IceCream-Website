// ###################### TIMER ###################
let countDate= new Date("April 16, 2023 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDate - now;
    let days = Math.floor(distance/ (1000*60*60*24));
    let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance% (1000*60*60*24))/(1000*60));
    let seconds = Math.floor((distance% (1000*60*60*24))/(1000));

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
},1000);


// ###################### SUBSCRIBTION ###################
let msgEL = document.getElementById("msg")
let winEL = document.getElementById("win")
let flavours =['Chocolate' , 'Mango' , 'Strawberry', 'Banana', 'Tutifruti']
let randomflavour= flavours[Math.floor(Math.random()*flavours.length)]
function prize()
{
    let emailEL = document.getElementById("email").value
    if(!emailEL)
    {
        msgEL.innerHTML=`<p class='sub-para'>Please enter your mailing address.</p>`
    }
    else
    {
        winEL.innerHTML=`<p class='paragraph'><br><br>Congratulations! You've won a scoop of our delicious <span class='gradient'>${randomflavour} </span> ice cream! <br>Check your email <span class='gradient'>${emailEL}</span> for instructions on how to claim your prize.</p>`
    }
}




window.addEventListener('load', () =>{
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


//Resizing

canvas.height= window.innerHeight; 
canvas.width= window.innerWidth;


//let startDate= new Date();
//let endDate = new Date();
//let clock= function(){
  //  let btn= document.querySelector('sat'),
  //  startTime= new Date();

   // if(btn){
     //   btn.addEventListener('click', function(){
       //     let miliseconds = new Date() -startTime;
       //     console.log(miliseconds/1000+ "seconds.")

     //   });
  //  }
//}

//setInterval(sitTime(), 1000);
//function sitTime(){
    //var start= new Date();
    //var inH = start.getHours();
   // var inM= start.getMinutes(); 
   // var inS= start.getSeconds();
   // var now= new Date().getTime();
   // var current= now- start;
  //  var seconds= Math.floor((current % (1000 * 60 * 60)) / (1000 * 60));
   // var minutes= Math.floor((current % (1000 * 60)) / 1000);
   // document.getElementById('timerL1.sat').innerHTML = inM + ":" + inS;
  //  document.getElementById('timerL1.sat').innerText = inM + ":" + inS;
  ////  document.getElementById('timerL1.sat').textContent = inM + ":" + inS;
//}


//L1
var seconds=0;
var minutes=0;
var hour=0;
var sitTimer = document.getElementById('timerL1');
function sitTime(){
    seconds += 1;
    
    if(seconds == 60){
        seconds=0;
        minutes += 1;
    }
    if(seconds < 10){
        sitTimer.innerText=  minutes + ":0"+ seconds;
    }else{
   sitTimer.innerText=  minutes + ":"+ seconds;}
   if(minutes == 60){
        minutes=0;
        hour +=1;
   }
   if(hour >=1 ){
    sitTimer.innerText= hour+ ":" + minutes + ":"+ seconds;
   }
}
var cancel= setInterval(sitTime, 1000);
var button= document.getElementsByClassName("L1");
var timer= document.getElementById("timerL1");
L1.onclick = function(){
 if(L1.className !="sat"){
     if(seconds >0 || minutes > 0){
         seconds=0;
         minutes=0;
          }
     L1.className= "sat";
     timerL1.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(0, 100, 200, 125);
     
     
     
 }
 else{
     L1.className= "L1";
     timerL1.className="timerL1";
     seconds=0;
     mintues=0;
     ctx.fillStyle= "green";
    ctx.fillRect(0, 100, 200, 125);
 }
}

//L2

var secondsL2=0;
var minutesL2=0;
var hourL2=0;
var sitTimerL2 = document.getElementById('timerL2');
function sitTimeL2(){
    secondsL2 += 1;
    
    if(secondsL2 == 60){
        secondsL2=0;
        minutesL2 += 1;
    }
    if(secondsL2 < 10){
        sitTimerL2.innerText=  minutesL2 + ":0"+ secondsL2;
    }else{
   sitTimerL2.innerText=  minutesL2 + ":"+ secondsL2;}
   if(minutesL2 == 60){
        minutesL2=0;
        hourL2 +=1;
   }
   if(hourL2 >=1 ){
    sitTimerL2.innerText= hourL2+ ":" + minutesL2 + ":"+ secondsL2;
   }
}
var cancel= setInterval(sitTimeL2, 1000);
var button= document.getElementsByClassName("L2");
var timer= document.getElementById("timerL2");
L2.onclick = function(){
 if(L2.className !="sat"){
     if(secondsL2 >0 || minutesL2 > 0){
         secondsL2=0;
         minutesL2=0;
          }
     L2.className= "sat";
     timerL2.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(0, 325, 200, 125);
 }
 else{
     L2.className= "L2";
     timerL2.className="timerL2";
     secondsL2=0;
     mintuesL2=0;
     ctx.fillStyle= "green";
    ctx.fillRect(0, 325, 200, 125);
 }
}

//L3
var secondsL3=0;
var minutesL3=0;
var hourL3=0;
var sitTimerL3 = document.getElementById('timerL3');
function sitTimeL3(){
    secondsL3 += 1;
    
    if(secondsL3 == 60){
        secondsL3=0;
        minutesL3 += 1;
    }
    if(secondsL3 < 10){
        sitTimerL3.innerText=  minutesL3 + ":0"+ secondsL3;
    }else{
   sitTimerL3.innerText=  minutesL3 + ":"+ secondsL3;}
   if(minutesL3 == 60){
        minutesL3=0;
        hourL3 +=1;
   }
   if(hourL3 >=1 ){
    sitTimerL3.innerText= hourL3+ ":" + minutesL3 + ":"+ secondsL3;
   }
}
var cancel= setInterval(sitTimeL3, 1000);
var button= document.getElementsByClassName("L3");
var timer= document.getElementById("timerL3");
L3.onclick = function(){
 if(L3.className !="sat"){
     if(secondsL3 >0 || minutesL3 > 0){
         secondsL3=0;
         minutesL3=0;
          }
     L3.className= "sat";
     timerL3.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(0, 550, 200, 125);
     
     
     
 }
 else{
     L3.className= "L3";
     timerL3.className="timerL3";
     secondsL3=0;
     mintuesL3=0;
     ctx.fillStyle= "green";
    ctx.fillRect(0, 550, 200, 125);
 }
}
//M1
var secondsM1=0;
var minutesM1=0;
var hourM1=0;
var sitTimerM1 = document.getElementById('timerM1');
function sitTimeM1(){
    secondsM1 += 1;
    
    if(secondsM1 == 60){
        secondsM1=0;
        minutesM1 += 1;
    }
    if(secondsM1 < 10){
        sitTimerM1.innerText=  minutesM1 + ":0"+ secondsM1;
    }else{
   sitTimerM1.innerText=  minutesM1 + ":"+ secondsM1;}
   if(minutesM1 == 60){
        minutesM1=0;
        hourM1 +=1;
   }
   if(hourM1 >=1 ){
    sitTimerM1.innerText= hourM1+ ":" + minutesM1 + ":"+ secondsM1;
   }
}
var cancel= setInterval(sitTimeM1, 1000);
var button= document.getElementsByClassName("M1");
var timer= document.getElementById("timerM1");
M1.onclick = function(){
 if(M1.className !="sat"){
     if(secondsM1 >0 || minutesM1 > 0){
         secondsM1=0;
         minutesM1=0;
          }
          M1.className= "sat";
     timerM1.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(350, 450, 125, 125);
     
     
     
 }
 else{
    M1.className= "M1";
     timerM1.className="timerM1";
     secondsM1=0;
     mintuesM1=0;
     ctx.fillStyle= "green";
    ctx.fillRect(350, 450, 125, 125);
 }
}


//M2
var secondsM2=0;
var minutesM2=0;
var hourM2=0;
var sitTimerM2 = document.getElementById('timerM2');
function sitTimeM2(){
    secondsM2 += 1;
    
    if(secondsM2 == 60){
        secondsM2=0;
        minutesM2 += 1;
    }
    if(secondsM2 < 10){
        sitTimerM2.innerText=  minutesM2 + ":0"+ secondsM2;
    }else{
   sitTimerM2.innerText=  minutesM2 + ":"+ secondsM2;}
   if(minutesM2 == 60){
        minutesM2=0;
        hourM2 +=1;
   }
   if(hourM2 >=1 ){
    sitTimerM2.innerText= hourM2+ ":" + minutesM2 + ":"+ secondsM2;
   }
}
var cancel= setInterval(sitTimeM2, 1000);
var button= document.getElementsByClassName("M2");
var timer= document.getElementById("timerM2");
M2.onclick = function(){
 if(M2.className !="sat"){
     if(secondsM2 >0 || minutesM2 > 0){
         secondsM2=0;
         minutesM2=0;
          }
          M2.className= "sat";
     timerM2.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(500, 200, 125, 125);
     
     
     
 }
 else{
    M2.className= "M2";
     timerM2.className="timerM2";
     secondsM2=0;
     mintuesM2=0;
     ctx.fillStyle= "green";
    ctx.fillRect(500, 200, 125, 125);
 }
}

//M3
var secondsM3=0;
var minutesM3=0;
var hourM3=0;
var sitTimerM3 = document.getElementById('timerM3');
function sitTimeM3(){
    secondsM3 += 1;
    
    if(secondsM3 == 60){
        secondsM3=0;
        minutesM3 += 1;
    }
    if(secondsM3 < 10){
        sitTimerM3.innerText=  minutesM3 + ":0"+ secondsM3;
    }else{
   sitTimerM3.innerText=  minutesM3 + ":"+ secondsM3;}
   if(minutesM3 == 60){
        minutesM3=0;
        hourM3 +=1;
   }
   if(hourM3 >=1 ){
    sitTimerM3.innerText= hourM3+ ":" + minutesM3 + ":"+ secondsM3;
   }
}
var cancel= setInterval(sitTimeM3, 1000);
var button= document.getElementsByClassName("M3");
var timer= document.getElementById("timerM3");
M3.onclick = function(){
 if(M3.className !="sat"){
     if(secondsM3 >0 || minutesM1 > 0){
         secondsM3=0;
         minutesM3=0;
          }
          M3.className= "sat";
     timerM3.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(650, 450, 125, 125);
     
     
     
 }
 else{
    M3.className= "M3";
     timerM3.className="timerM3";
     secondsM3=0;
     mintuesM3=0;
     ctx.fillStyle= "green";
    ctx.fillRect(650, 450, 125, 125);
 }
}

//M4
var secondsM4=0;
var minutesM4=0;
var hourM4=0;
var sitTimerM4 = document.getElementById('timerM4');
function sitTimeM4(){
    secondsM4 += 1;
    
    if(secondsM4 == 60){
        secondsM4=0;
        minutesM4 += 1;
    }
    if(secondsM4 < 10){
        sitTimerM4.innerText=  minutesM4 + ":0"+ secondsM4;
    }else{
   sitTimerM4.innerText=  minutesM4 + ":"+ secondsM4;}
   if(minutesM4 == 60){
        minutesM4=0;
        hourM4 +=1;
   }
   if(hourM4 >=1 ){
    sitTimerM4.innerText= hourM4+ ":" + minutesM4 + ":"+ secondsM4;
   }
}
var cancel= setInterval(sitTimeM4, 1000);
var button= document.getElementsByClassName("M4");
var timer= document.getElementById("timerM4");
M4.onclick = function(){
 if(M4.className !="sat"){
     if(secondsM4 >0 || minutesM4 > 0){
         secondsM4=0;
         minutesM4=0;
          }
          M4.className= "sat";
     timerM4.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(800, 200, 125, 125);
     
     
     
 }
 else{
    M4.className= "M4";
     timerM4.className="timerM4";
     secondsM4=0;
     mintuesM4=0;
     ctx.fillStyle= "green";
    ctx.fillRect(800, 200, 125, 125);
 }
}


//M5
var secondsM5=0;
var minutesM5=0;
var hourM5=0;
var sitTimerM5 = document.getElementById('timerM5');
function sitTimeM5(){
    secondsM5 += 1;
    
    if(secondsM5 == 60){
        secondsM5=0;
        minutesM5 += 1;
    }
    if(secondsM5 < 10){
        sitTimerM5.innerText=  minutesM5 + ":0"+ secondsM5;
    }else{
   sitTimerM5.innerText=  minutesM5 + ":"+ secondsM5;}
   if(minutesM5 == 60){
        minutesM5=0;
        hourM5 +=1;
   }
   if(hourM5 >=1 ){
    sitTimerM5.innerText= hourM5+ ":" + minutesM5 + ":"+ secondsM5;
   }
}
var cancel= setInterval(sitTimeM5, 1000);
var button= document.getElementsByClassName("M5");
var timer= document.getElementById("timerM5");
M5.onclick = function(){
 if(M5.className !="sat"){
     if(secondsM5 >0 || minutesM5 > 0){
         secondsM5=0;
         minutesM5=0;
          }
          M5.className= "sat";
     sitTimerM5.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(950, 450, 125, 125);
     
     
     
 }
 else{
    M5.className= "M5";
     timerM5.className="timerM5";
     secondsM5=0;
     mintuesM5=0;
     ctx.fillStyle= "green";
    ctx.fillRect(950, 450, 125, 125);
 }
}


//M6

var secondsM6=0;
var minutesM6=0;
var hourM6=0;
var sitTimerM6 = document.getElementById('timerM6');
function sitTimeM6(){
    secondsM6 += 1;
    
    if(secondsM6 == 60){
        secondsM6=0;
        minutesM6 += 1;
    }
    if(secondsM6 < 10){
        sitTimerM6.innerText=  minutesM6 + ":0"+ secondsM6;
    }else{
   sitTimerM6.innerText=  minutesM6 + ":"+ secondsM6;}
   if(minutesM6 == 60){
        minutesM6=0;
        hourM6 +=1;
   }
   if(hourM6 >=1 ){
    sitTimerM6.innerText= hourM6+ ":" + minutesM6 + ":"+ secondsM6;
   }
}
var cancel= setInterval(sitTimeM6, 1000);
var button= document.getElementsByClassName("M6");
var timer= document.getElementById("timerM6");
M6.onclick = function(){
 if(M6.className !="sat"){
     if(secondsM6 >0 || minutesM6 > 0){
         secondsM6=0;
         minutesM6=0;
          }
          M6.className= "sat";
     sitTimerM6.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(950, 0, 100, 100);
     
     
     
 }
 else{
    M6.className= "M6";
     timerM6.className="timerM6";
     secondsM6=0;
     mintuesM6=0;
     ctx.fillStyle= "green";
    ctx.fillRect(950, 0, 100, 100);
 }
}

//R1


var secondsR1=0;
var minutesR1=0;
var hourR1=0;
var sitTimerR1 = document.getElementById('timerR1');
function sitTimeR1(){
    secondsR1 += 1;
    
    if(secondsR1 == 60){
        secondsR1 =0;
        minutesR1 += 1;
    }
    if(secondsR1 < 10){
        sitTimerR1.innerText=  minutesR1 + ":0"+ secondsR1;
    }else{
   sitTimerR1.innerText=  minutesR1 + ":"+ secondsR1;}
   if(minutesR1 == 60){
        minutesR1=0;
        hourR1 +=1;
   }
   if(hourR1 >=1 ){
    sitTimerR1.innerText= hourR1+ ":" + minutesR1 + ":"+ secondsR1;
   }
}
var cancel= setInterval(sitTimeR1, 1000);
var button= document.getElementsByClassName("R1");
var timer= document.getElementById("timerR1");
R1.onclick = function(){
 if(R1.className !="sat"){
     if(secondsR1 >0 || minutesR1 > 0){
         secondsR1=0;
         minutesR1=0;
          }
          R1.className= "sat";
     sitTimerR1.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(1250, 200, 250, 125);
    
 }
 else{
    R1.className= "R1";
     timerR1.className="timerR1";
     secondsR1=0;
     mintuesR1=0;
     ctx.fillStyle= "green";
    ctx.fillRect(1250, 200, 250, 125);
 }
}


//R2

var secondsR2=0;
var minutesR2=0;
var hourR2=0;
var sitTimerR2 = document.getElementById('timerR2');
function sitTimeR2(){
    secondsR2 += 1;
    
    if(secondsR2 == 60){
        secondsR2 =0;
        minutesR2 += 1;
    }
    if(secondsR2 < 10){
        sitTimerR2.innerText=  minutesR2 + ":0"+ secondsR2;
    }else{
   sitTimerR2.innerText=  minutesR2 + ":"+ secondsR2;}
   if(minutesR2 == 60){
        minutesR2=0;
        hourR2 +=1;
   }
   if(hourR2 >=1 ){
    sitTimerR2.innerText= hourR2+ ":" + minutesR2 + ":"+ secondsR2;
   }
}
var cancel= setInterval(sitTimeR2, 1000);
var button= document.getElementsByClassName("R2");
var timer= document.getElementById("timerR2");
R2.onclick = function(){
 if(R2.className !="sat"){
     if(secondsR2 >0 || minutesR2 > 0){
         secondsR2=0;
         minutesR2=0;
          }
          R2.className= "sat";
     sitTimerR2.className= "sat";
     ctx.fillStyle= "red";
    ctx.fillRect(1250, 450, 250, 125);
    
 }
 else{
    R2.className= "R2";
     timerR2.className="timerR2";
     secondsR2=0;
     mintuesR2=0;
     ctx.fillStyle= "green";
    ctx.fillRect(1250, 450, 250, 125);
 }
}

//Waitlist
var secondsW1= 0;
var minutesW1=0;
var wait1= document.getElementById("position1");
var first= document.getElementById("fname1");
var party1= document.getElementById("party1");
var sit1= document.getElementById("sit1");
first.oninput = function(){
    wait1.className= "inuse";
    secondsW1=0;
    minutesW1=0;
    
}



function waitTime1(){
    secondsW1 += 1;
    if (secondsW1 == 60){
        secondsW1= 0;
        minutesW1= 1;
    }
    if(position1.className == "inuse"){
        if(secondsW1 <10 && minutesW1 <1){
        wait1.innerText= "0:0"+ secondsW1;}
        if(secondsW1 >= 10 && minutesW1 < 1){
            wait1.innerText= "0:"+secondsW1;
        }
        
}}
var cancel= setInterval(waitTime1, 1000);

sit1.onclick= function(){
    
    party1.value= '';
    first.value= '';
    wait1.className='position1';
    if (wait2.className == 'inuse'){
        first.value = second.value;
        party1.value = party2.value;
        second.value= '';
        party2.value= '';
        wait2.className= 'position2';
        wait1.className = 'inuse';
        secondsW1= secondsW2;
        minutesW1= minutesW2;
    }
    if(wait1.className == 'inuse' && wait2.className != 'inuse'){
        second.value = third.value;
        party2.value = party3.value;
        third.value= '';
        party3.value= '';
        wait3.className= 'position3'
        wait2.className = 'inuse';
        secondsW2= secondsW3;
        minutesW2= minutesW3;
    }
    if(wait4.className == 'inuse' && wait3.className != 'inuse'){
        third.value = fourth.value;
        party3.value = party4.value;
        fourth.value= '';
        party4.value= '';
        wait4.className= 'position4'
        wait3.className = 'inuse';
        secondsW3= secondsW4;
        minutesW3= minutesW4;
    }
    if(wait5.className == 'inuse' && wait4.className != 'inuse'){
        fourth.value = fifth.value;
        party4.value = party5.value;
        fifth.value= '';
        party5.value= '';
        wait5.className= 'position5'
        wait4.className = 'inuse';
        secondsW4= secondsW5;
        minutesW4= minutesW5;
    }
    if(fname2.value ==''){
        wait2.className= 'position2';
    }
   
}



//Waitlist2
var secondsW2= 0;
var minutesW2=0;
var wait2= document.getElementById("position2");
var second= document.getElementById("fname2");
var party2= document.getElementById("party2");
var sit2= document.getElementById("sit2");
second.oninput = function(){
    wait2.className= "inuse";
    secondsW2=0;
    minutesW2=0;
    
}



function waitTime2(){
    secondsW2 += 1;
    if (secondsW2 == 60){
        secondsW2= 0;
        minutesW2= 1;
    }
    if(position2.className == "inuse"){
        if(secondsW2 <10 && minutesW2 <1){
        wait2.innerText= "0:0"+ secondsW2;}
        if(secondsW2 >= 10 && minutesW2 < 1){
            wait2.innerText= "0:"+secondsW2;
        }
        
}}
var cancel= setInterval(waitTime2, 1000);

sit2.onclick= function(){
    party2.value= '';
    second.value= '';
    wait2.className="position2";
}
//Waitlist3
var secondsW3= 0;
var minutesW3=0;
var wait3= document.getElementById("position3");
var third= document.getElementById("fname3");
var party3= document.getElementById("party3");
var sit3= document.getElementById("sit3");
third.oninput = function(){
    wait3.className= "inuse";
    secondsW3=0;
    minutesW3=0;
    
}



function waitTime3(){
    secondsW3 += 1;
    if (secondsW3 == 60){
        secondsW3= 0;
        minutesW3= 1;
    }
    if(position3.className == "inuse"){
        if(secondsW3 <10 && minutesW3 <1){
        wait3.innerText= "0:0"+ secondsW3;}
        if(secondsW3 >= 10 && minutesW3 < 1){
            wait3.innerText= "0:"+secondsW3;
        }
        
}}
var cancel= setInterval(waitTime3, 1000);

sit3.onclick= function(){
    party3.value= '';
    third.value= '';
    wait3.className="position3";
}


//Wait4
var secondsW4= 0;
var minutesW4=0;
var wait4= document.getElementById("position4");
var fourth= document.getElementById("fname4");
var party4= document.getElementById("party4");
var sit4= document.getElementById("sit4");
fourth.oninput = function(){
    wait4.className= "inuse";
    secondsW4=0;
    minutesW4=0;
    
}



function waitTime4(){
    secondsW4 += 1;
    if (secondsW4 == 60){
        secondsW4= 0;
        minutesW4= 1;
    }
    if(position4.className == "inuse"){
        if(secondsW4 <10 && minutesW4 <1){
        wait4.innerText= "0:0"+ secondsW4;}
        if(secondsW4 >= 10 && minutesW4 < 1){
            wait4.innerText= "0:"+secondsW4;
        }
        
}}
var cancel= setInterval(waitTime4, 1000);

sit4.onclick= function(){
    party4.value= '';
    fourth.value= '';
    wait4.className="position4";
}
//Wait 5
var secondsW5= 0;
var minutesW5=0;
var wait5= document.getElementById("position5");
var fifth= document.getElementById("fname5");
var party5= document.getElementById("party5");
var sit5= document.getElementById("sit5");
fifth.oninput = function(){
    wait5.className= "inuse";
    secondsW5=0;
    minutesW5=0;
    
}



function waitTime5(){
    secondsW5 += 1;
    if (secondsW5 == 60){
        secondsW5= 0;
        minutesW5= 1;
    }
    if(position5.className == "inuse"){
        if(secondsW5 <10 && minutesW5 <1){
        wait5.innerText= "0:0"+ secondsW5;}
        if(secondsW5 >= 10 && minutesW5 < 1){
            wait5.innerText= "0:"+secondsW5;
        }
        
}}
var cancel= setInterval(waitTime5, 1000);

sit5.onclick= function(){
    party5.value= '';
    fifth.value= '';
    wait5.className="position5";
}




   














//var secondsW1= 0;
//var minutesW1= 0;
//var hourW1= 0;
//var name1= document.getElementById("fname1");
//var waittime1= document.getElementById("position1");
//name1.onclick= function waitTime(){
   // secondsW1 += 1;
    
  //  if(secondsW1 < 10){
  //      waittime1.innerText= minutesW1 +":0" + secondsW1;
 //   }
 //   if(secondsW1 == 60){
 //       secondsW1=o;
 //       minutesW1=1;
//    }
 //   else{
 //       waittime1.innerText= minutesW1 +":" +secondsW1;}
 //       var cancelWait= setInterval(waitTime, 1000);
        
 //   }
 
//L's
//L1
ctx.fillStyle= "green";
ctx.fillRect(0, 100, 200, 125);


//L2
ctx.fillStyle= "green";
ctx.fillRect(0, 325, 200, 125);

//L3
ctx.fillStyle= "green";
ctx.fillRect(0, 550, 200, 125);

//M's
//M1
ctx.fillStyle= "green";
ctx.fillRect(350, 450, 125, 125);
//M2
ctx.fillStyle= "green";
ctx.fillRect(500, 200, 125, 125);
//M3
ctx.fillStyle= "green";
ctx.fillRect(650, 450, 125, 125);
//M4
ctx.fillStyle= "green";
ctx.fillRect(800, 200, 125, 125);
//M5
ctx.fillStyle= "green";
ctx.fillRect(950, 450, 125, 125);

//R's
//R1
ctx.fillStyle= "green";
ctx.fillRect(1250, 200, 250, 125);
//R2
ctx.fillStyle= "green";
ctx.fillRect(1250, 450, 250, 125);
//Window
//W1
ctx.fillStyle= "green";
ctx.fillRect(950, 0, 100, 100);
//W2
ctx.fillStyle= "green";
ctx.fillRect(1100, 0, 100, 100);
//W3
ctx.fillStyle= "green";
ctx.fillRect(1250, 0, 100, 100);
//W4
ctx.fillStyle= "green";
ctx.fillRect(1400, 0, 100, 100);

function isPointInsideRect(pointX,pointY,rectX,rectY,rectWidth,rectHeight){
    return  (rectX <= pointX) && (rectX + rectWidth >= pointX) &&
                 (rectY <= pointY) && (rectY + rectHeight >= pointY);
}

});



     




if (window.addEventListener('resize') == true){
    canvas.height= window.innerHeight; 
    canvas.width= window.innerWidth;
};
//Refocus
//window.addEventListener('resize', ()=>{
    //canvas.height= window.innerHeight;
    //canvas.width= window.innerWidth;
//});

//while (wait.W1.value == null && wait.W2.value != null){



//buttons
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

//html import
var para = document.getElementById('para');
var para1=document.getElementById('para1')
var para2=document.getElementById('para2')


//timing
var seconds = 1;
var minutes = 0;
var tmp = 1;
var time=0;
var color=1;

start.addEventListener('click', function starting() {
    console.log('hi');

    intervel = setInterval(timerstart, 1000)

});

function timerstart() {
    // addtimer = time + ":" + minutes+":"+seconds;
    // console.log(addtimer);
  
    var colors = ['red', 'green', 'blue', 'orange', 'yellow','pink','skyblue','gray','purple','aqua'];

    document.body.style.backgroundColor = colors[color];

    if (seconds == 60) {
        seconds = 0;
        minutes += tmp;
    }
    //only use of backround collor change
    if(color==10){
        color=0;
        color+=tmp;
        console.log(color);

    }

    // if (minutes > 60) {
    //     minutes += 1;

    // }

    if(minutes==60){
        minutes=0;
        time+=tmp;

    }
   para.style.backgroundColor = colors[time];
   para1.style.backgroundColor = colors[minutes];
   para2.style.backgroundColor = colors[seconds];


    //add for html
    para.innerHTML = time+"-"+"hr";
    para1.innerHTML=minutes+"-"+"mins";
    para2.innerHTML=seconds+"-"+"sec";
    color++
    seconds++
   

}

//stop click funcion stop
stop.addEventListener('click', timerstop)
function timerstop() {
    clearInterval(intervel);
}

//reset click function clear
reset.addEventListener('click', timerrest);
function timerrest() {
    seconds=0;
    minutes=0;
    time=0;
    

      //add for html
      para.innerHTML = time+"-"+"hr";
      para1.innerHTML=minutes+"-"+"mins";
      para2.innerHTML=seconds+"-"+"sec";
    
}



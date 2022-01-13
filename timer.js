let hour=0,min=0,sec = 0;
let setHour = (e)=> {
    e ? hour=e : hour = 0;
} 
let setMin = (e)=> {
    e ? min=e : min = 0;

} 
let setSec = (e)=> {
    e ? sec=e : sec = 0;
} 

function start() {
    interval = setInterval(function(){
        // getting readonly input
        document.getElementById("sec").readOnly = true;
        document.getElementById("min").readOnly = true;
        document.getElementById("hour").readOnly = true;

        console.log(hour+":"+min+":"+sec);

        if (sec == 0 && min==0 && hour==0) {
            clearInterval(interval);
        }
        
        if(sec != 0){
            sec--;
            document.getElementById("sec").value = sec;
        }else if(min != 0){
            sec=59;
            min--;
            document.getElementById("sec").value = sec;
            document.getElementById("min").value = min;
        }else if(hour != 0){
            min=59;
            hour--;
            document.getElementById("min").value = min;
            document.getElementById("hour").value = hour;
        }else {
            document.getElementById("error").innerHTML = "زمان تمام شد✔";
            document.getElementById("sec").value = sec;
            document.getElementById("min").value = min;
            document.getElementById("huor").value = hour;
            clearInterval(interval);
        }
    }, 1000);
}
// reset function
function reset() {
    clearInterval(interval);
    document.getElementById("time").reset();
    // getting read only false
    document.getElementById("sec").readOnly = false;
    document.getElementById("min").readOnly = false;
    document.getElementById("hour").readOnly = false;
}
// stop function
function stop(){
    clearInterval(interval);
    hour = document.getElementById("hour").value;
    min = document.getElementById("min").value;
    sec = document.getElementById("sec").value;
    console.log(hour+":"+min+":"+sec);
}
// transform: rotateY(360deg);
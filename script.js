window.addEventListener('keydown', function(e){
if(e.keyCode == 80){
pause()
} else if(e.keyCode == 82){
reset();
}
});
var counter = 57;
var countermin = 8;
var bool = false;
var id = setInterval("timer()", 1000);
function timer(){
    counter++;
    if(counter == 60){
        countermin++;
        document.getElementById("min").innerHTML = countermin;
        counter = 0;  
        if(countermin == 60){
            counter = 0;
            countermin = 0;
        }    
        if (countermin < 10){
            document.getElementById("min").innerHTML = "0" + countermin;
        } else{
            document.getElementById("min").innerHTML = countermin;
        }
    }; 
    if(counter < 10){
        document.getElementById("sec").innerHTML = "0" + counter;
    } else{
        document.getElementById("sec").innerHTML =  counter;
    }
    
};
$("#reset").click(function(){
    reset();
});
$("#pause").click(function(){
  pause();
});
function pause(){
    if(bool == false){
        var tempsec = counter;
        var tempmin = countermin;    
        clearInterval(id);
        bool = true;
    } else{
        id = setInterval("timer()", 1000);
        bool = false;  
    }
}
function reset(){
    counter = 0;
    countermin = 0;
    document.getElementById("sec").innerHTML = "0" + counter;
    document.getElementById("min").innerHTML = "0" + countermin;
}
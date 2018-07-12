window.addEventListener('keydown', function(e){
if(e.keyCode == 80){
pause()
} else if(e.keyCode == 82){
reset();
}
});
var counter = 0;
var countermin = 0;
var ms = 0;
var bool = false;
var id = setInterval("timer()", 10);
function timer(){
    ms+=10/10;
   if(ms == 100){
       counter++;
       ms = 0;
       document.getElementById("ms").innerHTML = ms;
   }
    if(counter == 60){
        countermin++;
        document.getElementById("min").innerHTML = countermin;
        counter = 0;  
        if(countermin == 60){
            counter = 0;
            countermin = 0;
        }    
        document.getElementById("min").innerHTML = countermin;
    }; 
    document.getElementById("sec").innerHTML = counter;
    document.getElementById("ms").innerHTML = ms;
};
$("#reset").click(function(){
    reset();
});
$("#pause").click(function(){
  pause();
});
function pause(){
    if(bool == false){
        var tempms = ms;
        var tempsec = counter;
        var tempmin = countermin;    
        clearInterval(id);
        bool = true;
    } else{
        id = setInterval("timer()", 10);
        bool = false;  
    }
}
function reset(){
    counter = 0;
    countermin = 0;
    ms = 0;
    document.getElementById("sec").innerHTML = counter;
    document.getElementById("min").innerHTML = countermin;
    document.getElementById("ms").innerHTML = ms;
}
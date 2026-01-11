var button = document.getElementById("myButton");
let loop;
button.addEventListener("click", function() {
    alert("clock started");
  loop= setInterval(function() {
        var now = new Date();
        var timeDisplay = document.getElementById("timeDisplay");
        timeDisplay.textContent = now.toLocaleTimeString();
    }, 1000);
}); 

window.addEventListener("keydown", function(e) {
    console.log( e.key ,e.altKey);
    if(e.key === "w" && e.altKey){
        clearInterval(loop);
    }

});
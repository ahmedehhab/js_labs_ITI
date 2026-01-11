let timeout;
var form =document.querySelector('form');
function setCloseTimer(){
    clearTimeout(timeout);

   timeout= setTimeout(()=>{
        window.close();
    },3000);       
}
form.addEventListener('change',setCloseTimer);
form.addEventListener('input',setCloseTimer);


setCloseTimer();


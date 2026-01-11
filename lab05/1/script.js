const button = document.getElementById('newTab');


button.addEventListener('click', () => {
    const newWindow = window.open("", '_blank', 'width=300,height=300');
    
    

    setTimeout(() => {
        if (newWindow) {
            newWindow.close();
        }
    }, 5000);
});
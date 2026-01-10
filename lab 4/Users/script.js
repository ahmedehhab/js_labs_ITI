var form = document.querySelector("form"); 
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");

var nameError = document.getElementById("errorName");
var ageError = document.getElementById("errorAge");
var emailError = document.getElementById("errorEmail");

form.addEventListener("submit", function(event) {
event.preventDefault();
    var isNameValid = /^[a-zA-Z\s]{2,30}$/.test(nameInput.value);
    var isAgeValid = /^[0-9]{1,2}$/.test(ageInput.value);
    var isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);

    if (!isNameValid) {
        nameError.style.display = "inline";
        nameError.textContent = "Name must be 2-30 characters";
    }
    
    if (!isAgeValid) {
        ageError.style.display = "inline";
        ageError.textContent = "Age must be 1-99";
    }
    
    if (!isEmailValid) {
        emailError.style.display = "inline";
        emailError.textContent = "Invalid email format";
    }
    if (isNameValid && isAgeValid && isEmailValid) {
        var tableBody = document.querySelector("#tableBody");
        var tableRow = document.createElement("tr");
        var tableDataName = document.createElement("td");
        var tableDataAge = document.createElement("td");
        var tableDataEmail = document.createElement("td");

        tableDataName.textContent = nameInput.value;
        tableDataAge.textContent = ageInput.value;
        tableDataEmail.textContent = emailInput.value;

        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataAge);
        tableRow.appendChild(tableDataEmail);
        tableBody.appendChild(tableRow);

        var table = document.querySelector("#userTable");
        table.style.display = "table";

        
    } 
    
});

var numbers = [];

for (var i = 0; i < 5; i++) {
    var input;
    do {
        input = prompt(`Enter number ${i + 1} of 5:`);
    } while (input === "" || isNaN(input) || input === null);
        numbers.push(Number(input));
}

numbers.sort(function(a, b) {
    return a - b;
});

var resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
resultDiv.style.fontWeight = "bold";
resultDiv.textContent = "Sorted Numbers: " + numbers.join(", ");

document.body.appendChild(resultDiv);

var cloneDiv =resultDiv.cloneNode(true);
cloneDiv.textContent="Reverse Numbers: "+numbers.reverse().join(", ");
document.body.appendChild(cloneDiv);

//////////////////////////////////////////////////////////////////////
// var table = document.getElementsByTagName("table")[0];
// var tableBody=document.getElementsByTagName("tbody")[0];


// var numberOfUsers;
// do {
//     numberOfUsers = prompt("enter the number of user");
// } while (numberOfUsers === "" || isNaN(numberOfUsers) || numberOfUsers <= 0);

// var namee = [];
// var age = [];
// for (var i = 0; i < numberOfUsers; i++) {
//     var inputName;
//     do {
//         inputName = prompt(`please enter the name of the ${i + 1} person`);
//     } while (inputName === null || inputName.trim() === "");
//     namee[i] = inputName;

//     var inputAge;
//     do {
//         inputAge = prompt(`please enter the age of the ${i + 1} person`);
//     } while (inputAge === "" || isNaN(inputAge) || inputAge <= 0 || inputAge > 100);
//     age[i] = inputAge;
// }


// for(var i=0;i<numberOfUsers;i++){
//     var row=document.createElement("tr");
// var newCell =document.createElement("td");
// var newCell2 =document.createElement("td");
// newCell.textContent=namee[i];
// newCell.style.border="2px solid black";
// newCell2.textContent=age[i];
// newCell2.style.border="2px solid black";
// row.appendChild(newCell);
// row.appendChild(newCell2);
// tableBody.appendChild(row);
// }


// table.style.display="table";
// table.style.border = "2px solid black";





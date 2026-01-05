var numbers=[20,2,1,30,15];
numbers.sort(function(x,y){
    return x-y;
});
console.log(numbers);

//////////////////////////////////////////////////////////////////////
// var table = document.getElementsByTagName("table")[0];
// var tableBody=document.getElementsByTagName("tbody")[0];

// var numberOfUsers=prompt("enter the number of user");
// var namee=[];
// var age=[];
// for(var i=0;i<numberOfUsers;i++){
//     namee[i]=prompt(`please enter the name of the ${i+1} person`);
//     age[i] =prompt(`please enter the age of the ${i+1} person`);
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





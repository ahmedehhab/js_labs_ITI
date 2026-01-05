
// function one(){
//     var y;
//     console.log(y);
// }
// function two (){
//     console.log(y);
// }

// function three(){
//     var x=10;
//     var y=20;
//     console.log(y*x-2);
// }


// function four(){
//     var y;
//     console.log(typeof y);
// }
// function five(){
//     var x="1";
//     var y=2;
//     console.log(x+y);
// }
// function six(){
//     var x=1;
//     var y= true;
//     console.log(x+y);
// }

// one();three();four();five();six(); two();
// //-----------------------------------------------------------------
// const message = prompt("Enter the message:");

// let result = "";

// for (let i = 1; i <= 6; i++) {
//     result += `<h${i}>${message}</h${i}>`;
// }

// document.body.innerHTML = result;

// //------------------------------------------------------------------
// let sum = 0;

// while (true) {
//     let value = prompt("Enter a number");
//     if (value === null || value.trim() === "" || isNaN(value)) {
//         alert("Please enter a numeric value.");
//         continue;
//     }

//     value = Number(value);
//     if (value === 0) {
//         break;
//     }
//     sum += value;
//     if (sum > 100) {
//         break;
//     }
// }

// alert("total sum = " + sum);

// //------------------------------------------------------------------------

// let name;
// let birthYear;
// let age;

// while (true) {
//     name = prompt("Enter your name:");

//     if (name !== null && name.trim() !== "" && isNaN(name)) {
//         break;
//     } else {
//         alert("invalid name please enter a valid name.");
//     }
// }

// while (true) {
//     birthYear = prompt("Enter your birth year:");

//     if (!isNaN(birthYear) && birthYear.trim() !== "" && Number(birthYear) < 2010) {
//         birthYear = Number(birthYear);
//         break;
//     } else {
//         alert("invalid birth year Please enter a number less than 2010");
//     }
// }
// age = new Date().getFullYear() - birthYear;

// document.body.innerHTML = `
// Name: ${name}<br>
// Birth year: ${birthYear}<br>
// Age: ${age}
// `;

//////////////////////////////////////   LAB 2   //////////////////////////////////////////////
// var name ;
// var phone;
// var mobile;
// var email;

// while(true){
// name=prompt("enter your name");
// if(name===null ||name.trim()==""|| !isNaN(name) ){
//     alert("invalid name please enter a valid character name");
//     continue;
// }
// break;
// }

// while(true){
//     phone=prompt("enter your phone number");
//     if(phone==null || isNaN(phone) || phone.length !== 8){
//         alert("please enter a valid phone number  8 number");
//         continue;
//     }
//     break;
// }

// while(true){
//     mobile=prompt("enter your mobile number");
//     if(mobile !== null && mobile.trim() !== "" && !isNaN(mobile) && mobile.length == 11 &&
//        (mobile.startsWith("010") || mobile.startsWith("011") || mobile.startsWith("012"))){
//           break;
//     }
// }
// while(true){
//     email =prompt("enter your email");
//     var emailRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
//     if(emailRegex.test(email)){
//         break;
//     }
// }
// document.body.innerHTML = `
//     <h1>welcome message</h1>
//     <p>welcome, ${name}</p>
//     <p>your phone number is: ${phone}</p>
//     <p>your mobile number is: ${mobile}</p>
//     <p>your email is: ${email}</p>
// `;
////////////////////////////////////////////////////////////////////////////////////////////////////////

// var st= prompt("enter text to check the pliandrome");
//  var i=0; var j=st.length-1;
//  var isPlaindrome=true;
//  while(i<j){
//     if(st[i]!=st[j]){
//         isPlaindrome=false;
//         break;
//     }
// i++;j--;
//  }
//  alert(` text ${isPlaindrome}  pliandrome`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var radius =prompt("enter the circle radius");

// if(!isNaN(radius))
// var area=Math.PI *Math.pow(radius,2);
// else alert("this is not a number");
// alert(`the area of the radius is ${area}`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// var x= prompt("enter the number to calculate the squareroot ");
// if(!isNaN(x))
// var res=Math.sqrt(x);
// else alert("this is not a number");

// alert(`the square root of this number is ${res}`);
////////////////////////////////////////////////////////////////////////////////////////////////////////

// var arr=[];
// var s=0;
// var m=1;
// var d;
// for(var i=0;i<3;i++){
//     while (true) {
//         arr[i]= prompt(`enter the ${i+1} number`);
//         if(arr[i]!==null &&arr[i].trim()!=="" &&!isNaN(arr[i]) ){
//             arr[i]=Number(arr[i]);
//             break;
//         }
//         continue;
//     }
    
//     s+=arr[i];
//     m*=arr[i];
//     if(i) d/=arr[i];
//     else d=arr[i];
// }

// alert(`the sum of ${arr.join("+")} = ${s}
//     the multiplication of ${arr.join("*")} = ${m}
//     the division of ${arr.join("/")} = ${d} `);

//////////////////////////////////////////////////////////////////////////////////////////////////////


function a (x,y){
    if(arguments.length!=2){
        throw("the arguments must be 2");

    }
    return "ahmed ehab";
}

// console.log(a(2));

function b(){
    var arr= [];
    for(var i=0;i<arguments.length;i++) arr.push(arguments[i]);
    return  arr.reverse();
}
// console.log(b(1,2,3,4,5,6));

function c (){
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        if(isNaN(arguments[i]) || typeof arguments[i]!=="number")
            throw("all arguments must be numeric");

        sum+=arguments[i];
    }
    return sum;
}

// console.log(c(1,"2",3)); 


var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
function d (date){
    var index= new Date(date).getDay();
    return  days[index];
}
console.log(d("2025/12/31")) ;
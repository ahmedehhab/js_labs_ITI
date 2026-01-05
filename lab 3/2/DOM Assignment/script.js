var img =document.getElementsByTagName("img")[0];
var header=document.getElementById("header");
document.body.append(img.cloneNode(true));
var ul =document.getElementById("nav");
ul.style.listStyleType="circle";
header.style.textAlign="right";
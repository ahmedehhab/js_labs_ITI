let x=10;
let y=20;

let arr=[x,y];

[x,y]=[y,x];

console.log(x ,y);


////////////////////////////////////////////////////////////////////////////

function minMax(...numbers){
    let min=numbers[0];
    let max=numbers[0];
    for(let n of numbers){
        if(n<min) min=n;
        if(n>max) max=n;
    }
    return [min,max];
}

let numbers=[5,3,9,1,6,7];
let [minVal , maxVal]= minMax(...numbers);
console.log(minVal,maxVal);
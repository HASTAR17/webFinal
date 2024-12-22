document.querySelector("h1").innerHTML= document.querySelector("h1").innerHTML+" Arafat";

document.querySelector("button").addEventListener("click", function(){

    document.querySelector("div").innerHTML= "Number is 2 by clicked"
});



let p = document.createElement('button');
p.innerText = 'click me JS';
p.style.backgroundColor="red";

let v= document.querySelector("button");

v.after(p);
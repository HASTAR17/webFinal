// //
// //practice questions
// // alert('hello abdullah al arafat');
// // // prompt('hello Sardar');

// // let input=prompt("Enter a number:");

// // if(input%5==0){
// //     console.log("The number is multiple of 5");
// // }else{
// //     console.log("The number is not multiple of 5");
// // }

// //practice question2
// let marks =prompt("Enter your mark for the grade:");
// marks = parseInt(marks);
// switch(true){
//     case (marks>=80):
//         console.log("Your grade is A");
//         break;
//         case (marks>=70):
//             console.log("Your grade is B");
//             break;
//             case (marks>=60):
//                 console.log("Your grade is C");
//                 break;
//                 case(marks>=50):
//                 console.log("Your grade is D");
//                 break;
//                 default:
//                 console.log("Your grade is F");

// }

//Loops
//  sum=0;
// for (let i = 1; i <=10; i+=2) {

//   console.log(i+". Abdullah");
//   sum +=i;
//   console.log(sum)
// }
// let i=1;
// // while(i<=10){
// //     console.log(i+". Sardar");
// //     i++;
// // }
// do{
//     console.log(i+". Abdullah");
//     i++;
// }while(i>=10);
// for-of-loop
// let sizer =0;
// let str = 'amiki';
// for (let i of str)
// {
//     console.log(i);
//     sizer++;
// }
// console.log("size of the string is: " + sizer);

// // //for-in-loop
// let student={
//     name: 'Abdullah Sardar',
//     id:223002083,
//     cgpa:3.05,
// }
// console.log(student);
// for(let i in student){
//     console.log("Your "+i+" is "+ student[i]);

//  }
// // // quantity=0;
// // // console.log("Even Numbers Are:");
// // // for(let i=2;i<=100;i+=2){

// // //         console.log(i);
// // //         quantity++;

// // // }
// // // console.log("Quantity of even numbers is: " + quantity);

//Number Guessing Game
// let guess = 20;
// let attempts = 0;
// let maxAttempts = 5;

// for (let i = 0; i < maxAttempts; i++) {
//   let input = prompt("Please enter your number: ");
 
//   console.log("Your Number of attempt is: "+ ++attempts);

//     if (guess == input) {
//       console.log("Your guess is correct!");
//       break;
//     } else {
//       console.log("Your guess is wrong");
//       console.log("Your Number of Attempts remaining: " + --maxAttempts);
//     }

//     if (attempts === maxAttempts) {
//       console.log("You have reached the maximum number of attempts.");
//       break;
//     }
//   }
// // // while(guess != input){
// // //     input=prompt("Your guess is wrong re enter the number!");
// // // }
// // // console.log("your guess is correct");

// // //string

// // let str= {
// //     name: `Abdullah Sardar`,
// //     age: 22,
// // }
// // let output= `   Your name is ${str.name} & age is ${str.age}` ;
// // console.log(output) ;

// // console.log(output.toLowerCase());

// // console.log(output.trim());
// // let age3= 18;
// // age3 <=18?console.log("I'm Adult"):console.log() ;

// let num1= "0123456";
// console.log(num1.slice(3,5)); //slice(starting, ending) ending willn't be counted

// let s1= "Abdullah";
// let s2= "Sardar";
// console.log(s2.concat( s1));
// console.log(s2.replaceAll("a","r")); //replace all a by r 
// console.log(s1.charAt(3)); //string 3 index

// //Practice

// // let a= prompt("Enter your full name: ");
// // let b=`user name = ${a.toLowerCase()}, username should be ${"@"+a.toLowerCase()+a.length}`;
// // console.log(b);

// //Array practice

// let marks= [87, 99, 75,95];
// console.log(marks.toString());
// console.log(marks.length);
// for (let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }

// //Practice

// // let marks =[85, 97, 44, 37, 76, 60];
// // let sum=0;
// // for(let mark of marks){
// //     sum+=mark;
// // }
// // let average=sum/marks.length;
// // console.log("Average marks= "+average);

// // let items = [250, 645, 300, 900, 50];

// // for(let i=0; i<items.length; i++){
// //     let offer= items[i]/10;
// //     let finalValue= items[i]-offer;
// //     console.log("The final price after the offer is: "+finalValue);
// // }
//    let marvelHeroes=["Iron Man","Captain America","Thor"];
//    let dcHeroes=["Super Man","Batman","Flash"];
//    let z=marvelHeroes.concat(dcHeroes); //marvelHeroes will be first then dcHeroes will join
//    console.log(z.toString());
//    console.log(z.unshift("Antman")); //unshift is use for adding from the first
//    console.log(z.toString());
//    console.log(z.shift());      //shift is use for removing from the first
//    console.log(z.toString()); //unshift-shift is first in first out
//    console.log(z.slice(1,4));  // slice starting index 1-3, 4 will not count
//    console.log(z);
//    console.log(z.splice(1,2,102,103)); //splice starting index 1 will slice till 2 index & 102 & 103 will insert from starting index
//    console.log(z.toString());

// //Practice Question
// // let company=["Bloomberg","Micrsoft","Uber","Google","IBM","Netflix"];
// // console.log(company.shift());
// // console.log(company.toString());
// // console.log(company.splice(1,1,"Ola"));
// // console.log(company.toString());
// // console.log(company.push("Amazon")); //push-pop is last in first out
// // console.log(company.toString());

// //Function
// // function myFunctions() {
// //     console.log("Hello from my functions");
// //     console.log("This is my first function");
// // }
// // myFunctions();

// //Arrow Function

// // const myArrowFunction =(a,b)=>{
// //     return a+b;
// // }
// // console.log(myArrowFunction(10,20));

// // function myFunction(a,b){
// //     return a+b;
// // }
// // console.log(myFunction(10,20));

// //Practice
// // let counter = 0;
// // function vowelFunction(i) {
// //   i.toLowerCase();
// //   for (let j = 0; j < i.length; j++) {
// //     if (
// //       i[j] === "a" ||
// //       i[j] === "e" ||
// //       i[j] === "i" ||
// //       i[j] === "o" ||
// //       i[j] === "u"
// //     ) {
// //       counter++;
// //     }
// //   }
// //   return counter;
// // }

// // let r = vowelFunction("helloooo");
// // console.log("The number of vowel is: " + r);
// // let counter = 0;
// // const myArrow=(i)=>{
// //     i.toLowerCase();
// //     for (let j = 0; j < i.length; j++) {
// //       if (
// //         i[j] === "a" ||
// //         i[j] === "e" ||
// //         i[j] === "i" ||
// //         i[j] === "o" ||
// //         i[j] === "u"
// //       ) {
// //         counter++;
// //       }
// //     }
// //     return counter;

// // }
// // let r=myArrow("hiii");
// // console.log("The number of vowel in Arrow function  is: " + r);

// //forEach (function) //these function will be called automatically, and these function will input another function as arguement

// let arr=[1, 2, 3, 4];

// let b=arr.map((a)=>{ //a will be store the valueo of array
//     console.log(a+" Map square is: "+a*a);
//     return a*a; 
// }); //this map will be store the value into a new array b.

// // arr.forEach(function myFunction(a){
// //     console.log(a+" Function square is: "+a*a);
// // })

// // arr.forEach((i)=>{   //execute each element of the array
// //     console.log(i+" Arrow square is: "+i*i);
// // }) 

// //  console.log(b);
// //  let c=arr.filter((a)=>{ 
// //     console.log(a+" Map square is: "+a*a);
// //     return a%2==0; //the function will filter according to conditiopn
// // });
// //  console.log(c);

// //  let d= arr.reduce((res, cur)=>{ //reduce function will be used when there is one result eg. sum/products
// //     return res+cur;
// //  });
// //  console.log("Reduce Function = "+d);

// //Practice
// // let arr=[87, 93, 64,99,86];

// // let result=arr.filter((marks)=>{
// //     return marks>90;
// // });
// // console.log("filter Function = "+result);

// // let user=prompt("Enter a number:");
// // let arr=[];
// // for (let i=1; i<=user; i++){
// //     arr[i-1]=i;
// // }
// // console.log(arr.toString());

// // let sum=arr.reduce((prev,curr)=>{
// //     return (prev+curr) ;
// // });

// // console.log("Sum = "+sum);

// // let product=arr.reduce((prev,curr)=>{ //will take two arguments one is prev and another is current, current will store it to prev and that will be the final calculation
// //     return (prev*curr) ;
// // });

// // console.log("Product = "+product);

// //DOM //document object model

let heading=document.getElementById("heading");
console.log(heading);
let c= document.getElementsByClassName("heading");
console.log(c);
let p= document.getElementsByTagName("p");
console.log(p);
console.dir(p);

let ele= document.querySelectorAll("#but");
console.log(ele);
console.dir(ele);

let d= document.querySelector("div");
console.dir(d);
let heading=document.querySelector("h2");
heading.textContent = heading.innerText+" Apna College";

let d= document.querySelector("div");
// for(let i=0; i<d.length; i++) {
// d[i].innerText=`Unique Value ${i}` 
// }
let e=d.getAttribute("class");
console.log(e);

let b= document.querySelector("h2");
console.log(b);
let n= b.getAttribute("id");
console.log(n);
b.setAttribute("id","uniqueValue");
console.log(b);
let o= b.getAttribute("id");
console.log(o);

let btn = document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="aqua";
console.log(btn);

let b= document.querySelector("div");
b.appendChild(btn); //add at the end of the node (inside)
b.prepend(btn); //add at the start-pre of the node (inside)
b.before(btn); //add at the start of the node (outside)
b.after(btn); //add at the end of the node (outside)
btn.remove(); //remove

let b= document.createElement("button");
b.innerText="click me";
b.style.backgroundColor="red";
b.color="white";
let c= document.querySelector("body");
c.prepend(b);
console.log(b);

question 2

let pa = document.querySelector(".para");
let d = pa.getAttribute("class");
console.log(d);
// pa.setAttribute("class", "newClass"); //will set attribute newClass by replacing class
pa.classList.add("newClass"); //will add newClass with class
pa.classList.remove("para"); //will remove specified class

Event
let b= document.querySelector("#btn1");
b.onclick =(()=>{ ;
    
    let name=prompt("Enter your name");
    console.log(name);
    console.log("Button Clicked");
})
b.addEventListener("click",(e)=>{
    console.log("Button Clicked");
    
})
b.addEventListener("click",(e)=>{
    console.log("Button Clicked2");
   
})
let d=((e)=>{
    console.log("Button Clicked3")});
b.addEventListener("click",d)

   
b.removeEventListener("click",d)

//practice

let b= document.querySelector("button");
let d= document.querySelector("body")
let mode="light";
b.addEventListener("mouseover",()=>{
    if(mode=="light"){
        mode="dark"
        d.style.backgroundColor="black";
        d.style.color="white";
    }else{
        mode="light"
        d.style.backgroundColor="white";
        d.style.color="Black";
    }
    console.log(mode);
});
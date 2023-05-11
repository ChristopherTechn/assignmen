
// // question 1 on current time 
const today= new Date();
const month=String(today.getMonth()+1).padStart(2,"0");
let date=String(today.getDate());
let year=String(today.getFullYear());

console.log(+date+"-"+month+"-"+year);
console.log(+date+"/"+month+"/"+year);
console.log(+month+"-"+date+"-"+year);
console.log(+month+"/"+date+"/"+year);



// //question 2 on lucky number
// let i= prompt("Enter a random integer between 1 and 10, and input a guess number");
// if(i==8){
//     console.log(alert("Good work"));
// }
// else if(i>=11) {
//     alert("The numbers should be between 1 and 10");
// }
// else{
//     alert("Not Matched");
// }

// b)

// const guess = Math.floor(Math.random() * 10) + 1;
// const user = parseInt(prompt("Guess a number between 1 and 10"));
// if(user>=11){
//     console.log(alert("invalid input"))
// }

// else if (user === guess) {
//   console.log(alert("Good Work!"));
// } else if (user !== guess){
//   console.log(alert("Not matched. The number was " + guess));
// }
// else if(user>=11){
//     console.log(alert("invalid input"))
// }




// // question 3 %%%
// let a=prompt("Enter your first value");
// let b=prompt("Enter your second value");
// let c=Math.abs(a-100);
// let d=Math.abs(b-100);


// if((c<d)){
// console.log(alert(+a+ " is closer to 100 than "+b))
// }
// else if(c>d){
//   console.log(alert(+b+" is closer to 100 than "+a))
// }
// else{
//   console.log(alert(+b+" and "+a+ " have the same size closer to 100"))
// }
 


//question 4 on multiples

// for(i=1;i<=100;i++)
// {
  
//   if(i%3==0) if(i%5==0) {
//     console.log("FizzBuzz");
  
//   ;
//    }

//  if(i%3==0) {
//   console.log("Fizz");

// continue;
//  }
 
//  if(i%5==0) {
//   console.log("Buzz");

// continue;
//  }
 
//   if(i%3==0) if(i%5==0) {
//   console.log("FizzBuzz");

// break;
//  }

// console.log(i);
// }


//question 5
// const shoes =["Airmax","Jordan","AirForce","luisvitton","Panda"];

// // for(const x of shoes){
// //     console.log(x);
// // }

// let text=document.querySelector("span");

// function timer(){
//     let today=new Date("July 7,2022 16:57:50").getSeconds();
//     let theHours=parseInt(new Date().getSeconds());
// let now =parseInt(new Date().getSeconds());
// let distance = parseInt(`${today} - ${now}`);
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// text.innerHTML=hours+ minutes+ seconds;
// setTimeout(()=>{
// timer()
// },1000)
// }
// timer();
// const btnStart=document.querySelector("#startTime");
// const change=()=>{
// console.log(input);
// }
// countMin.addEventListener("input",()=>{
//   timer.innerText=countMin.value;
// })
// let convert=()=>{
//   countMin.value*60;
// }
// let delay=()=>{
//   while(parseInt(timer)>0){
    
//   }
// }
// btnStart.addEventListener("click",()=>{
// for(let i=(timer.value);i>=0;i--){
//   console.log(i);
// }
// })
let countMin=document.querySelector(".mins");
let timer=document.querySelector(".countDown");
const btn=document.querySelector("#minTime");

// let looper=()=>{
// let delay=1000;
// for (let i=0;i=60;i++){
// delay=delay+1000;
// }

let clicker=()=>{btn.addEventListener("click",loop=()=>{
 let delay=1000;
  timer.innerHTML=(countMin.value)*60;
 let i= (countMin.value)*60;
 let timeOut=setInterval(()=>{ //set interval har 1 sec k waqfe se chle ga jb k set timeout ik sec bd chle ga ik dfa bs
  while(timer.innerHTML<=0){ //jaise hi timer ki value 10 se choti hogi clear kr dena hai chlana
clearInterval(timeOut)
  }
  timer.innerHTML=timer.innerHTML-1
},1000)
 
// let timeOut=setInterval(()=>{
//   if(timer.innerHTML<10){
//     clearInterval(timeOut)
//   }
//   timer.innerHTML=timer.innerHTML-1;
// },1000)







//   setTimeout(function(){
//     if(timer.innerHTML>0){    
//     timer.innerHTML--;
//     console.log(timer.innerHTML)
//   }

//  },delay) 

// setTimeout(()=>{
//   timer.innerHTML--
// },)

})
}
clicker()





 


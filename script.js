var navBar = document.querySelector(".nav-section");
var btn = document.getElementById("manu");


btn.addEventListener("click",function(){
   navBar.classList.toggle("active");
});



var text = document.querySelectorAll('.content-text');
var text1 = document.querySelectorAll('.content-text1');
var text2 = document.querySelectorAll('.content-text2');
var btn1 = document.querySelector('.content-text');
var btn2 = document.querySelector('.content-text1');
var btn3 = document.querySelector('.content-text2');

btn1.addEventListener("click",function(){
   text[0].classList.toggle("active1")
});

btn2.addEventListener("click",function(){
    text1[0].classList.toggle("active1")
 });

 btn3.addEventListener("click",function(){
    text2[0].classList.toggle("active1")
 });



//  frequently section start

 let question = document.getElementById("show-hide");
 let content = document.querySelector('.frequently-ans');

 question.addEventListener('click',function(){
    content.classList.toggle("active5");
 });





//  var typed = new Typed(".type",{
    
//    strings:['Md Shariful Islam Porag', 'Front End developer'],
//     typeSpeed:100,
//     backSpeed:50,
//     loop: true,
//  })


const roles = [
"Full Stack Developer",
"AI Student",
"DevOps Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let typingElement = document.querySelector(".typing");

function type(){

if(charIndex < roles[index].length){

currentRole += roles[index].charAt(charIndex);
typingElement.textContent = currentRole;
charIndex++;

setTimeout(type,100);

}

else{
setTimeout(erase,1500);
}

}

function erase(){

if(charIndex > 0){

currentRole = currentRole.slice(0,-1);
typingElement.textContent = currentRole;
charIndex--;

setTimeout(erase,50);

}

else{

index++;
if(index >= roles.length) index = 0;

setTimeout(type,200);

}

}

type();

// Scroll progress bar

window.onscroll = function(){

let scrollTop = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let scrolled = (scrollTop / height) * 100;

document.getElementById("progress-bar").style.width = scrolled + "%";

};
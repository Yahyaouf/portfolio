let degree = 0;
let about =  document.querySelector("about");

let charge = setInterval(() => {
    
    degree++;
    if(degree===81)
        clearInterval(charge);
    else{
        document.querySelector(".progress1").style.background=`conic-gradient(from 0,blue,skyblue ${degree}%,transparent ${degree}%,transparent 100%)`;
        document.querySelector("#degre1").innerHTML = degree;
    }
},20);
let degree2 = 0;
let charge2 = setInterval(() => {
    degree2++;
    if(degree2===81)
        clearInterval(charge2);
    else{
        document.querySelector(".progress2").style.background=`conic-gradient(from 0,blue,skyblue,${degree2}%,transparent ${degree2}%,transparent 100%)`;
        document.querySelector("#degre2").textContent = degree2;
    }
},20);
about.addEventListener("click")
let degree = 0;
let charge = setInterval(() => {
    degree++;
    if(degree===81)
        clearInterval(charge);
    else{
        document.querySelector(".progress").style.background=`conic-gradient(from 0,pink,purple,blueviolet,skyblue ${degree}%,transparent ${degree}%,transparent 100%)`;
        document.querySelector("h2").innerHTML = degree;
    }
},20);
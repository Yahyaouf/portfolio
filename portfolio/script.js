const spanTyping = document.querySelector(".typing-text-animation");
const arr = ["Developer  ", "software engineer  ", "Full Stack  "];
let stringIndex = 0;
let arrIndex = 0;
let string = "";
let list = document.querySelectorAll('li');
let active = "home";
let zindex=2;
let prev = document.querySelector(".fa-chevron-left");
let next = document.querySelector(".fa-chevron-right");
next.addEventListener("click",() => {
  let items = document.querySelectorAll(".pro");
  document.querySelector(".myprojects").appendChild(items[0]);
})
prev.addEventListener("click",() => {
  let items = document.querySelectorAll(".pro");
  document.querySelector(".myprojects").prepend(items[items.length - 1]);
})
list.forEach( a =>{
  a.addEventListener('click',(event)=>{
    let valuetab = a.dataset.tab;
    let activeold = document.querySelector(".tab.active");
    if(activeold) activeold.classList.remove("active");
    if(valuetab && valuetab!=active){
      let tabactive = document.getElementById(valuetab);
      if(zindex>=9999)
        zindex=5;
      tabactive.style.zIndex = ++zindex;
      active = valuetab;
      tabactive.style.setProperty('--x',event.clientX + 'px');
      tabactive.style.setProperty('--y',event.clientY + 'px');
      tabactive.classList.add('active');
    }
  })

}
);
setInterval(() => {
  const str = arr[arrIndex];
  string += str[stringIndex++];
  if (stringIndex == str.length) {
    arrIndex++;
    string = "";
  }
  spanTyping.textContent = string;
  stringIndex %= str.length;
  arrIndex %= arr.length;
},150);


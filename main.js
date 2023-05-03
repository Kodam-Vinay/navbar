const link1El = document.getElementById("link1");
const link2El = document.getElementById("link2");
const link3El = document.getElementById("link3");
const link4El = document.getElementById("link4");

link1El.addEventListener("mouseover", ()=>{
    link1El.classList.toggle("linear-gradient")
});
link2El.addEventListener("mouseover", ()=>{
    link2El.classList.toggle("linear-gradient")
});
link3El.addEventListener("mouseover", ()=>{
    link3El.classList.toggle("linear-gradient")
});
link4El.addEventListener("mouseover", ()=>{
    link4El.classList.toggle("linear-gradient")
});
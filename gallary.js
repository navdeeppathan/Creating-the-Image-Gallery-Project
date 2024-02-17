let scrollBar=document.querySelector(".gallary");
let backbtn=document.getElementById("backbtn");
let nextbtn=document.getElementById("nextbtn");

scrollBar.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    scrollBar.scrollLeft +=evt.deltaY;
    scrollBar.style.scrollBehavior="auto";

});

nextbtn.addEventListener('click',()=>{
    scrollBar.scrollLeft += 900;
    scrollBar.style.scrollBehavior="smooth";

})
backbtn.addEventListener('click',()=>{
    scrollBar.scrollLeft -= 900;
    scrollBar.style.scrollBehavior="smooth";

    
})
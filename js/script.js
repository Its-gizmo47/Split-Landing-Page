let left = document.querySelector(".left");
let right = document.querySelector(".right");
let main = document.querySelector("main");

left.addEventListener("mouseenter",()=>{
    main.classList.add("left-active");
});
left.addEventListener("mouseleave",()=>{
    main.classList.remove("left-active");
});
right.addEventListener("mouseenter",()=>{
    main.classList.add("right-active");
});
right.addEventListener("mouseleave",()=>{
    main.classList.remove("right-active");
});
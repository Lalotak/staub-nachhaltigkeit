document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".navigation-button"),n=()=>{let e=document.querySelector(".navigation-menu");let n=document.querySelector("body");e.classList.contains("navigation-menu-visible")?(e.classList.remove("navigation-menu-visible"),n.classList.remove("scroll-disabled")):(e.classList.add("navigation-menu-visible"),n.classList.add("scroll-disabled"))};e.addEventListener("click",n)});
let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const navBar = document.querySelector(".navbar")
const bodywidth = window.innerWidth

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})


navBar.addEventListener("click", () => {
    

    if(bodywidth < 430){


    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)

    show = !show;
    }
    
})


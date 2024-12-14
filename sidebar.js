const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

let collapsedSidebarHeight = "56px";
let fullSidebarHeight = "calc(100hv -32px";


sidebarToggler.addEventListener("click" , () =>{
    sidebar.classList.toggle("collapsed");
});

const toggleMenu = (ismenuActive) => {
    sidebar.computedStyleMap.height = ismenuActive ? `${sidebar.scrollHeight}PX` : collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = ismenuActive ? "close" : "menu";
}

menuToggler.addEventListener("click" , () =>{
    toggleMenu(sidebar.classList.toggle("menu-active"))
})

window.addEventListener("resize" , () => {
    if (window.innerWidth >= 1024){
        sidebar.computedStyleMap.height = fullSidebarHeight;
    } else {
        sidebar.classList.remove("collapsed");
        sidebar.style.height = "auto";
        toggleMenu(sidebar.classList.contains("menu-active"))
    }
});
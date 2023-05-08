// about section
const tab=document.querySelector(".about-tabs");
const about_section=document.querySelector(".about-section");

tab.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item") &&  !e.target.classList.contains("active")){
tab.querySelector(".active").classList.remove("active");
e.target.classList.add("active");

const content=e.target.getAttribute("data-target");
 about_section.querySelector(".tab-content.active").classList.remove("active");
about_section.querySelector(content).classList.add("active");
}
});

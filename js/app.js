//Variables
const btnHtml = document.getElementById("btn_Html");
const btn_Css = document.getElementById("btn_Css");
const btn_Js = document.getElementById("btn_Js");
const btn_Sql = document.getElementById("btn_Sql");
const btn_Node = document.getElementById("btn_Node");

const menuClick = document.querySelector(".menuClick");
const menuResponsive = document.querySelector(".responsive-links");

let menuOpen = false;

//Click html img
btnHtml.addEventListener("click",()=>{
    window.open("https://aws1212.github.io/gameHtml/");
})
//Click css img
btn_Css.addEventListener("click",()=>{
    window.open("https://aws1212.github.io/gameHtmlCss/index.html");
})
//Click Js img
btn_Js.addEventListener("click",()=>{
    window.open("https://aws1212.github.io/gameJsCssHtml/");
})
//Click sql img
btn_Sql.addEventListener("click",()=>{
    window.open("https://aws1212.github.io/gameSqlServer/");
})
//Click node img
btn_Node.addEventListener("click",()=>{
    window.open("https://aws1212.github.io/gameNodeTable/");
})




//Click Menu
menuClick.addEventListener("click",()=>{
    if(!menuOpen){
        menuResponsive.classList.add("transitionClass");
        menuOpen = true;
    }
    else{
        menuResponsive.classList.remove("transitionClass");
        menuOpen = false;
    }
    
})

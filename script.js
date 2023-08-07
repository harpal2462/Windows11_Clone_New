let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

function openGoogle() {
    window.open("https://www.google.com", "_blank");
}
function openYahoo() {
    window.open("https://www.yahoo.com/", "_blank");
}

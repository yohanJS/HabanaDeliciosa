"use strict"

const $ = (id) => {
    return document.getElementById(id);
}

const changeToggle = () => {
    let toggle = $("toggle");
    if(toggle.getAttribute("src") == "./images-logo/toogle.svg") {
        toggle.src = "./images-logo/toogle-off.svg";
    } 
    else if (toggle.getAttribute("src") == "./images-logo/toogle-off.svg") {
        toggle.src = "./images-logo/toogle.svg";
    }
}


window.onload = () => {
    $("toggle").onclick = () => {
        changeToggle();
    }
}
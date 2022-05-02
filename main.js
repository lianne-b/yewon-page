///// nav

navOpened = document.getElementsByClassName("navOpened");


function openNav() {
    let nav = document.querySelector(".navOpened");
    nav.classList.toggle("hidden");
}


///// reel

function fullScreen() {
    const reel = document.getElementsByTagName("video")[0];
    if (reel.requestFullscreen) {
        reel.requestFullscreen();
    }else if (reel.mozRequestFullScreen) {
        reel.mozRequestFullScreen();
    }else if (reel.webkitRequestFullscreen) {
        reel.webkitRequestFullscreen();
    }else if (reel.msRequestFullscreen) { 
        reel.msRequestFullscreen();
    }else{
        alert("Full screen not supported");
        return;
    }
    reel.play();
}

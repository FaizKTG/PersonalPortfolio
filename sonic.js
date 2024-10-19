let sonic = document.getElementById("sonic");
let usthbLogo = document.getElementById("usthb");
let clickMeText = document.getElementById("sonicText");
let hasCollided = false;
let pos = 0;

sonic.addEventListener("mousedown", sonicAntiSabotage);

function sonicAntiSabotage() {
    console.log(sonic);
    sonic.style.backgroundImage = 'url("Images/SonicRun.gif")';
    moveRight();
    clickMeText.style.backgroundImage = 'none';
}

function moveRight() {
    sonic.style.left = pos + '%';
    if (pos < 45) requestAnimationFrame(moveRight);
    pos += 0.65; 
    // Animations
    if (pos >= 45) sonic.style.backgroundImage = 'url("Images/SonicWin.gif")';
    else if (pos > 30) sonic.style.backgroundImage = 'url("Images/SonicBall.gif")';   
    
    if (!hasCollided && onCollisionEnter(sonic, usthb)) {
        hasCollided = true;
        console.log("Sonic collided!");
        usthb.style.backgroundImage = 'url("Images/explosion.gif")';
        stopAfterInterval(usthb, 780);
    }
}

function stopAfterInterval(gif, interval) {
    setTimeout(() => {
        gif.style.backgroundImage = 'none'; 
    }, interval);
}


function onCollisionEnter(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}
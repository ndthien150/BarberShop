let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")

// The element.style will return the inline style attribute values and for setting style using javascript
// Use the window.getComputedStyle to see the rendered style.

menuBtn.onclick = function() {
    console.log(getComputedStyle(sideNav).right)
    if (getComputedStyle(sideNav).right === "0px") {
        sideNav.style.right = "-250px"
        menu.src = "images/menu.png"
    }
    else {
        sideNav.style.right = "0px"
        menu.src = "images/close.png"
        
    }
}

// let scroll = new SmoothScroll('a[href*="||"]', {
// 	speed: 500,
// 	speedAsDuration: true
// });
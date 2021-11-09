let images = Array.from(document.querySelectorAll("img")); // Grab All images
let behind = document.getElementById("behind");   // contol the background when image is clicked
let backimg = document.getElementById("backimg"); // control the url imgae
let next = document.getElementById("next");   // next button
let prev = document.getElementById("prev"); // prev button 
let close = document.getElementById("close");   // close button
let currentindex; // know the index of the image


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function (e) {
        behind.classList.replace("d-none", "d-block");
        let changeimg = e.target.getAttribute('src'); 
        backimg.style.backgroundImage = `url(${changeimg})`;
        currentindex = images.indexOf(e.target);
    })
}

function slide(i) {
    currentindex = currentindex + i;
    if (currentindex == images.length) {
        currentindex = 0;
    }
    if (currentindex < 0) {
        currentindex = images.length - 1;
    }
    let imgsrc = images[currentindex].getAttribute("src");
    backimg.style.backgroundImage = `url(${imgsrc})`;
}

next.addEventListener("click", function () {
    slide(1);
})


prev.addEventListener("click", function () {
    slide(-1);
})

function closeSlide() {
    behind.classList.replace("d-block", "d-none");
}
close.addEventListener("click", closeSlide)

document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        slide(1);
    }
    else if (e.key == "ArrowLeft") {
        slide(-1);
    }
    else if (e.key == "Escape") {
        closeSlide();
    }
})

// next.addEventListener("click", function () {
//     currentindex++;
//     if (currentindex == images.length) {
//         currentindex = 0;
//     }
//     let imgsrc = images[currentindex].getAttribute("src");
//     backimg.style.backgroundImage = `url(${imgsrc})`;

// })


// prev.addEventListener("click", function () {
//     currentindex--;
//     if (currentindex < 0) {
//         currentindex = images.length - 1;
//     }
//     let imgsrc = images[currentindex].getAttribute("src");
//     backimg.style.backgroundImage = `url(${imgsrc})`;

// })
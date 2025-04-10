let querySquare = document.querySelector('#black-square');
let parent = querySquare.parentNode;
let next = querySquare.nextSibling;
const toggleButton = document.getElementById("button-js");
let isVisible = true;
toggleButton.addEventListener("click", () => {
    if (isVisible) {
        querySquare.remove();
        isVisible = false;
    } else {
        parent.insertBefore(querySquare, next);
        isVisible = true;
    }
});
document.getElementById("button-css-js").addEventListener("click", () => {
    querySquare.classList.toggle("hidden");
});

// Subtask 4
document.getElementById("toggle-btn-sub-4").addEventListener("click", () => {
    const input = document.getElementById("input-line").value;
    if (!input) {
        return alert("Enter a selector!");
    }
    const elements = document.querySelectorAll(input);
    elements.forEach(selector => {
        selector.classList.toggle("hidden-sub-4");
    });
});

// Subtask 5
const yellowSquare = document.getElementById("yellow-square");
let clickCount = 0;
function firstClick() {
    alert("Hello World!");
    clickCount++;
    yellowSquare.removeEventListener("click", firstClick);
    yellowSquare.addEventListener("click", secondClick);
}
function secondClick() {
    yellowSquare.classList.add("hidden-yellow-square");
    yellowSquare.removeEventListener("click", secondClick);
}
yellowSquare.addEventListener("click", firstClick);

// Subtask 7
const inputSub7 = document.getElementById("input-sub-7");
const greenRectangle = document.getElementById("green-rectangle-sub-7");
inputSub7.addEventListener("input", (event) => {
   greenRectangle.style.opacity = event.target.value.length > 0 ? "0" : "1";
});

// Subtask 8
function showImage() {
    const inputURL = document.getElementById("input-sub-8").value;
    const imageDIV = document.getElementById("img-sub-8");
    if (!inputURL) alert("No input URL link to image");
    let img = document.createElement("img");
    img.src = inputURL;
    imageDIV.appendChild(img);
}

// Subtask 9
function showImages() {
    const inputURLs = document.getElementById("inputURLs").value;
    const imagesDIV = document.getElementById("imagesDIV");
    const links = inputURLs.split("\n");
    links.forEach(link => {
        const img = document.createElement("img");
        img.src = link;
        imagesDIV.appendChild(img);
    });
}

// Subtask 10
const  cursorBox = document.getElementById("cursor-box");
document.addEventListener("mousemove", (event) => {
    cursorBox.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});

// Subtask 11
window.addEventListener("DOMContentLoaded", () => {
   document.getElementById("current-lang").textContent = `browser language: ${navigator.language}`;
});

// Subtask 12
window.addEventListener("DOMContentLoaded", () => {
    const coordinateBOX = document.getElementById("current-coordinate");
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            coordinateBOX.textContent = `X: ${lat}, Y: ${lon}`;
        },
        (error) => {
            coordinateBOX.textContent = "No access to your geolocation.";
        }
    );
});

// Subtask 13
// Local storage
const localBlock = document.getElementById("local-block");
const savedLocal = localStorage.getItem("localText");
if (savedLocal) localBlock.innerText = savedLocal;
localBlock.addEventListener("input", () => {
   localStorage.setItem("localText", localBlock.innerText);
});
// Cookies
// read cookies
const cookieBlock = document.getElementById("cookie-block");
function getCookie(name) {
    const  cookies = document.cookie.split("; ");
    for (const c of cookies) {
        const [key, value] = c.split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return null;
}
// save cookies
function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}`;
}
const savedCookie = getCookie("cookieText");
if (savedCookie) cookieBlock.innerText = savedCookie;
cookieBlock.addEventListener("input", () => {
   setCookie("cookieText", cookieBlock.innerText);
});
// Session storage
const sessionBlock = document.getElementById("session-block");
const savedSession = sessionStorage.getItem("sessionText");
if (savedSession) sessionBlock.innerText = savedSession;
sessionBlock.addEventListener("input", () => {
    sessionStorage.setItem("sessionText", sessionBlock.innerText);
});

// Subtask 14
const btnToTop = document.getElementById("btn-sub-14");
window.addEventListener("scroll", () => {
   if (window.scrollY > 1850) {
       btnToTop.classList.add("show");
   } else {
       btnToTop.classList.remove("show");
   }
});
btnToTop.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});

// Subtask 15
const outsideBox = document.getElementById("outsideBox");
const insideBox = document.getElementById("insideBox");
outsideBox.addEventListener("click", () => {
   alert("Click on Outside YELLOW BOX");
});
insideBox.addEventListener("click", (event) => {
   alert("Click on Inside GREEN BOX");
   event.stopPropagation(); // stop alert in Outside BOX
});

// Subtask 16
const overlay = document.getElementById("sub-16__overlay");
const btnShowOverlay = document.getElementById("btn-sub-16__overlayShow");
btnShowOverlay.addEventListener("click", () => {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
});
overlay.addEventListener("click", () => {
   overlay.style.display = "none";
   document.body.style.overflow = "";
});

// Subtask 17
const formSub17 = document.getElementById("sub-17__form");
formSub17.addEventListener("submit", (event) => {
   event.preventDefault();
   alert("The form did not reload the page");
});

// Subtask 18
const dropZoneSub18 = document.getElementById("sub-18__drop-zone");
const fileInputSub18 = document.getElementById("sub-18__input");
const fileNameDisplaySub18 = document.getElementById("sub-18__file-name");
dropZoneSub18.addEventListener("click", () => {
   fileInputSub18.click();
});
fileInputSub18.addEventListener("change", () => {
   if (fileInputSub18.files.length > 0) {
       showFileName(fileInputSub18.files[0]);
   }
});
dropZoneSub18.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZoneSub18.classList.add("dragover");
});
dropZoneSub18.addEventListener("dragleave", () => {
    dropZoneSub18.classList.remove("dragover");
});
dropZoneSub18.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZoneSub18.classList.remove("dragover");
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        fileInputSub18.files = files;
        showFileName(files[0]);
    }
});
function showFileName(file) {
    fileNameDisplaySub18.textContent = `File selected: ${file.name}`;
}

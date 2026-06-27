var works = document.getElementsByClassName("row");
var modal = document.getElementsByClassName("modal");
let count = 0;
let toggleCount = 0;
//set modal equal to width of editor interface
for (let i = 0; i < modal.length; i++) {
    modal[i].style.width = document.getElementsByClassName("adobe-bg")[0].style.width;
    modal[i].style.height = document.getElementsByClassName("adobe-bg")[0].style.height;
    console.log(i);
};
//functions
//used for the home page... need to make this an external file
function setCount(number) {
    count = number;
    changeWork();
}
function previousWork() {
    count--;
    changeWork();
};
function nextWork() {
    count++;
    changeWork();
};
//functions for modals
function toggleText() {
    let currentModal = modal[count];
    if (toggleCount == 0) {
        currentModal.style.opacity = "1";
        toggleCount = 1;
    } else {
        closeModal();
    }
};
function closeModal() {
    modal[count].style.opacity = "0";
    toggleCount = 0;
}
function changeWork() {
    checkCount();
    //makes the current work visible
    let art = works[count];
    art.style.display = "flex";
    //set display to "none" for everything else
    for (let i = 0; i < works.length; i++) {
        if (i != count) {
            let current = works[i];
            current.style.display = "none";
            console.log("display: none");
        };
    };
    closeModal();
};
function checkCount() {
    if (count > works.length - 1) {
        count = 0;
    } else if (count < 0) {
        count = works.length - 1;
    }
};

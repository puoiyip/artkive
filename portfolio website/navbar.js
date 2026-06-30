//icon images
let leftIcon = document.getElementById("left-icon");
let currentIcon = document.getElementById("current-icon");
let rightIcon = document.getElementById("right-icon");  
//icon links
let leftLink = document.getElementById("left-link");
let currentLink = document.getElementById("current-link");
let rightLink = document.getElementById("right-link");
//page names
let leftName = document.getElementsByTagName("h3")[0];
let currentName = document.getElementsByTagName("h3")[1];
let rightName = document.getElementsByTagName("h3")[2];
//buttons
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
//count
let count = 0;
let rowCount = 0;
let imageCount = 0
//NAVIGATION constIABLES
const icons = [
    "portfolio images/doodlebomb.png",
    "portfolio images/colorpop.png",
    "portfolio images/fake_media.png",
    "portfolio images/fantastical_beast.png"
];
const htmlLinks = [
    "ibispaint.html",
    "photoshop.html",
    "illustrator.html",
    "videos.html"
];
const pageNames = [
    "ibisPaint X",
    "Photoshop",
    "Illustrator",
    "Videos"
];
//NAVIGATION FUNCTIONS
function leftButtonClick() {
    count--;
    changeIcons();
};
function rightButtonClick() {
    count++;
    changeIcons();
};
function changeIcons() {
    if (count >= icons.length) {
        count = 0;
    } else if (count < 0) {
        count = icons.length - 1;
    }
    console.log("count: " + count);
    console.log("length: " + icons.length);
    //rotate the icon images
    currentIcon.src = icons[checkCount(count)];
    leftIcon.src = icons[checkCount(count - 1)];
    rightIcon.src = icons[checkCount(count + 1)];
    //rotate the links 
    currentLink.href = htmlLinks[checkCount(count)];
    leftLink.href = htmlLinks[checkCount(count - 1)];
    rightLink.href = htmlLinks[checkCount(count + 1)];
    //rotate the text
    currentName.innerHTML = pageNames[checkCount(count)];
    leftName.innerHTML = pageNames[checkCount(count - 1)];
    rightName.innerHTML = pageNames[checkCount(count + 1)];
};
function checkCount(value) {
    //greatest index that doesnt cause an index out of bounds error
    const maxIndex = icons.length - 1;
    //if the value is negative, set it to the max
    if (value < 0) {
        console.log(maxIndex);
        return maxIndex;
    //if the value is greater than the max, set it to 0
    } else if (value > maxIndex) {
        console.log(0)
        return 0;
    };
    console.log(value);
    return value;
};

// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const toggledParagraph = document.querySelector(".original");

function colorParagraph() {
    toggledParagraph.classList.toggle("green");
    toggledParagraph.classList.toggle("original");
}

function opaceParagraph() {
    toggledParagraph.classList.toggle("disappear");
    toggledParagraph.classList.toggle("original");
}

const colorButton = document.querySelector(".color");

colorButton.addEventListener("click", colorParagraph);

const opaceButton = document.querySelector(".size");

opaceButton.addEventListener("click", opaceParagraph);

const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const backImg = document.createElement("img");

backImg.src = `img/${chosenImg}`;
document.body.appendChild(backImg); 
const pics = [
    "imgs/both_tree.jpg",
    "imgs/both_couch.jpg",
    "imgs/greg_house.jpg",
    "imgs/sofi_house.jpg",
    "imgs/greg_down.jpg",
    "imgs/sofi_down.jpg"
];

const btn = document.querySelector("button");
const img = document.querySelector("img");
let counter = 1;

btn.addEventListener("click", () => {
    if (counter === pics.length)
        counter = 0;
    img.src = pics[counter]
    counter++;
});
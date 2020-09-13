const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const slider = document.getElementById("slider")
const sliderMiddle = document.querySelector(".slider-middle")
const sliderItem=document.querySelectorAll(".slider-item")
const firstClone = slider.querySelectorAll(".slider-item")[0].cloneNode(true)
const lastClone = slider.querySelectorAll(".slider-item")[slider.querySelectorAll(".slider-item").length - 1].cloneNode(true)

sliderMiddle.appendChild(firstClone)
sliderMiddle.prepend(lastClone)

let sliderWidth = slider.offsetWidth * slider.querySelectorAll(".slider-item").length
sliderMiddle.style.width = sliderWidth + "px"


// Cloned add Class last
slider.querySelectorAll(".slider-item")[slider.querySelectorAll(".slider-item").length-1]
.setAttribute("id","lastClone")


// Cloned add Class First
slider.querySelectorAll(".slider-item")[0]
.setAttribute("id","firstClone")

var currentSlide = 1;
Update();
function Update() {
    sliderMiddle.style.transform = "translateX(" + -(currentSlide * slider.offsetWidth) + "px" + ")";
}

next.addEventListener("click",NextSlider)
prev.addEventListener("click",PrevSlider)

function NextSlider() {
    currentSlide = (currentSlide + 1 + sliderItem.length) % sliderItem.length
    Update()

}

function PrevSlider() {
    currentSlide = (currentSlide - 1 + sliderItem.length) % sliderItem.length
    Update()

}
TextDown()
createSlider()

function TextDown() {
  let ourText = document.querySelector(".our")
  let indexSection = document.querySelector(".indexTwo")

  if (ourText && indexSection) {
    function textOneScroll() {
      let sectionRect = indexSection.getBoundingClientRect()
      let sectionTop = sectionRect.top

      let maxMovePx = (window.innerWidth * 23) / 100
      let currentTop = 0
      let startActivationLine =
        window.innerHeight - (window.innerWidth * 20) / 100

      if (sectionTop < startActivationLine) {
        currentTop = startActivationLine - sectionTop
      }
      if (currentTop > maxMovePx) {
        currentTop = maxMovePx
      }

      ourText.style.top = currentTop + "px"
    }

    window.addEventListener("scroll", textOneScroll)
  }
}

function createSlider() {
  let images = [
    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg",
    "images/slider4.jpg",
    "images/slider5.jpg"
  ]

  let currentIndex = 0

  let sliderImg = document.getElementById("sliderImage")
  let btnLeft = document.querySelector(".arrowLeft")
  let btnRight = document.querySelector(".arrowRight")

  if (sliderImg && btnLeft && btnRight) {
    function showNextImage() {
      currentIndex = currentIndex + 1
      if (currentIndex >= images.length) {
        currentIndex = 0
      }
      sliderImg.src = images[currentIndex]
    }

    function showPrevImage() {
      currentIndex = currentIndex - 1
      if (currentIndex < 0) {
        currentIndex = images.length - 1
      }
      sliderImg.src = images[currentIndex]
    }

    btnRight.addEventListener("click", showNextImage)
    btnLeft.addEventListener("click", showPrevImage)
  }
}

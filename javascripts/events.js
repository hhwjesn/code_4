tablePoster()
eventsScroll()

function tablePoster() {
  document.addEventListener("DOMContentLoaded", function () {
    let eventRows = document.querySelectorAll(".eventsTableOne td:last-child")
    let popupImages = document.querySelectorAll(".eventPopupImg")

    if (eventRows.length > 0 && popupImages.length > 0) {
      eventRows.forEach(function (row) {
        row.addEventListener("click", function (event) {
          event.stopPropagation()
          let src1 = row.getAttribute("data-img1")
          let src2 = row.getAttribute("data-img2")
          let src3 = row.getAttribute("data-img3")

          popupImages[0].src = src1
          popupImages[1].src = src2
          popupImages[2].src = src3
          popupImages.forEach(function (img) {
            img.classList.toggle("active")
          })
        })
      })

      popupImages.forEach(function (img) {
        img.addEventListener("click", function () {
          popupImages.forEach(function (item) {
            item.classList.remove("active")
          })
        })
      })

      window.addEventListener("click", function () {
        popupImages.forEach(function (img) {
          img.classList.remove("active")
        })
      })
    }
  })
}

function eventsScroll() {
  document.addEventListener("DOMContentLoaded", function () {
    // Находим элементы заголовков событий на странице
    let eventsText = document.querySelector(".headEventsOne")
    let eventsSection = document.querySelector(".eventsTwo")

    if (eventsText && eventsSection) {
      function handleEventsScroll() {
        let sectionRect = eventsSection.getBoundingClientRect()
        let sectionTop = sectionRect.top
        let maxMovePx = (window.innerWidth * 35) / 100
        let currentTop = 0

        let startActivationLine =
          window.innerHeight - (window.innerWidth * 20) / 100

        if (sectionTop < startActivationLine) {
          currentTop = (startActivationLine - sectionTop) * 2.5
        }

        if (currentTop > maxMovePx) {
          currentTop = maxMovePx
        }

        if (currentTop < 0) {
          currentTop = 0
        }

        eventsText.style.top = currentTop + "px"
      }

      window.addEventListener("scroll", handleEventsScroll)
    }
  })
}

createZine()

function createZine() {
  document.addEventListener("DOMContentLoaded", function () {
    let zineContainer = document.getElementById("zine1")
    let zinePages = document.querySelectorAll(".zinePage")

    let currentStep = 0

    if (zineContainer && zinePages.length > 0) {
      function changePage() {
        if (currentStep < zinePages.length) {
          zinePages[currentStep].classList.add("active")
          currentStep = currentStep + 1
        } else {
          zinePages.forEach(function (page) {
            page.classList.remove("active")
          })
          currentStep = 0
        }
      }

      zineContainer.addEventListener("click", changePage)
    }
  })
}

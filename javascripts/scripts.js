burger()
submitForm()

function burger() {
  let burgerBtn = document.querySelector("#burger")
  let menu = document.querySelector(".mainMenu")
  let closeBtn = document.querySelector(".menuCloseBtn")

  if (burgerBtn && menu) {
    burgerBtn.addEventListener("click", function () {
      burgerBtn.classList.toggle("active")
      menu.classList.toggle("active")
    })

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        burgerBtn.classList.remove("active")
        menu.classList.remove("active")
      })
    }

    let menuLinks = menu.querySelectorAll("a")
    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        burgerBtn.classList.remove("active")
        menu.classList.remove("active")
      })
    })
  }
}

function submitForm() {
  let form = document.querySelector("form")
  let modalWindow = document.querySelector(".modalWindow")
  let windowBox = document.querySelector(".window")

  if (form && modalWindow && windowBox) {
    form.addEventListener("submit", function (event) {
      event.preventDefault()
      let userName = form.userName.value
      let message = `Спасибо, ${userName}, данные записаны.`
      windowBox.innerHTML = message
      modalWindow.style.display = "flex"
    })

    modalWindow.addEventListener("click", function () {
      modalWindow.style.display = "none"
    })
  }
}

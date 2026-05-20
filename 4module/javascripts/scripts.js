// скрипты для всех страниц на сайте

burger()
submitForm()
input()

function burger() {
  let burger = document.querySelector("#burger")

  burger.addEventListener("click", () => {
    burger.classList.toggle("active")
  })
}

function submitForm() {
  let form = document.querySelector("form")
  let modalWindow = document.querySelector(".modalWindow")
  let window = document.querySelector(".window")

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    let userName = form.userName.value

    let message = `Спасибо, ${userName}, данные записаны.`

    window.innerHTML = message

    modalWindow.style.display = "flex"
  })

  modalWindow.addEventListener("click", () => {
    modalWindow.style.display = "none"
  })
}

function input() {
  let phoneInput = document.querySelector('input[type="tel"]')

  // phoneInput.addEventListener('input', () => {
  //   let formatted = ''
  //   let numbers = this.value
  //   console.log(numbers)

  //   if (numbers.length > 10) {
  //     numbers = numbers.substring(0, 10)
  //   }

  //   if (numbers.length > 0) {
  //     formatted += '(' + numbers.substring(0, 3)
  //   } else if (numbers.length >= 4) {
  //     formatted += ')' + numbers.substring(3, 6)
  //   } else if (numbers.length >= 7) {
  //     formatted += '-' + numbers.substring(6, 8)
  //   } else if (numbers.length >= 9) {
  //     formatted += '-' + numbers.substring(8, 10)
  //   }

  //   this.value = formatted
  // })

  // phoneInput.addEventListener('keypress', (event) => {
  //   if (!/[0-9]/.test(event.key)) {
  //     event.preventDefault
  //   }
  // })
}

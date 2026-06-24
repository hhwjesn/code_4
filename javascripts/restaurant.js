createForm()

function createForm() {
  const modal = document.getElementById("lectureModal")
  const closeBtn = document.querySelector(".closeBtn")
  const form = document.getElementById("lectureForm")

  const openBtns = document.querySelectorAll(".bookButton")

  openBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      modal.style.display = "block"
    })
  })

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
  })

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    alert("Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.")
    modal.style.display = "none"
    form.reset()
  })
}

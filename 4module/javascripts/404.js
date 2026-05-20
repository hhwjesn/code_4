createStars()
parallax()
fireAnimation()

function createStars() {
  let container = document.querySelector(".stars")
  let starCount = 120

  for (let i = 0; i < starCount; i++) {
    let star = document.createElement("div")
    star.classList.add("star")

    let size = Math.random() * 1.8 + 0.4

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 5 + 2}s;
      animation-delay: -${Math.random() * 6}s;
    `
    container.appendChild(star)
  }
}

function parallax() {
  let main = document.querySelector("main")

  document.addEventListener("mousemove", (event) => {
    let x = (event.clientX / window.innerWidth - 0.4) * 10
    let y = (event.clientY / window.innerHeight - 0.4) * 6

    main.style.transform = `translate(${x}px, ${y}px)`
  })
}

function fireAnimation() {
  let button = document.querySelector(".fire")
  let header = document.querySelector("h1")
  let cnt = 1

  button.addEventListener("click", () => {
    button.classList.toggle("active")
    header.classList.toggle("active")

    cnt++

    if (cnt % 2 == 0) {
      button.innerText = "погасить"
    } else {
      button.innerText = "зажечь"
    }
  })
}

roomTable()

function roomTable() {
  document.addEventListener("DOMContentLoaded", function () {
    let roomTabs = document.querySelectorAll(".roomsName")
    let descriptionCell = document.querySelector(".roomDescription")
    let roomImg = document.querySelector(".photoRoom img")

    if (roomTabs.length > 0 && descriptionCell && roomImg) {
      roomTabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
          roomTabs.forEach(function (item) {
            item.classList.remove("active")
          })
          tab.classList.add("active")

          descriptionCell.style.opacity = "0"
          roomImg.style.opacity = "0"

          setTimeout(function () {
            let newDescription = tab.getAttribute("data-description")
            let newImageSrc = tab.getAttribute("data-image")

            descriptionCell.textContent = newDescription
            roomImg.src = newImageSrc
            descriptionCell.style.opacity = "1"
            roomImg.style.opacity = "1"
          }, 200)
        })
      })
    }
  })
}

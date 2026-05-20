let afisha = [
  {
    date: "осталось 6",
    header: "Стандартный одноместный",
    description:
      "Уютный номер, рассчитанный на одного гостя, с компактной планировкой и всем необходимым для комфортного отдыха после рабочего дня.",
    duration: "Выбрать дату",
    time: ["рабочая зона", "телевизор", "Wi‑Fi", "..."],
    button: "Забронировать"
  },
  {
    date: "осалось 4",
    header: "Стандартный двухместный",
    description:
      "Просторный номер для двух гостей с возможностью размещения на двух раздельных кроватях или одной двуспальной кровати.",
    duration: "Выбрать дату",
    time: ["рабочая зона", "телевизор", "Wi‑Fi", "..."],
    button: "Забронировать"
  },
  {
    date: "осталось 6",
    header: "Делюкс",
    description:
      "Номер улучшенной категории с увеличенной площадью, более дорогой отделкой и расширенной комплектацией, зоной отдыха и дополнительными удобствами в ванной комнате.",
    duration: "Выбрать дату",
    time: ["зона отдыха", "Халат", "тапочки", "..."],
    button: "Забронировать"
  },
  {
    date: "осталось меньше 3",
    header: "Люкс (стандарт)",
    description:
      "Просторный однокомнатный номер улучшенной планировки, разделённый на спальную и гостиную зоны. Предназначен для гостей, ценящих личное пространство и желающих принимать посетителей.",
    duration: "Выбрать дату",
    time: ["гостиная зона", "кофемашина", "увеличенная ванная", "..."],
    button: "Забронировать"
  },
  {
    date: "осталось меньше 3",
    header: "Люкс (семейный)",
    description:
      "Двухкомнатный номер оптимизированной площади, рассчитанный на проживание двух взрослых и одного-двух детей. Включает отдельную спальню для родителей, гостиную с дополнительным спальным местом.",
    duration: "Выбрать дату",
    time: ["гостиная зона", "детские принадлежности", "..."],
    button: "Забронировать"
  },
  {
    date: "осталось 4",
    header: "Президентский",
    description:
      "Самая престижная категория номера, занимающая отдельный этаж или флигель, с эксклюзивным дизайном, несколькими комнатами, предлагает персональный сервис.",
    duration: "Выбрать дату",
    time: ["терраса", "консьерж", "2 этажа", "..."],
    button: "Забронировать"
  }
]

createAfishaCards()

function createAfishaCards() {
  afisha.forEach((item) => {
    let date = document.createElement("p")
    date.classList.add("afishaDate")
    date.innerText = item.date

    let header = document.createElement("h3")
    header.classList.add("afishaHeader")
    header.innerText = item.header

    let description = document.createElement("p")
    description.classList.add("afishaDescription")
    description.innerText = item.description

    let duration = document.createElement("p")
    duration.classList.add("afishaDuration")
    duration.innerText = item.duration

    let timeWrapper = document.createElement("div")
    timeWrapper.classList.add("afishaTimeWrapper")

    let button = document.createElement("div")
    button.classList.add("button")
    button.innerText = item.button

    item.time.forEach((timeEl) => {
      let time = document.createElement("span")
      time.classList.add("afishaTime")
      time.innerText = timeEl

      timeWrapper.appendChild(time)
    })

    let card = document.createElement("div")
    card.classList.add("afishaCard")

    card.appendChild(date)
    card.appendChild(duration)
    card.appendChild(header)
    card.appendChild(description)
    card.appendChild(timeWrapper)
    card.appendChild(button)

    document.querySelector(".afisha").appendChild(card)
  })
}

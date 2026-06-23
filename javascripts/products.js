let products = [
  {
    id: 1,
    title: "Футболка",
    price: 3500,
    image:
      "https://www.nt-nn.com/_data/resources/img/thumbnails/13961.61_10_1000x1000.jpg"
  },
  {
    id: 2,
    title: "Кружка",
    price: 1200,
    image:
      "https://cdn-sh1.vigbo.com/shops/f34e24d04d28403926ae32b898e0b9e0/products/26278026/images/3-fbf1173e7a46dc4cb386221f07aab33b.JPG"
  },
  {
    id: 3,
    title: "Пин",
    price: 1500,
    image: "https://www.basketshop.ru/files/catalog/36480/SB%20(2).JPG"
  }
]

renderProducts()
updateCartCount()

function renderProducts() {
  let productList = document.querySelector(".productList")
  productList.innerHTML = ""

  products.forEach((product) => {
    let productCard = document.createElement("div")
    productCard.classList.add("product")
    // <img src="${product.image}" alt="${product.title}" />
    productCard.innerHTML = `
     
      <div class="productInfo">
       <h3>${product.title}</h3>
        <p>${product.price} ₽</p>
        <div class="productButtons">
          <button onclick="removeFromCart(${product.id})">-</button>
          <p>${getProductCount(product.id)}</p>
          <button onclick="addToCart(${product.id})">+</button>
        </div>
      </div>
    `

    productList.appendChild(productCard)
  })
}

function setCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))

  updateCartCount()
  renderProducts()
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart"))
}

function getProductCount(productId) {
  let cart = getCart()
  let item = cart.find((p) => p.id === productId)

  return item ? item.quantity : 0
}

function removeFromCart(productId) {
  let cart = getCart()

  let index = cart.findIndex((p) => p.id === productId)

  if (index != -1) {
    if (cart[index].quantity > 0) {
      cart[index].quantity -= 1
    }
  } else {
    cart.splice(index, 0)
  }

  setCart(cart)
}

function addToCart(productId) {
  let cart = getCart()

  let index = cart.findIndex((p) => p.id === productId)

  if (index != -1) {
    cart[index].quantity += 1
  } else {
    let item = products.find((p) => p.id === productId)

    if (item) {
      cart.push({ ...item, quantity: 1 })
    }
  }

  setCart(cart)
}

function updateCartCount() {
  let cart = getCart()
  let cnt = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)

  document.querySelector(".productCnt").innerHTML = cnt
}

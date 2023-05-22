const products = document.querySelectorAll(".product");
const orderList = document.querySelector(".order-list");
const totalPriceElem = document.querySelector(".total-price");
const buyBtn = document.querySelector(".buy-button");

let totalPrice = 0;

products.forEach((product) => {
  product.addEventListener("click", () => {
    const img = product.querySelector("img");
    const price = parseFloat(
      product.querySelector(".price").innerHTML.slice(1).replace(",", ".")
    );
    totalPrice += price;
    const li = document.createElement("li");
    li.innerHTML = `
      <div style="position: relative;">
        <img src="${img.src}" class="product-image">
        <div class="delete-icon">
          <span>X</span>
        </div>
      </div>
      <span class="product-price">€${price
        .toFixed(2)
        .toString()
        .replace(".", ",")}</span>
`;

    const deleteIcon = li.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", () => {
      totalPrice -= price;
      orderList.removeChild(li);
      totalPriceElem.innerHTML = `Total: €${totalPrice
        .toFixed(2)
        .toString()
        .replace(".", ",")}`;
    });

    const productContainer = li.querySelector("div");
    productContainer.addEventListener("mouseover", () => {
      deleteIcon.style.display = "block";
    });

    productContainer.addEventListener("mouseout", () => {
      deleteIcon.style.display = "none";
    });

    orderList.appendChild(li);
    totalPriceElem.innerHTML = `Total: €${totalPrice
      .toFixed(2)
      .toString()
      .replace(".", ",")}`;
  });
});

buyBtn.addEventListener("click", () => {
  totalPrice = 0;
  orderList.innerHTML = "";
  totalPriceElem.innerHTML = "Total: €0";
  alert("Enjoy your meal!");
});

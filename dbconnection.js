
// fetch("../dbcoonetion.php.php")
fetch('http://localhost/dbcoonetion.php')
  .then((response) => response.json())
  .then((products) => {
    insertProducts(products);
  })
  .catch((error) => console.error("Ошибка: ", error));
  
function insertProducts(products) {
  const flexContainer = document.querySelector(".productsdiv"); // Замените на ваш селектор div с display: flex

  for (const product of products) {
    const productDiv = document.createElement("div");
    productDiv.className += "divcelldiv"

    productDiv.innerHTML = `
        <div class="divwithimg">
          <img src="${product.image_url}"/>
        </div>
        <div class="divwithspan">
            <span>${product.price} ₽</span>
        </div>
        <div class="divwithname">
            <a>${product.description}</a>
        </div>
          <button id='addinbasket' onclick='myfunction()'>В корзину</button>
    `;
    // productDiv.innerHTML = `
    //   <div class="card">
    //     <img src="${product.image_url}" alt="${product.name}" />
    //     <div class="card-body">
    //       <h2 class="card-title">${product.name}</h2>
    //       <p>Артикул: ${product.article}</p>
    //       <p>Категория: ${product.category_id}</p>
    //       <p class="card-text">${product.description}</p>
    //       <p>Цена: ${product.price}</p>
    //     </div>
    //   </div>
    // `;

    flexContainer.appendChild(productDiv);
  }
}







// fetch("../dbcoonetion.php.php")
//получение данных продуктов из бд
fetch('http://localhost/dbcoonetion.php')
  .then((response) => response.json())
  .then((products) => {
    insertProducts(products);
  })
  .catch((error) => console.error("Ошибка: ", error));


  function insertProducts(products) {
    const flexContainer = document.querySelector(".productsdiv");
  
    for (const product of products) {
      const productDiv = document.createElement("div");
      productDiv.className += "divcelldiv";
      const button = document.createElement("button");
      button.innerText = "В корзину";
      button.addEventListener("click", function() {
        console.log(product);
        const data = {
          product_id: product.product_id,
          article: product.article,
          name: product.name,
          description: product.description,
          price: product.price,
          image_url: product.image_url
        };
        fetch('http://localhost/addinbasket.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          return response.json();
      })
      .then(data => {
          console.log('Товар добавлен');
          $.ajax({
            url: 'http://localhost/updatecartquantity.php',
            type: 'POST',
            dataType: 'JSON',
            success: function(response) {
              $('#cart-quantity').text(response);
            },
            error: function(error) {
              console.error('AJAX request failed', error);
            }
          });
      })
      .catch(error => {
          console.error(error);
      });
      });
  
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
              `;
              
              productDiv.appendChild(button);
              flexContainer.appendChild(productDiv);
            }
          }
          
          // function insertProducts(products) {
//   const flexContainer = document.querySelector(".productsdiv"); // Замените на ваш селектор div с display: flex

//   for (const product of products) {
  //     const productDiv = document.createElement("div");
  //     productDiv.className += "divcelldiv"
  
  //     productDiv.innerHTML = `
  //         <div class="divwithimg">
  //           <img src="${product.image_url}"/>
  //         </div>
  //         <div class="divwithspan">
  //             <span>${product.price} ₽</span>
  //         </div>
  //         <div class="divwithname">
//             <a>${product.description}</a>
//         </div>
//           <button id='addinbasket' data-product-id='${product.product_id}' data-product-article=' ${product.article} ' data-product-name='${product.name}' data-product-description='${product.description}' data-product-price='${product.price}' data-product-imgurl='${product.image_url}'>В корзину</button>
//     `;

//     flexContainer.appendChild(productDiv);
     
//     console.log('элементы загружены');
//   }
// }
 

// for (var j = 0; j < addToBasketButtons.length; j++) {
//   var button = addToBasketButtons[j];
//   button.addEventListener('click', function (event) {

//     console.log('уууууууууу');
//     // Make an HTTP POST request to add the product to the Basket table in the database
//     fetch('http://localhost/addinbasket.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         productId: productId,
//         productArticle: productArticle,
//         productName: productName,
//         productDescription: productDescription,
//         productPrice: productPrice,
//         productImgurl: productImgurl
//       })
//     })
//       .then(response => {
//         console.log('then');
//         // Handle the response from the server
//       })
//       .catch(error => {
//         // Handle errors here
//         console.log('catch');
//       });
//   });
// }

// function addToCart(productId) {
//   alert(productId);
//   const data = {
//     productId: productId
//   };

//   axios.post('http://localhost/addinbasket.php', data)
//     .then(response => {
//       console.log(response.data);
//       // do something with the response
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

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






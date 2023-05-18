var quantity = 0;
var fullprice = 0;
fetch('http://localhost/getcartitem.php')
  .then((response) => response.json())
  .then((products) => {
    insertProducts(products);
  })
  .catch((error) => console.error("Ошибка: ", error));

  function insertProducts(products) {
    const flexContainer = document.querySelector(".maindiv-a2-b2-c1-d2-e2-products");
    for(const product of products){
        const contentDiv = document.createElement("div");
        const contentDiv2 = document.createElement("div");
        const productimg = document.createElement("img");
        productimg.setAttribute("src", product.image_url)
        const separatordiv = document.createElement("div");
        separatordiv.classList.add("productsseparator");
        const pproductquantity = document.createElement("p");
        pproductquantity.classList.add("productsquantityp");
        const spanprodictquantity = document.createElement("span");
        spanprodictquantity.setAttribute("id", "productsquantityspan");
        spanprodictquantity.textContent = `${product.quantity} шт.`;
        const pproductprice = document.createElement("p");
        const spanproductprice = document.createElement("span");
        spanproductprice.setAttribute("id", "productstotalpricespan");
        spanproductprice.textContent = `${product.price} ₽ / шт.`;
        contentDiv2.append(productimg,separatordiv);
        pproductquantity.appendChild(spanprodictquantity);
        pproductprice.appendChild(spanproductprice);
        contentDiv.append(contentDiv2,pproductquantity,pproductprice);
        flexContainer.appendChild(contentDiv);
        quantity += parseInt(product.quantity);
        fullprice += parseInt(product.price * product.quantity);
    }
    $('#productauntity').text(quantity);
    $('#productauntity').text(quantity);
    $('#totalprice').text(fullprice);
    $('#totalprice2').text(fullprice);
  }
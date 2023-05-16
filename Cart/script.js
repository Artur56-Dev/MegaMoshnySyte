

var fullprice = 0;
var quantity = 0;
fetch('http://localhost/getcartitem.php')
    .then((response) => response.json())
    .then((products) => {
        insertProducts(products);
    })
    .catch((error) => console.error("Ошибка: ", error));


function insertProducts(products) {
    const flexContainer = document.querySelector(".aa1-bb1");

    for (const product of products) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("aa1-bb2main");

        const productInnerDiv = document.createElement("div");
        productInnerDiv.classList.add("aa1-bb3main");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("aa1-cc1");
        const img = document.createElement("img");
        img.setAttribute("alt", "None");
        img.setAttribute("src", product.image_url);
        imgDiv.appendChild(img);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("aa1-cc2");
        const descriptionP = document.createElement("p");
        descriptionP.textContent = product.description;
        descriptionDiv.appendChild(descriptionP);

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("aa1-cc3");
        const priceSpan = document.createElement("span");
        priceSpan.setAttribute("id", "productprice");
        priceSpan.textContent = `${product.price * product.quantity} ₽`;
        priceDiv.appendChild(priceSpan);

        const controlsDiv = document.createElement("div");
        controlsDiv.classList.add("aa1-cc4");

        const plusMinusDiv = document.createElement("div");
        plusMinusDiv.classList.add("aa1-cc3-dd1");
        const minusBtn = document.createElement("button");
        minusBtn.classList.add("btnminus");
        minusBtn.textContent = "-";
        minusBtn.addEventListener('click', function () {
            const data = {
                product_id: product.product_id
            };
            console.log(quantityP.textContent);
            if (parseInt(quantityP.textContent) !== 1) {
                $.ajax({
                    url: 'http://localhost/decrementquantity.php',
                    method: 'POST',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (response) {
                        console.log(response);
                        location.reload();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.error('Error: ' + textStatus, errorThrown);
                    }
                });
            }
            else {
                alert('Товара не может бать меньше одного');
            }
        });
        const quantityDiv = document.createElement("div");
        const quantityP = document.createElement("p");
        quantityP.classList.add("quantityP");
        quantityP.textContent = product.quantity;
        quantityDiv.appendChild(quantityP);
        const plusBtn = document.createElement("button");
        plusBtn.classList.add("btnplus");
        plusBtn.textContent = "+";
        plusBtn.addEventListener('click', function () {
            const data = {
                product_id: product.product_id
            };
            if (parseInt(quantityP.textContent) !== 10) {
                $.ajax({
                    url: 'http://localhost/incrementquantity.php',
                    method: 'POST',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function (response) {
                        console.log(response);
                        location.reload();
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.error('Error: ' + textStatus, errorThrown);
                    }
                });

            }
            else {
                alert('Больше 10 товаров можно заказывать только как компания');
            }
        });
        plusMinusDiv.append(minusBtn, quantityDiv, plusBtn);

        const likeDeleteDiv = document.createElement("div");
        likeDeleteDiv.classList.add("aa1-cc3-dd1", "aa1-cc3-dd11");
        const likeBtn = document.createElement("button");
        likeBtn.classList.add("btnlikeproduct");
        likeBtn.addEventListener('click', function () {

        });
        const likeSpan = document.createElement("span");
        likeSpan.classList.add("material-symbols-outlined");
        likeSpan.textContent = "favorite";
        likeBtn.appendChild(likeSpan);
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btndeliteproduct");
        deleteBtn.addEventListener('click', function () {
            const data = {
                product_id: product.product_id
            };
            $.ajax({
                url: 'http://localhost/daleteitemincart.php',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (response) {
                    console.log(response.message);
                    location.reload();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error: ' + textStatus, errorThrown);
                }
            });
        });
        const deleteSpan = document.createElement("span");
        deleteSpan.classList.add("material-symbols-outlined");
        deleteSpan.textContent = "delete";
        deleteBtn.appendChild(deleteSpan);
        likeDeleteDiv.append(likeBtn, deleteBtn);

        controlsDiv.append(plusMinusDiv, likeDeleteDiv);

        productInnerDiv.append(imgDiv, descriptionDiv, priceDiv, controlsDiv);
        productDiv.appendChild(productInnerDiv);
        flexContainer.appendChild(productDiv);
        fullprice += product.price * product.quantity;
        quantity += parseInt(product.quantity);
    }
    $('#full_price1').text(fullprice + ' ₽');
    $('#full_price2').text(fullprice + ' ₽');
    $('#quantityproduct').text('Товары, ' + quantity + 'шт.');
    console.log(quantity);
    $('.aa1-bb2-cc1').click(function () {
        const data = {
            total_peice: parseInt(fullprice)
        };
        if(quantity != 0)
        {
            console.log(fullprice);
            $.ajax({
                url: 'http://localhost/placeanorder.php',
                method: 'POST',
                dataType: 'JSON',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (){

                },
                error: function (jqXHR, textStatus, errorTrown){
                    console.error('Error: ' + textStatus, errorTrown);
                }
            });
        }
        else{
            alert('В корзине нет товаров');
        }
    });
    // const productDiv = document.createElement("div");
    // productDiv.className += "aa1-bb2main";
    // const plusminusDiv = document.createElement("div");
    // const divwithquantity = document.createElement("div");
    // const pwithquantity = document.createElement("div");
    // pwithquantity.innerText = product.quantity;
    // plusminusDiv.className = "aa1-cc3-dd1";
    // const button1 = document.createElement("button");
    // const button2 = document.createElement("button");
    // button1.className = "btnminus";
    // button1.innerText = "-";
    // button2.className = "btnplus";
    // button2.innerText = "+";
    // divwithquantity.appendChild(pwithquantity);
    // plusminusDiv.appendChild(button1);
    // plusminusDiv.appendChild(divwithquantity);
    // plusminusDiv.appendChild(button2);
    // button1.addEventListener("click", function () {
    //     const data = {
    //         product_id: product.product_id
    //     };
    //     console.log('Хорош');
    // });
    // button2.addEventListener("click", function () {
    //     const data = {
    //         product_id: product.product_id
    //     };
    //     console.log('Хорош');
    // });

    // productDiv.innerHTML = `
    //                 <div class="aa1-bb3main">
    //                     <div class="aa1-cc1">
    //                         <img alt="None" src="${product.image_url}">
    //                     </div>
    //                     <div class="aa1-cc2">
    //                         <p>${product.description}</p>
    //                     </div>
    //                     <div class="aa1-cc3">
    //                         <span id="productprice">${product.price * product.quantity}  ₽</span>
    //                     </div>
    //                     <div class="aa1-cc4">
    //                         <div class="aa1-cc3-dd1">
    //                             <button class="btnminus">-</button>
    //                             <div>
    //                                 <p>${product.quantity}</p>
    //                             </div>
    //                             <button class="btnplus">+</button>
    //                         </div>
    //                         <div class="aa1-cc3-dd1 aa1-cc3-dd11">
    //                             <button class="btnlikeproduct">
    //                                 <span class="material-symbols-outlined">
    //                                     favorite
    //                                 </span>
    //                             </button>
    //                             <button class="btndeliteproduct">
    //                                 <span class="material-symbols-outlined">
    //                                     delete
    //                                 </span>
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>`;

    // flexContainer.appendChild(productDiv);

}


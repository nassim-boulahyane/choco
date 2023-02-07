let carts = document.querySelectorAll('.boutonBoutique');

let products = [
    {
        name: "Cerisier",
        tag: "Le Cerisier",
        price: 2.99,
        inCart: 0,
        image: "./images/produit1.jpg"
    },
    {
        name: "Coulis Caramel",
        tag: "Le Coulis Caramel",
        price: 13.99,
        inCart: 0,
        image: "./images/produit2.jpg"
    },
    {
        name: "Douceur exotique",
        tag: "La Douceur exotique",
        price: 4.99,
        inCart: 0,
        image: "./images/produit3.jpg"
    },
    {
        name: "Blanc Passion",
        tag: "Le Blanc Passion",
        price: 5.99,
        inCart: 0,
        image: "./images/produit4.jpg"
    },
    {
        name: "Douceur croquante",
        tag: "La Douceur croquante",
        price: 2.99,
        inCart: 0,
        image: "./images/produit5.jpg"
    },
    {
        name: "Zèbre",
        tag: "Le Zèbre",
        price: 19.99,
        inCart: 0,
        image: "./images/produit6.jpg"
    },
    {
        name: "Coulis Fraise",
        tag: "Le Coulis de Fraise",
        price: 9.99,
        inCart: 0,
        image: "./images/produit7.jpg"
    },
    {
        name: "Noir Passion",
        tag: "Le Noir Passion",
        price: 4.99,
        inCart: 0,
        image: "./images/produit8.jpg"
    },
    {
        name: "Fantaisie",
        tag: "La Fantaisie",
        price: 2.99,
        inCart: 0,
        image: "./images/produit9.jpg"
    },
    {
        name: "Caramel Salé",
        tag: "Le Caramel Salé",
        price: 14.99,
        inCart: 0,
        image: "./images/produit10.jpg"
    },
]

for (let i=0; i< carts.length; i++){
   carts[i].addEventListener('click', () => {
    cartNumbers( products[i]);
    totalCost(products[i]);
   })
}


function onLoadCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }

}


function cartNumbers( product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    
   if( productNumbers ) {
    localStorage.setItem('cartNumbers' , productNumbers + 1 );
    document.querySelector('.cart span').textContent = productNumbers + 1;
   } else {
    localStorage.setItem('cartNumbers' , 1 );
    document.querySelector('.cart span').textContent = 1;
   }

   setItems(product);
};

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    } else {
      product.inCart = 1;
        cartItems = {
           [product.tag]: product
           }
    }
    localStorage.setItem("productsInCart", JSON.stringify (cartItems ));
};

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
        

    if(cartCost != null) {
        cartCost = parseInt(cartCost);     
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

   
}

function displayCart() {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-cart");
    let cartCost = localStorage.getItem('totalCost');

  if(cartItems && productContainer) {

    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product-title">
        <ion-icon name="close-circle-outline">
        </ion-icon>
        <img class="img-cart" src="${item.image}">
        <span>${item.name}</span>
        </div>
        <div class="product-price">${item.price}€
        </div>
        <div class="product-quantity">
        <ion-icon class="decrease" 
        name="arrow-back-circle-outline"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon class="increase"
         name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div class="product-total">
        ${item.inCart * item.price}€
        </div>
        `;
      

    });
 }
 var totalCart = document.querySelector('.cart-total')
 if(totalCart) {
 

 productContainer.innerHTML += `
    <div class="basketTotalContainer">
       
        <h4 class="basketTotal">
        Total ${cartCost}€
        </h4>
          
        </div>
        `;
        let basketTotalContainer = document.querySelector('.basketTotalContainer')
        totalCart.appendChild(basketTotalContainer);
    }
};
    


onLoadCartNumbers() ;
displayCart();
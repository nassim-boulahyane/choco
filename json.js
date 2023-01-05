//pour charger le fichier json//
var request = new XMLHttpRequest();
request.open("GET", "products.json", false);
request.send(null); 
var my_JSON_object = JSON.parse(request.responseText);
   console.log(my_JSON_object);
 

for(var i=0; i< my_JSON_object.length;i++)
{
    var obj= document.createElement("div");
    obj.setAttribute("id",my_JSON_object[i].id);

    var filter ='';
    console.log(Object.keys( my_JSON_object[i].category).filter(key => my_JSON_object[i].category[key] === true))
   var categorie = Object.keys( my_JSON_object[i].category).filter(key => my_JSON_object[i].category[key] === true);

   obj.classList.add('filterDiv');

  for(var j=0; j<categorie.length; j++)
  {
    obj.classList.add(categorie[j]);
  }
  
    
  
    var image = document.createElement("img");
    image.setAttribute("src",my_JSON_object[i].image);
    image.setAttribute("alt",my_JSON_object[i].title);
    obj.appendChild(image);

    var titre = document.createElement("h2");
    titre.textContent= my_JSON_object[i].title;
    obj.appendChild(titre);

    var prix = document.createElement("h3");
    prix.textContent= my_JSON_object[i].price+'€';
    obj.appendChild(prix);

    var note = document.createElement("p");
    note.textContent='Note = '+ my_JSON_object[i].note+'/5';
    obj.appendChild(note);

    document.getElementById("produits").appendChild(obj);

    var panier = document.createElement("button");
    panier.textContent='Ajouter au panier'
    panier.classList.add('panier');
    obj.appendChild(panier);

};
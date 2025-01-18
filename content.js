let contentTitle = [
  // Jute Shopping Bags
  {
    id: 1,
    name: "Eco-Friendly Jute Shopping Bag",
    brand: "EcoBrand",
    price: 250,
    preview: "img/jsb (1).jpg",
    category: "jute-shopping-bag",
  },
  {
    id: 2,
    name: "Reusable Jute Tote Bag",
    brand: "EcoCarry",
    price: 300,
    preview: "img/jsb (2).jpg",
    category: "jute-shopping-bag",
  },
  {
    id: 3,
    name: "Printed Jute Bag",
    brand: "EcoGoods",
    price: 350,
    preview: "img/jsb (3).jpg",
    category: "jute-shopping-bag",
  },
  {
    id: 4,
    name: "Stylish Jute Bag",
    brand: "EcoFashion",
    price: 280,
    preview: "img/jsb (4).jpg",
    category: "jute-shopping-bag",
  },
  {
    id: 5,
    name: "Large Jute Carry Bag",
    brand: "EcoPrints",
    price: 320,
    preview: "img/jsb (5).jpg",
    category: "jute-shopping-bag",
  },
  {
    id: 6,
    name: "Foldable Jute Shopping Bag",
    brand: "EcoFold",
    price: 240,
    preview: "img/jsb (6).jpg",
    category: "jute-shopping-bag",
  },

  // Jute Bottle Bags
  {
    id: 7,
    name: "Single Bottle Jute Bag",
    brand: "EcoBottle",
    price: 150,
    preview: "img/jbb (3).jpeg",
    category: "jute-bottle-bag",
  },
  {
    id: 8,
    name: "Multiple Bottle Jute Bag",
    brand: "EcoTwins",
    price: 200,
    preview: "img/jbb (4).jpeg",
    category: "jute-bottle-bag",
  },
  {
    id: 9,
    name: "Triple Bottle Jute Bag",
    brand: "EcoTriple",
    price: 250,
    preview: "img/jbb (2).jpeg",
    category: "jute-bottle-bag",
  },
  {
    id: 10,
    name: "Customizable Bottle Jute Bag",
    brand: "EcoCustomize",
    price: 300,
    preview: "img/jbb (1).jpeg",
    category: "jute-bottle-bag",
  },

  // Jute Pouches
  {
    id: 11,
    name: "Small Jute Pouch",
    brand: "EcoSmall",
    price: 100,
    preview: "img/jsp (1).png",
    category: "jute-pouch",
  },
  {
    id: 12,
    name: "Drawstring Jute Pouch",
    brand: "EcoDraw",
    price: 120,
    preview: "img/jsp (2).png",
    category: "jute-pouch",
  },
  {
    id: 13,
    name: "Printed Jute Pouch",
    brand: "EcoArt",
    price: 140,
    preview: "img/jsp (1).jpeg",
    category: "jute-pouch",
  },
];


function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";
  boxDiv.style.border = "1px solid #ccc";
  boxDiv.style.padding = "10px";
  boxDiv.style.margin = "10px";
  boxDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
  boxDiv.style.borderRadius = "5px";
  boxDiv.style.textAlign = "center";

  let boxLink = document.createElement("a");
  let message = `I got interested in buying the ${ob.name} bag priced at Rs ${ob.price}.`;
  boxLink.href = `https://wa.me/9830066905?text=${encodeURIComponent(message)}`;

  let imgTag = document.createElement("img");
  imgTag.src = ob.preview;
  imgTag.style.width = "200px";
  imgTag.style.height = "200px";
  imgTag.style.objectFit = "cover";
  imgTag.style.borderRadius = "5px";

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";
  detailsDiv.style.marginTop = "10px";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);
  h2.style.color = "#28a745";

  let minUnits = document.createElement("p");
  minUnits.textContent = "Minimum 500 units";
  minUnits.style.fontStyle = "italic";

  let contactButton = document.createElement("button");
  contactButton.textContent = "Contact Now";
  contactButton.style.marginTop = "10px";
  contactButton.style.padding = "10px 20px";
  contactButton.style.backgroundColor = "#007bff";
  contactButton.style.color = "#fff";
  contactButton.style.border = "none";
  contactButton.style.borderRadius = "5px";
  contactButton.style.cursor = "pointer";
  contactButton.onclick = function() {
    window.location.href = `https://wa.me/9830066905?text=${encodeURIComponent(message)}`;
  };

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h2);
  detailsDiv.appendChild(minUnits);
  detailsDiv.appendChild(contactButton);

  return boxDiv;
}

// Replace API Call with Hardcoded Data
let jutebottlebag = document.getElementById("jute-bottle-bag");
let jutepouch = document.getElementById("jute-pouch");
let juteshoppingbag = document.getElementById("jute-shopping-bag");

// Render hardcoded data
if (document.cookie.indexOf(",counter=") >= 0) {
  var counter = document.cookie.split(",")[1].split("=")[1];
  document.getElementById("badge").innerHTML = counter;
}

for (let i = 0; i < contentTitle.length; i++) {
  if (contentTitle[i].category === "jute-pouch") {
    jutepouch.appendChild(dynamicClothingSection(contentTitle[i]));
  } else if (contentTitle[i].category === "jute-bottle-bag") {
    jutebottlebag.appendChild(dynamicClothingSection(contentTitle[i]));
  } else {
    juteshoppingbag.appendChild(dynamicClothingSection(contentTitle[i]));
  }
}

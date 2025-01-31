console.clear()

let id = location.search.split('?')[1]
console.log(id)

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}

function dynamicContentDetails(ob)
{
    let mainContainer = document.createElement('div')
    mainContainer.id = 'containerD'
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div')
    imageSectionDiv.id = 'imageSection'

    let imgTag = document.createElement('img')
    imgTag.id = 'imgDetails'
    imgTag.src = ob.preview

    imageSectionDiv.appendChild(imgTag)

    let productDetailsDiv = document.createElement('div')
    productDetailsDiv.id = 'productDetails'

    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode(ob.name)
    h1.appendChild(h1Text)

    let h4 = document.createElement('h4')
    let h4Text = document.createTextNode(ob.brand)
    h4.appendChild(h4Text)
    console.log(h4);

    let detailsDiv = document.createElement('div')
    detailsDiv.id = 'details'

    let h3DetailsDiv = document.createElement('h3')
    let h3DetailsText = document.createTextNode('Rs ' + ob.price)
    h3DetailsDiv.appendChild(h3DetailsText)

    let h3 = document.createElement('h3')
    let h3Text = document.createTextNode('Description')
    h3.appendChild(h3Text)

    let para = document.createElement('p')
    let paraText = document.createTextNode(ob.description)
    para.appendChild(paraText)

    let productPreviewDiv = document.createElement('div')
    productPreviewDiv.id = 'productPreview'

    let h3ProductPreviewDiv = document.createElement('h3')
    let h3ProductPreviewText = document.createTextNode('Product Preview')
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText)
    productPreviewDiv.appendChild(h3ProductPreviewDiv)

    let i;
    for(i=0; i<ob.photos.length; i++)
    {
        let imgTagProductPreviewDiv = document.createElement('img')
        imgTagProductPreviewDiv.id = 'previewImg'
        imgTagProductPreviewDiv.src = ob.photos[i]
        imgTagProductPreviewDiv.onclick = function(event)
        {
            console.log("clicked" + this.src)
            imgTag.src = ob.photos[i]
            document.getElementById("imgDetails").src = this.src 
            
        }
        productPreviewDiv.appendChild(imgTagProductPreviewDiv)
    }

    let buttonDiv = document.createElement('div')
    buttonDiv.id = 'button'

    let buttonTag = document.createElement('button')
    buttonDiv.appendChild(buttonTag)

    buttonText = document.createTextNode('Add to Cart')
    buttonTag.onclick  =   function()
    {
        let order = id+" "
        let counter = 1
        if(document.cookie.indexOf(',counter=')>=0)
        {
            order = id + " " + document.cookie.split(',')[0].split('=')[1]
            counter = Number(document.cookie.split(',')[1].split('=')[1]) + 1
        }
        document.cookie = "orderId=" + order + ",counter=" + counter
        document.getElementById("badge").innerHTML = counter
        console.log(document.cookie)
    }
    buttonTag.appendChild(buttonText)

    mainContainer.appendChild(imageSectionDiv)
    mainContainer.appendChild(productDetailsDiv)
    productDetailsDiv.appendChild(h1)
    productDetailsDiv.appendChild(h4)
    productDetailsDiv.appendChild(detailsDiv)
    detailsDiv.appendChild(h3DetailsDiv)
    detailsDiv.appendChild(h3)
    detailsDiv.appendChild(para)
    productDetailsDiv.appendChild(productPreviewDiv)
    productDetailsDiv.appendChild(buttonDiv)

    return mainContainer
}

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
    name: "Large Jute Carry Bag",
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
    name: "Printed Jute Bag",
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
    preview: "img/jbb (1).jpeg",
    category: "jute-bottle-bag",
  },
  {
    id: 8,
    name: "Double Bottle Jute Bag",
    brand: "EcoTwins",
    price: 200,
    preview: "img/jbb (2).jpeg",
    category: "jute-bottle-bag",
  },
  {
    id: 9,
    name: "Triple Bottle Jute Bag",
    brand: "EcoTriple",
    price: 250,
    preview: "img/jbb (3).jpeg",
    category: "jute-bottle-bag",
  },
  {
    id: 10,
    name: "Customizable Bottle Jute Bag",
    brand: "EcoCustomize",
    price: 300,
    preview: "img/jbb (4).jpeg",
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

let product = contentTitle.find(item => item.id == id);
if (product) {
    dynamicContentDetails(product);
} else {
    console.log('Product not found!');
}

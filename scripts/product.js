let items = []
let it
fetch('https://fakestoreapi.com/products/')
            .then(async res=>items = await res.json())
            .then(json=> 
                items.push({...JSON.stringify(json)}))


const pId = document.getElementById("pid");
const qId = document.getElementById("qid");

var productId;
var quantity = 1;

pId.addEventListener('input', (e) => {
    productId = e.target.value
    console.log(productId);
}
)
qId.addEventListener('input', (e) => {
    quantity = e.target.value
    console.log(quantity);
}
)

const pBtn = document.getElementById("form");

var productObj;

const prodAddDiv = document.getElementById("productAdd")

var grandTotal = 0

var billList = []

pBtn.addEventListener('submit',(e) => {
    e.preventDefault();
    var node = document.createElement("div")
    node.classList.add("col")
    node.classList.add("m")
    // console.log(it);
    items.forEach(element => {
        // console.log(element);
        if(productId==element.id) {
            productObj = element
            productObj['quantity'] = quantity
            billList.push({...productObj})
        }
        // console.log(productObj);
    });
    const paraNode = document.createElement("p");
    paraNode.innerHTML = productObj.id
    const qty = document.createElement("p");
    qty.innerText = quantity
    const name = document.createElement("p");
    name.innerHTML = productObj.title
    const price = document.createElement("p");
    price.innerHTML = productObj.price
    const total = document.createElement("p");
    const ptotal = productObj.price*quantity
    console.log(ptotal);
    total.innerHTML = productObj.price*quantity
    grandTotal += ptotal
    const hr = document.createElement("hr")


    hr.classList.add("hr")

    node.appendChild(paraNode)
    node.appendChild(qty)
    node.appendChild(name)
    node.appendChild(price)
    node.appendChild(total)

    const dataDiv = document.createElement("div")
    dataDiv.classList.add("pdata")
    dataDiv.appendChild(node)
    prodAddDiv.appendChild(dataDiv)
    prodAddDiv.appendChild(hr)
    console.log(grandTotal);
    const gt = document.getElementById("gtotal")
    gt.innerHTML = grandTotal.toFixed(2)

    const gbill = document.getElementById("bill");
    gbill.innerHTML = "Generate Bill"
    billList[billList.length] = grandTotal
    console.log(billList)

    localStorage.setItem("bill",JSON.stringify(billList))
})





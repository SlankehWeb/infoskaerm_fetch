// ApiData is the array for the full products array
// it is the main array 
const ApiData = [];

const TemArr = [];

const ApiEndPoint = "https://dummyjson.com/products"

const fetchProducts = () => {

    fetch(ApiEndPoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        ApiData.push(...data.products);
    })
    .catch((error) => {
        console.errror(error);
    })
    .finally(() => {
        renderProducts();
    });
};
const renderProducts = (array) => {
    console.log(ApiData);

let ArrayData = array !== undefined ? array : ApiData;

document.getElementById("root").innerHTML = "";

ArrayData.map((obj) => {
     productCard(obj);
    });
};

const renderDetail = (id) => {
    let card = ApiData.filter((item) => item.id === id)

    document.getElementById('root').innerHTML = ""

    productCard(...card);
}

const productCard = (obj) => {
    console.log("obejdt", obj);
    const { brand, category, description, discountPercentage, id, price, rating, nstock, thumbnail, title, /** is arrays*/ images} = obj;
   
    document.getElementById("root").innerHTML += `
    <figure class="card" onclick="renderDetail(${id})"><div>
    <img src=${thumbnail} alt=${title}>
    <article class="container">
    <p>${brand}</p>
    <h3>${title}</h3>
    <p>${description}</p>
    <aside>${price}</aside>
    </article>
    </div></figure>
    `
};

const uniqueBy = (str) => {

    const uniqueVal = [...new Set(ApiData.map((item) => item[str]))]
    // ApiData.map((item) => item['brand'])
    // ApiData.map((item) => item['catagory'])

    TemArr.length = 0;

    TemArr.push(...uniqueVal);

    renderShopButtons(str);
};

const renderShopButtons = (str) => {

    let html = TemArr.map((string) => {
        return `<button onclick="filterProductCard('${string}' , '${str}')"> ${string}</button>`;
    }).join("");

    document.getElementById("navbar").innerHTML = html;
};

const filterProductCard = (string, str) => {
    const filtredArr = [];

    filtredArr.push(
        ApiData.filter((obj) => {
            return obj[str] === string;
        })
    );

    renderProducts(...filtredArr);
};

const initPage = () => {
    //by using a ternary operater we can determine if the ApiData is empty or not
    //if the length of the array is 0 it is empty, then we are calling fetchProducts()
    //else we are calling renderProducts()
    ApiData.length === 0 ? fetchProducts() : renderProducts();
};

initPage();

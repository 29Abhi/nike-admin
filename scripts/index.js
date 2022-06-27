//store the products array in localstorage as "data"
function nikeproduct(brand,name,price,image){
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.image = image;
}

let productarr = JSON.parse(localStorage.getItem("data")) || [];

function addadata(event){
    event.preventDefault();

    let form = document.getElementById("product_form");

    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image  = form.product_image.value;

    let newproduct = new nikeproduct(brand,name,price,image);

    productarr.push(newproduct);
    // console.log(productarr);
    localStorage.setItem("data",JSON.stringify(productarr));
}

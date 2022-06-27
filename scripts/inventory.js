let getdata = JSON.parse(localStorage.getItem("data")) || [];

display(getdata);

function display(getdata){
    getdata.map(function(elem,idx){

        let box = document.createElement("div");
        box.setAttribute("id","box");

        let image = document.createElement("img")
        image.src = elem.image;

        let brand = document.createElement("h2")
        brand.textContent = elem.brand;

        let name = document.createElement("h3")
        name.textContent = elem.name;

        let price = document.createElement("h3")
        price.textContent = elem.price;

        let btn = document.createElement("button")
        btn.setAttribute("id","remove_product")
        btn.textContent = "Remove Product";
        btn.addEventListener("click",function(){
            remove(idx);
        })
        box.append(image,brand,name,price,btn)

        let main_box = document.getElementById("products_data")
        main_box.append(box);
    })
}

function remove(index){
    getdata.splice(index,1);
    localStorage.setItem("data",JSON.stringify(getdata));
    window.location.reload();
}


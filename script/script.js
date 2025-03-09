


const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategoryName(data.categories))
}




const displayCategoryName = (categories)=>{

    const categoryContainer = document.getElementById("category-container");


    // console.log(item)
    categories.forEach((element) => {
        // console.log(element.category)

        const button = document.createElement("button");
        button.classList = "btn-category";
        button.innerHTML = 
        `
                <div class="flex gap-2 items-center">
                    <img src="${element.category_icon}" alt="">
                    <h3>${element.category}</h3>
                </div>
        `
        // button.innerText = element.category;
        categoryContainer.append(button);


    });
}


// load all pets

const loadAllPets = () =>{
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => console.log(data))
}



loadCategories();

loadAllPets();
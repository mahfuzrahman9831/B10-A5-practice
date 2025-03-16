


const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => displayCategoryName(data.categories))
}


const displayCategoryName = (category) => {

    const categoryContainer = document.getElementById("category-container");


    // console.log(item)
    category.forEach((element) => {
        // console.log(element.category)

        // const button = document.createElement("button");
        const buttonContainer = document.createElement("div");
        buttonContainer.classList = "btn-category";
        buttonContainer.innerHTML =
            `
                <div onclick="loadCategoriesPet('${element.category}')" class="flex gap-2 items-center">
                    <img src="${element.category_icon}" alt="">
                    <h3>${element.category}</h3>
                </div>
        `
        // button.innerText = element.category;
        categoryContainer.append(buttonContainer);


    });
}



// load pets by category

const loadCategoriesPet = (category) => {
    // alert(category);
    // console.log(category, "category from category")

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then((res) => res.json())
        .then((data) => console.log(data))
}






// load all pets

const loadAllPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayAllPets(data.pets))
}


const loadDetailsbyId = (petID) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petID}`)
        .then(res => res.json())
        .then(data => displayPetbyDetails(data.petData))
}


const displayPetbyDetails = (petDetails) => {
    console.log(petDetails)

    const modalContainer = document.querySelector(".modal-container");

    //   console.log(modalContainer)

    modalContainer.innerHTML = `
    <img class="w-full" src="${petDetails.image}"/>
    <h2 class="card-title">${petDetails.pet_name}</h2>
    <div class="flex gap-100">
        <div>
            <p>Breed: ${petDetails.breed ? petDetails.breed : "Not Available"}</p>              
            <p>Gender: ${petDetails.gender ? petDetails.gender : "Not Available"}</p>
            <p>vaccinated_status: ${petDetails.vaccinated_status ? petDetails.vaccinated_status : "Not Available"}</p>  
        
        </div>
           
         <div>
            <p>Birth: ${petDetails.date_of_birth ? petDetails.date_of_birth : "Not Available"}</p>
            <p>Price : ${petDetails.price ? petDetails.price : "Not Available"}$</p>   
         </div>
    </div>

    <div class="mt-5">
        <h2 class="card-title">Detail Information</h2>
        <p class="mt-3">${petDetails.pet_details}</p>
    </div>
    
    `





    document.getElementById("modalDetails").click();
}


const displayAllPets = (petsCategory) => {

    const allCategoryContainer = document.getElementById("all-category");

    petsCategory.forEach((element) => {
        // console.log(element.category)

        const card = document.createElement("div");
        card.classList = "card bg-base-100 shadow-sm"
        card.innerHTML =
            `
                    <figure class="px-5 pt-5">
                          <img
                            src=${element.image}
                            alt="Shoes"
                            class="rounded-xl" />
                        </figure>
                        <div class="card-body ">
                          <h2 class="card-title">${element.pet_name}</h2>
                          <p>Breed: ${element.breed ? element.breed : "Not Available"}</p>
                          <p>Birth: ${element.date_of_birth ? element.date_of_birth : "Not Available"}</p>
                          <p>Gender: ${element.gender ? element.gender : "Not Available"}</p>
                          <p>Price : ${element.price ? element.price : "Not Available"}$</p>
    
                          <hr>
                          <div class="flex gap-4 justify-evenly">
                            
                            <button onclick="likedPet()" class="py-2 px-5 border rounded-md text-[#0E7A81]"><img src='https://img.icons8.com/?size=24&id=82788&format=png' alt=""></button>
                            <button class="py-2 px-5 border rounded-md text-[#0E7A81] font-bold">Adopt</button>
                            <button onclick="loadDetailsbyId(${element.petId})" class="py-2 px-5 border rounded-md text-[#0E7A81] font-bold">Details</button>
                          </div>
                          
                        </div>
    
    `

        allCategoryContainer.append(card);



    });
}


const likedPet = () => {
    // console.log("liked button clicked")
    const likedSelectPet = document.getElementById("")
}


loadCategories();

loadAllPets();

const load_product = () => {

        // current user 
        const NameElement = document.getElementById("current_users");
        NameElement.innerHTML = `<span> Current User : ${username}</span>`;

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => display_product(json))


}

const display_product = (products) => {
    products.forEach((product) => {

        const parent = document.getElementById("carousal")
        const li = document.createElement("li")
        li.classList.add('slide-visible')
        li.innerHTML = `

        <div id="card_id" class="card rounded-0 h-100">
        <div class="row g-0 h-100">
            <div class="col-md-6 col-xl-5 d-flex align-items-center p-2    p-md-3    p-xl-5">
                <div class="card-body p-1 p-md-3 p-xl-5">
                    <p class="fw-bold text-primary"> Title : ${product.title} </p>
                    
                    <p class="card-text mt-3"> Description : ${product.description.slice(0,40)} </p>
                    
                    <h2 class="card-title" style="color:#DF1E1E;">Price : ${product.price} $</h2>
                    <p class="fw-bold text-info"> Category : Brand </p>
                        <button class="btn btn-success">See Details </button>
                </div>
            </div>
                <div id="imgg" class="col-md-6 col-xl-7">
                <img class="immmg" src="${product.image} " class="card-img d-none d-md-block" loading="lazy"  object-fit: cover;" alt="...">
                
            </div>
        </div>
                    </div>
 
      `;

        parent.appendChild(li);
    })


}

load_product();



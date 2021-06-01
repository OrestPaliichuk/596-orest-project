const productsJson = 
`[
    {
        "id": "1",
        "title": "Турнікет",
        "image": "tourniqet.jpg",
        "description": "Турнікет кровоспинний",
        "price": 49.99
    },
    {
        "id": "2",
        "title": "Бандаж медичний",
        "image": "bandage.jpg",
        "description": "Для перев\'язування поранень",
        "price": 19.99
    },
    {
        "id": "3",
        "title": "Ножниці атравматичні",
        "image": "cissors.png",
        "description": "Ножниці атравматичні",
        "price": 24.99
    },
    {
        "id": "4",
        "title": "Гемостатичний бинт",
        "image": "gemostatik.jpg",
        "description": "Для таммпонування поренень",
        "price": 34.99
    }
]`;


function renderProducts(products,sortOrder) {
    const sortedProducts = [...products]
        .sort( (a, b) => sortOrder === 'ascending' 
            ? a.price - b.price 
            : b.price - a.price);
	const productsContainer = document.querySelector('.product-list');
	let html = '';
	for (const product of sortedProducts) {
		html += `<div class="col-lg-3 col-md-6 product">
                    <div class="card text-center">
                    <img src="assets/img/products/${product.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <a href="#" class="btn btn-warning">${product.price}$</a>
                        </div>
                    </div>
                 </div>`;
	}
	productsContainer.innerHTML = html;
}
renderProducts(JSON.parse(productsJson), 'ascending');

const buttonSortAscending = document.querySelector('.sort-ascending');
const buttonSortDescending = document.querySelector('.sort-descending');

buttonSortAscending.addEventListener('click', sortAscending);
buttonSortDescending.addEventListener('click', sortDescending);

function sortAscending() {
    renderProducts(JSON.parse(productsJson), 'ascending');
}
function sortDescending() {
    renderProducts(JSON.parse(productsJson), 'descending');
}
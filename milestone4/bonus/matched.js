const numbers = [45, 65, 23, 98, 19];

for (const number of numbers)
    console.log(number);
    
const products = [
    {id: 1, name: 'xiaomi phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'samsung phone note 7', price: 19000},
    {id: 7, name: 'nokia old age phone gone', price: 19000},
    {id: 8, name: 'oneplus 7t Phone ', price: 19000},
]

function matchedProducts (products, search) {
    let matched = [];
    for (let product of products)
        if (product['name'].toLowerCase().includes(search.toLowerCase()))
            matched.push(product);
    return matched;
}

console.log(matchedProducts(products, 'phone'));
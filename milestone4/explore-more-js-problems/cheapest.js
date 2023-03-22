const phones = [
    { name: 'Samsung', camera: 12, price: 32000, storage: '32 gb', color: 'silver' },
    { name: 'Walton', camera: 10, price: 22000, storage: '32 gb', color: 'silver' },
    { name: 'iphone', camera: 10, price: 82000, storage: '32 gb', color: 'silver' },
    { name: 'Xaomi', camera: 10, price: 52000, storage: '32 gb', color: 'silver' },
    { name: 'oppo', camera: 10, price: 20000, storage: '32 gb', color: 'silver' },
    { name: 'Nokia', camera: 10, price: 44000, storage: '32 gb', color: 'silver' },
    { name: 'HTC', camera: 10, price: 62000, storage: '32 gb', color: 'silver' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0]['price'];
    let phoneName = phones[0];
    for (let phone of phones)
        if (phone['price'] < cheapest) {
            cheapest = phone['price'];
            phoneName = phone;
        }
    return phoneName;
}

console.log(cheapestPhone(phones));
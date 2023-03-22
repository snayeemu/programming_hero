const student = {
    name: 'Sakib Khan',
    id: 121,
    address: 'cinema',
    isSingle: true,
    friends: ['Raaz', 'Salman', 'aamir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2024}],
    act: function(){
        console.log('acting like khan');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

student.act();
const friendAges = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partial = friendAges.splice(2, 5, 99, 555, 777);
console.log(partial);
console.log(friendAges);
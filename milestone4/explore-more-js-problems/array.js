const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friendAges = [13, 14, 11, 17, 21, 16, 15, 20];

console.log(Array.isArray(friendAges));

const newFriendAges = [12, 13, 11, 13];
const allFriendAges = newFriendAges.concat(friendAges);
console.log(allFriendAges);
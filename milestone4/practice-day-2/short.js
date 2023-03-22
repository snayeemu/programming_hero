function isFriend (friend1, friend2) {
    return friend1['name'] == friend2['friend'];
}

let friend1 = {name: 'abul', friend: 'kabul'};
let friend2 = {name: 'kabul', friend: 'abu'};

console.log(isFriend(friend1, friend2));
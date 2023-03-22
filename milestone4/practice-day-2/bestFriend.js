const prompt = require('prompt-sync')();

function bestFriend(names) {
    let maxLength = names[0].length
    let friendName = names[0];
    for (let name of names)
        if (name.length > maxLength) {
            maxLength = name.length;
            friendName = name;
        }
    return friendName;
}

let friendNames = prompt('Enter friend names: ').trim().split(' ');

console.log('Best friend\'s name: ', bestFriend(friendNames));

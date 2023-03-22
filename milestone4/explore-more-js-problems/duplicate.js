const names = ['abul', 'babul', 'chabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'chabul', 'babul', 'abul', 'abul'];

function removeDuplicates (names) {
    let unique = [];
    names.forEach(name => {
        if (!(unique.includes(name)))
            unique.push(name);
    });
    return unique;
}

let unique = removeDuplicates(names);
console.log(unique);
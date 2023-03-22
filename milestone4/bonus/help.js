function mindGame(nmbr) {
    let retNmbr = (((((((nmbr * 3))) + 10) / 2 ) - 5))
    return retNmbr;
}
// console.log(mindGame(5));

function evenOdd(str) {
    let retStr;
    if (str.length % 2 == 0)
    retStr =  'Even' ;
    else
    retStr =  'Odd';
    return retStr;
}

// console.log(evenOdd('Phero'));


function isLGSeven(aNmbr) {
    let ret;
    if ((aNmbr - 7 < 7) )
    ret = (aNmbr - 7) 
    else ret = 2 * number;
    return ret;
}

// console.log(isLGSeven(6));


function findingBadData(arr) {
    let ret = 0;
    for (let nmbr of arr)
    if (nmbr < 0)
    ret++;
    return ret;
}

// console.log(findingBadData([1, 2, 5]));

function gemsToDiamond(fst, snd, thd) {
    let ret;
    if (fst * 21 + snd * 32 + thd * 43 > 2000)
    ret = ((fst * 21 + snd * 32 + thd * 43) - 2000)
    else
    ret = (fst * 21 + snd * 32 + thd * 43)
    return  ret;
    
}

// console.log(gemsToDiamond(1, 1, 1));
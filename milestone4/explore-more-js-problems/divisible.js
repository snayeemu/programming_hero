for (let i = 1; i <= 50; i++) {
    let toPrint = (i % 3 == 0 && i % 5 == 0) ? 'foobar' : (i % 3 == 0) ? 'foo' : (i % 5 == 0) ? 'bar' : i;
    console.log(toPrint);
}
const takeNumber = () => {
    let number = parseFloat(prompt('Enter a number: '));
    alert(`output is ${(number + 200).toFixed(2)}`);
};

const giveLocation = () => {
    const isConfirmd = confirm('Want to see location of this website?');
    if(isConfirmd) alert(`Location is ${location.href}`)
}
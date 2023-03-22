// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

const prompt = require('prompt-sync')();

let taka = parseInt(prompt('Enter the amount of taka: '));

if (taka > 80000)
    console.log('Buying mac');
else if (taka > 60000)
    console.log('Buying gaming laptop');
else if (taka > 40000)
    console.log('Buying lenovo yoga');
else if (taka > 20000)
    console.log('Buying old laptop');
else
    console.log('Laptop pocha');

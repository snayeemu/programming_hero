let isGraduated = true;
let salary = 25000;
let cars = 0;

if (isGraduated && salary > 50000 && cars >= 1)
    console.log("You should marry");
else
    console.log("Kopale biye nei");

if (isGraduated || salary > 5000)
    console.log("Give your dad's number");
else
    console.log("Give your friend's mom's mobile number");

if ((isGraduated && salary > 5000) || cars >= 1)
    console.log("Okay");
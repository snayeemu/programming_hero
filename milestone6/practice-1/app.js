// problem 1
const name = 'Shaikh Nayeem Uddin';
let age = 22;
const student = {
    name: 'Shaikh Nayeem Uddin',
    age: 22,
    CGPA: '3.90',
    attendance: '100%'
}
// problem 2
const description = `Name is ${name}, age is ${age} and CGPA is ${student.CGPA}`;
console.log(description);

// problem 3
// 3.1
const divideWithFive = number => (number / 5).toFixed(2);
console.log(divideWithFive(6));
// 3.2
const multilineArrowFunction = (number1, number2) => {
    number1 += 2;
    number2 += 2;
    return number1 * number2;
}
console.log(multilineArrowFunction(2, 2));
// 3.3
const multiplyThreeNumbers = (number1, number2, number3) => number1 * number2 * number3;
console.log(multiplyThreeNumbers(2, 2, 3));
// 3.4

// problem 5
const numbers = [2, 3, 5, 6, 9];
const fiveTimes = numbers.map(number => number * 5);
console.log(fiveTimes);

// problem 6, not challenging 
const odd = numbers.filter(number => (number % 2) == 1);
console.log(odd);

// problem 7
const products = [
    { name: 'phone', price: 30000 },
    { name: 'laptop', price: 70000 },
    { name: 'watch', price: 5000 },
    { name: 'cloth', price: 2500 },
    { name: 'bag', price: 2000 },
];
const prize5k = products.find(product => product.price == 5000);
console.log(prize5k);

// problem 8
const { attendance } = student;
console.log(attendance);

// problem 9
const [first, second, three] = products;
console.log(three);

// problem 10
const add = (number1, number2, number3 = 7) => number1 + number2 + number3;
console.log(add(1, 1));

// problem 11
const nested = {
    good: 'phone',
    bad: {
        phone: 'iphone',
        model: {
            first: 'all',
            second: ['all except onePlus 7t', { price: 3000 }]
        }
    }
}
console.log(nested.bad.model.second[1].price);

// problem 12
console.log(nested.bad.model?.second[1]?.price?.CGPA?.add?.attendance);

// extra
// 1
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}

console.log(data.Sophia.study[1].secondary[1].location);
// 2
let data2 =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },
        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },
        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },
        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },
            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]

console.log(data2[3].pHeroCourses["course-xyz"]);
console.log(data2[3].locationField["en-US"].lon);
// 3
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {

                song_1: "abc",
                song_2: "bcd"

            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"

            },
            id: 2
        }
    ]
}
console.log(activities.activity1[0].song_list.song_1);
console.log(activities.activity1[1].song_list.song_2);

// 4
let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}

console.log(students[2222].address.city);
console.log(students[3333].name);
// 5
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}
console.log(instructor.additionalData.books[1]);
console.log(instructor.additionalData.moreDetails.hometown.state);
console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);
// 6
const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]
console.log(studentData[0].details[1].gradingDetails[0].grade);
console.log(studentData[1].details[1].gradingDetails[0].grade);
// 7
let data7 = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

console.log(data7.data[0].bookDetails.name);
console.log(data7.data[1].bookCategory);

// easy
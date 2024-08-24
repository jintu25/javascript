// array destructuring
const x = [1, 2, 3, 4, 5];
const [a, b, c, d] = x;
// console.log(a, b, c, d)  // a=1, b=2, c=3, d=4 and last 5

// object destructuring
const obj = {name: "jintu paul", age: 22, profession: "bekar"}
// console.log(obj.name)
// object destructuring

const person = {
    name: "kashem",
    profession: "teacher",
    age: 44,
    hobbies: "gardening",
    gander: "male",
    status: "double"
}
// const {name, profession, age, hobbies, gander, status} = person
// console.log(name, profession, age) 

// rename destructuring
const number = {num1: 1000, num2: 2000, num3: 3000}
const {num1: first, num2: second, num3: third} = number // rename destructuring
// console.log(first, second, third)

// object destructuring with rest operator
const {value1, value2, value3, ...rest} = {value1: 100, value2: 200, value3: 300, d: 400, e: 500, f:600}
// console.log(rest) //see all value without value1, value2, and value3


// function destructuring
const personInfo = {
    name: "jubayer halim",
    age: 23,
    work: "social influencer",
    hobbies: "cricket"
}

function personInfoDetails({name, age, work, hobbies}) {
    // console.log(`Name: ${name}`)
    // console.log(`Age: ${age}`)
    // console.log(`Work: ${work}`)
    // console.log(`Hobbies: ${hobbies}`)
}
personInfoDetails(personInfo)

// nested destructuring
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        degree: 'Masters'
    },
    arr: [
       {
        arrName: "polok",
        arrAddress: "dhaka",
        ArrProfession: "Ict Mondtri"
       }
    ]
};
const { education: { degree }, arr: [{arrName}] } = user;
// console.log("ArrName Is: ", arrName);
// But what happens when the nested object is missing ?
// const user = {
//     id: 339,
//     name: 'Fred',
//     age: 42
// };
// const { education: { degree } = {} } = user;
// console.log(degree); //prints: undefined



// complex destructuring problem solving 
const complexData = {
    id: 101,
    userDetails: {
        name: 'Alice',
        age: 30,
        hobbies: ['reading', 'cycling', 'hiking'],
        education: {
            degree: 'PhD',
            majors: ['Physics', 'Mathematics'],
            school: {
                name: 'University of Knowledge',
                address: {
                    street: '123 Wisdom Way',
                    city: 'Smartville',
                    country: 'Utopia'
                }
            }
        }
    },
    projects: [
        {
            projectName: 'AI Research',
            projectDetails: {
                teamMembers: [
                    { name: 'Bob', role: 'Developer' },
                    { name: 'Charlie', role: 'Designer' }
                ],
                duration: '2 years',
                technologies: ['Python', 'TensorFlow', 'Keras']
            }
        },
        {
            projectName: 'Web Development',
            projectDetails: {
                teamMembers: [
                    { name: 'Dave', role: 'Frontend Developer' },
                    { name: 'Eve', role: 'Backend Developer' }
                ],
                duration: '1 year',
                technologies: ['JavaScript', 'React', 'Node.js']
            }
        }
    ],
    contactInfo: {
        email: 'alice@example.com',
        phone: {
            home: '555-1234',
            work: '555-5678'
        },
        address: {
            current: {
                street: '456 Knowledge Blvd',
                city: 'Smartville',
                country: 'Utopia'
            },
            permanent: {
                street: '789 Intelligence Ave',
                city: 'Braincity',
                country: 'Utopia'
            }
        }
    }
};

const { 
    userDetails: { name, hobbies: [reading], 
        education: { majors } } ,
    projects: [{ projectName }]
    } = complexData
// console.log(majors)
console.log(projectName)
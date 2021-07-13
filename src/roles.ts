const person: {name: string;
age: number;
hobbies: string[]; } = {
    name: "Bartosz",
    age: 42,
    hobbies: ["tea", "go"],
}

enum Role {ADMIN = 'admin', READ_ONLY = 200, AUTHOR}

console.log(Role.READ_ONLY)
//
// for (const h of person.role) {
//     console.log(h)
// }
// person.role.push('writer')
//
// person.role.forEach(i=>{
//     console.log(i, 'fe')
// })
const users = {
    mike: {
        id: 1,
        age: 18,
        status: 'read and write'
    }
}
users.mike.city = 'Kyiv'
console.log(users);


let city = 'city';
let user = {
    name: 'mike',
    age: 18,
    status: 'read and write',
    [city]: 'Kyiv'
}
//let key = 'age';
//console.log(user[key]);
console.log(user)


const pet = {
    type: 'cat',
    color: 'yellow',
    size: 'large'
}
const anotherPet = pet;
anotherPet.type = 'dog';
console.log(pet.type);
console.log(anotherPet.type)


const newPet = {
    type: 'cat',
    color: 'yellow',
    size: 'large'
}
for (const key in newPet){
    console.log(key);
    console.log(newPet[key]);
}

let salaries = {
    frontend: 1200,
    backend: 2400,
    designer: 1000,
    dayPay(){
        console.log(this.backend)
    },
}
salaries.dayPay()

function Pet (type, name, color) {
    this.type = type;
    this.name = name;
    this.color = color;
}
let dog = new Pet('Dog', 'Cooper', 'Black');
let cat = new Pet('Cat', 'Puma', 'White')
console.log(dog)
console.log(cat)

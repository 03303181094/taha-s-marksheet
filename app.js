// let n =   parseInt(prompt ("enter a number"));         
// for ( let i = 1 ; i <= 10 ; i++ ) {
//     console.log( `${n}  * ${i} = ${n * i}`);
// }



          // switch case
          
//  const day = parseInt(prompt ("enter day "));
 
//  switch (day) {
//     case 1 : ('monday');
//     break;

//     case 2 : ('monday');
//     break;
//     case 3 : ('monday');
//     break  ;
//     case 1 : ('monday');
//     break;
//     case 1 : ('monday');
//     break;
//     case 6 : ('saturday');
//     break;
//     case 7 : ('sunday');
//     break;
//  }


// ARRAY ELEMENTS


// const FRUITS = ['BANANA', "apple", 'cherry'];

// console.log(FRUITS[0]);
// console.log(FRUITS[1]);
// console.log(FRUITS[2]);


// FRUITS.push('dates');
// console.log(FRUITS)

// const lastfruit =FRUITS.pop();
// console.log(FRUITS);
// console.log(lastfruit
// )

// const firstfruit = FRUITS.unshift();



// deep copy

// let array = [1,2,3,4,5];

// const darr = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     darr.push(element);
    
// }
// darr[2] = 10;

// console.log(array);
// console.log(darr);

// Objects

// const product = { 
//     name : "HP Elitebook Sleeve", 
//     inStock : true,
//     price: 1000,
//     totalunits : 7,
//     colors : ["black","white","gray"]} 

// console.log(product["colors"][1]);
// console.log(product.colors[2]);

// dynamically

// const restaurant = {
//     name : "ramen ",
//     address : `${Math.floor(Math.random() * 100)+1}jhonson Ave`,
//     city : "brooklyn",
//     state : 'ny',
//     zipcode : "11206",

// }
// console.log(restaurant.address)


// var fulladdress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`
// console.log(fulladdress)


// modifying 


let person = {
    name : 'taha',
    age : 21,
    city : 'karachi',

};

person.age = 22;
person.city= 'lahore';
person.job = 'software';
delete person.city;
console.log(person);


// exercise 3

// let student = {
//     name : "taha",
//     age : 21,
//     subjects : ["science", "maths", "computer"],
//     isEnrolled : true,
// }
// console.log(student.name);
// console.log(student.age);
// console.log(student.subjects);
// console.log(student.isEnrolled);

// student.grade = "a";

// student.isEnrolled = false;
// console.log(student);console.log(student.name);
// console.log(student.age);
// console.log(student.subjects);
// console.log(student.isEnrolled);

// student.grade = "a";

// student.isEnrolled = false;
// console.log(student);


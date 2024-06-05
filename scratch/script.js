// object
// const product = {
//     name: 'Product 1',
//     price: 10,
//     'product-quantity': '10',
// }

// product.name = 'socks';
// product.newProperty = true;
// delete product.newProperty;
//dot notation
// console.log(product.name)
// bracket notation
// console.log(product)
// console.log(product["product-quantity"])

// const produtct2 =  {
//     // nested obj
//     bags:{
//         color: 'black',
//         size: 'large',

//     },
//     fun: function function1(){
//         console.log('functin inside the object');
//     }
// }
// console.log(produtct2);
// console.log(produtct2.bags.size);
// console.log(produtct2.fun())
// const jsonData = JSON.stringify(produtct2);
// console.log(jsonData)
// console.log(JSON.parse(jsonData));

//destructuring
const object  = {
    message: 'good job',
    price: 456,
    time: '5.00 AM'
}
// console.log(object);
// const message = object.message;
// const {message, price, time} = object;
// console.log(message, price, time)

//shorthand property
// const {message} = object;
// const object1  = {
//     message,
//     // shorthand method syntax
//     method(){
//         console.log('testing the my function')
//     }
// }
// console.log(object1)
// object1.method()

// DOM
// document.title = 'good job'
// creating a btn with dom
// document.body.innerHTML = '<button>Good job </button>'
// document.querySelector('button')
// .innerHTML = 'changed the btn text';
// document.querySelector('h2').innerHTML = 'hello world'

// print all array in clg---------------
// const arryList = [
//     'array-1',
//     'array-2',
//     'array-3',
//     'array-4',
//     'array-5',
//     'array-6'

// ];

//remember to add length - 1; if i<=(using the less then or equal);
// for(i=0; i<=arryList.length - 1; i++){
//     console.log(arryList[i]);
// }

//calculate with array
const nums = [
    1, 45, 4
];
let total = 0;
for( let i = 0; i< nums.length; i++){
    const num = nums[i];
    total += num;
}
console.log(total);














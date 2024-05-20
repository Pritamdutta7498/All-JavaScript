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
const {message} = object;
const object1  = {
    message,
    // shorthand method syntax
    method(){
        console.log('testing the my function')
    }
}
console.log(object1)
object1.method()

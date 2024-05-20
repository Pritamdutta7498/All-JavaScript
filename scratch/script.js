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

const produtct2 =  {
    // nested obj
    bags:{
        color: 'black',
        size: 'large',

    },
    fun: function function1(){
        console.log('functin inside the object');
    }
}
// console.log(produtct2);
// console.log(produtct2.bags.size);
// console.log(produtct2.fun())
const jsonData = JSON.stringify(produtct2);
console.log(jsonData)
console.log(JSON.parse(jsonData));
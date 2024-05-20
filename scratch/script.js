// object
const product = {
    name: 'Product 1',
    price: 10,
}
console.log(product.name)
product.name = 'socks';
console.log(product.name)
product.newProperty = true;
console.log(product)
delete product.newProperty;
console.log(product)
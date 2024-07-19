function calculateTotal(cart) {
    const total = cart.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity;
    }, 0);
    return total;
}

// Example usage:
const shoppingCart1 = [
    { product: 'Laptop', price: 1000, quantity: 1 },
    { product: 'Phone', price: 500, quantity: 2 },
    { product: 'Headphones', price: 50, quantity: 4 }
];

console.log(calculateTotal(shoppingCart1)); 

//example2
const shoppingCart2 = [
    {name:"fruits", price:10, quantity:5},
    {name:"Vegetables", price:8, quantity:3},
   {name:"Dairy", price:5,quantity:2},
   {name:'Snacks',price:3,quantity:10}
];

console.log(calculateTotal(shoppingCart2))

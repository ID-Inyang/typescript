const menu = [
    { name: "Margherita", price: 8.99 },
    { name: "Pepperoni", price: 9.99 },
    { name: "Hawaiian", price: 10.99 },
    { name: "Veggie", price: 9.49 },
    { name: "BBQ Chicken", price: 11.49 },
]

let cashInRegister = 100.00
const orderQueue = [] 

/** 
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
*/

const addNewPizza = (pizza) => {
    menu.push(pizza)
}

let newPizza = {
    name: "pineapple pizza"
}

addNewPizza(newPizza)

console.log(menu)

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *      (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

const placeOrder = (pizzaName) => {
    let selectedPizza = menu.find(p => p.name == pizzaName)
    cashInRegister += selectedPizza.price;
    let orderObj = {
        pizza: selectedPizza, status: "ordered"
    }
    orderQueue.push(orderObj)
    return orderObj;
}
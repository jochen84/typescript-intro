enum Color {
  GREEN,
  YELLOW,
  RED,
  ORANGE,
  BLACK
}
enum Category {
  TOYS,
  FURNITURE,
  FRUIT
}
interface Product {
  name: string;
  price: number;
  color: Color;
  category: Category;
}

let banana: Product = {
  name: "Banana",
  price: 22,
  color: Color.YELLOW,
  category: Category.FRUIT
}
let apple: Product = {
  name: "Apple",
  price: 10,
  color: Color.RED,
  category: Category.FRUIT
}
let toyCar: Product = {
  name: "Blixen McQueen",
  price: 200,
  color: Color.RED,
  category: Category.TOYS
}
let rcCar: Product = {
  name: "Traxxas",
  price: 3000,
  color: Color.GREEN,
  category: Category.TOYS
}
let sofa: Product = {
  name: "Klippan",
  price: 2500,
  color: Color.BLACK,
  category: Category.FURNITURE
}
let chair: Product = {
  name: "Olle",
  price: 500,
  color: Color.ORANGE,
  category: Category.FURNITURE
}

let products: Product[] = [banana, apple, toyCar, rcCar, sofa, chair]
let basket: Product[] = [];

console.log("****************Products at start**********************")
products.forEach((product) =>{
  console.log(product.name)
});
console.log("***************Products at start***********************")

function addToBasket(product: Product){
  if(products.includes(product)){
    basket.push(product);
    products.splice(products.indexOf(product), 1);
    console.log(product.name + " - was added to the cart!")
  }
  console.log("***************Products after addToBasket***********************")
  products.forEach((product) =>{
    console.log("Products - " + product.name)
  });
  console.log("***************Products after addToBasket***********************")
  console.log("***************Products in shopping cart***********************")
  basket.forEach((product) =>{
    console.log("Basket - " + product.name)
  });
  console.log("***************Products in shopping cart***********************")
}

addToBasket(toyCar);

(window as any).products = products;
(window as any).addToBasket = addToBasket;
(window as any).totalPrice = totalPrice;

function totalPrice(){
  let cost: number = 0; 
  basket.forEach((product)=>{
    cost += product.price
  })
  console.log(cost);
}

totalPrice();
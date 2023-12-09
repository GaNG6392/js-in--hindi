// for of loop 

const arr = [1,2,3,4,5]
for (let i=0 ; i < arr.length ; i++){
    // console.log(arr[i])
}
const code = ["js","java","php","ph","c++","c",]
for(const coding of code){
// console.log(coding);
}
const book = ["gita","ramayan","mahabharat","ved","ramcharitmanas"]
book.forEach(item => {
    // console.log(item); 
});

var initialval= 1
var sum
arr.forEach(item => {
    
     sum = initialval * item
    initialval = sum
     
});
// console.log(sum);
var val = 0
const arr1 = [1,2,3,4,5]
// for(let i=0; i< arr.length; i++){
//      var sum = val + arr[i]
//      console.log(`line 29 : ${sum}`)
//     val = sum
//     console.log(`line 31 :${val}`)
// };
const sum1 = arr1.reduce((acc,cur) =>(acc+cur),0)
// console.log(sum1);

const shopingCart = [
    {
        product : "shose",
        price:299
    },
    {
        product : "sun glass",
        price:149
    },
    {
        product : "jacket",
        price:499
    },
    {
        product : "cap",
        price:199
    },

]
const totalPrice = shopingCart.reduce((acc,item) =>(acc+item.price),0)

shopingCart.filter((item) =>{
    item.price > 200
    // console.log(`product :${item.product} and price is :${item.price}`)
    
})
// console.log(` Total :${totalPrice}`);

const cart = shopingCart.map((item) =>{
   return item
    
})
console.table(cart);
// object has diclire two type 
//   1--Object litrals
//   2-- constructor(singleton) Object.create
 const mySym = Symbol("key1")

const jsUser ={
    name:"ganga",
    "fullname":"gnaga ram",
    age:27,
    [mySym]: "key2",
    location:"jaipur",
    email:"gangaram@gmail.com",
    isLogedIn:false
}
// Object.freeze(jsUser)
// jsUser.email = "gangaramnishad@gmail.com"
// console.log(jsUser);
// console.log(jsUser.fullname);
// console.log(jsUser["email"]);
jsUser.greating1 = function (name){
    console.log(`Hello ... Js User I am ${name}`)
}
jsUser.greating2= function (){
    console.log(`Hello ... Js User I am ${this.name}`)
}
console.log(jsUser.greating1(jsUser.email))
console.log(jsUser.greating2())
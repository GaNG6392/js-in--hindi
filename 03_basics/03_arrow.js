// arrow function come in es6 version javaScript
// in arrow function not required to write function keyword 
// arrow function syntax () => {}
// when the statement is the one line then not nessusry to write return keyword and curlybasase




// uses of this keyword in Object 

const user = {
    name: "ganga ",
    email:"gangaramnishad5544@gmail.com",
    sendmessage:function (){ // this is refer to the current context
        console.log(`${this.name.toUpperCase()}, login password is send to the your email: ${this.email}`)
        console.log(this)
    }
}

// user.sendmessage()
// user.name = "Sam"
// user.email = "sam@gmail.com"
// user.sendmessage()
// console.log(this); //in the browser global object = window object
                   // in node invironment this give empty object 

function fun1 (){
console.log(this.setTimeout(() => {
    console.log("HELLO")
}, 1000)) // when we are console this in the function that refer a global  object
}
// fun1()
const sum = (num1 , num2 ) =>{
return num1+num2
}
// console.log(sum( 2,4))

// const fun2 = (a,b)=> (a+b) // impisit return
const fun2 = (num1,num2) => (user)
// console.log(fun2(23,23))
const array = [11,22,32,44,56,57,]
array.forEach((elm,index) =>(console.log(`${index}:${elm}`)))





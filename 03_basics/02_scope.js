// variable of scope two type 1-- is global and 2-- is local 

function user(){
const userName = "hitesh"
console.log(userName)
}
// user()

function one(){
    const name = "ganga"
    function two(){
        const email="gangaramnishad5544@gmail.com"
        console.log(email)
        console.log(name)//name variable can access in function two because name is global variable
    }
    two()
    console.log(email)//this line of code giving error because email is local variable
}
one()
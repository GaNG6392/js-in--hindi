// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc",
tinderUser.name = "summy",
tinderUser.isLogedIn = false 
// const user = {
//     id : "123abc",
//     name : "summy",
//     isLogedIn : false
// }
// console.log(user)
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"ganga",
            lastName:"ram"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);
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
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj4 = {
    5:"e",
    6:"f"
}
const obj3 = {...obj1,...obj2}
// console.log(Object.assign(obj1,obj2,obj4));
// console.log(obj3)
const user =[
    {
        id:1,
        email:"gr@gmail.com"
    },
    {
        id:2,
        email:"grn@gmail.com"
    },
    {
        id:3,
        email:"grn2@gmail.com"
    }
]
 
// 1  ---const data = {...obj1,...obj2}
// 2  ---const data = Object.assign(obj1,obj2,obj4)
// 3  ---const data= Object.keys(tinderUser)
// 4  ---const data= Object.values(tinderUser)
// 5  ---const data= Object.entries(tinderUser)
// 6  ---const data= tinderUser.hasOwnProperty("isLoged")
console.log(data)

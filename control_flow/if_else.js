const userLogedInGoogle = false
// if(userLogedInGoogle){
//     console.log(`user loged in succesfully`)
// }
const userLogedInEmail =true

// if(userLogedInGoogle && userLogedInEmail){
//     console.log(`user logged in succesfully By- Google:${userLogedInGoogle} or Email:${userLogedInEmail}`)
// }else{
//     console.log(`user not logged`)
// }
// if(userLogedInGoogle || userLogedInEmail){
//     console.log(`user logged in succesfully By- Google:${userLogedInGoogle} or Email:${userLogedInEmail}`)
// }else{
//     console.log(`user not logged`)
// }

// if(userLogedInEmail){
//     console.log("user logged by Email");
// }else if(userLogedInGoogle){
//     console.log("user logged by Google")
// }else{
//     console.log(`user not login`)
// }

function getUser(userLogedInEmail){
    return userLogedInEmail ? "login by Email":"user not login"
}
console.log(getUser("true"));
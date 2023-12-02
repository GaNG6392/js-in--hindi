function sumTowNumber(a, b) {
  //create function with parameter and argument
  return a + b;
}
// console.log(sumTowNumber(21, 42));

const userData = function () {
  // We can store function in variable
  const user = {
    id: 1,
    name: 'gr',
    email: 'gr@gmail.com',
    password: '123abc',
  };
  console.log(user);
};
// userData();

function addCartPrice(...num1) {
  //(... ) is called rest oparater
  return num1.reduce((acc, crt) => acc + crt);
}
console.log(addCartPrice(200, 300, 500));

const user = {
  userName: 'ganga',
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `${anyObject.userName} braught a watch that price is ${anyObject.price} Rs.`
  );
}
// handleObject(user);
handleObject({
  userName: 'ganga ram',
  price: 499,
});

const array1 = [100, 300, 500];

function handleArray(anyArray) {
  return anyArray[2];
}
// console.log(handleArray(array1));
console.log(handleArray([100, 300, 500]));

console.log(one(5));
function one(num) {
  return num + 1;
}

const two = function (num) {
  return num + 6;
};
console.log(two(34));

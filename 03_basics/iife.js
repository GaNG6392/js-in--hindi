//imediate invoked function expresion (IIFE)
// we use iife because save our code global variable polute

(function one(){       // named iife
    console.log("Hello everyone")
})();

( (name) =>{          // sample iife with parameter
    console.log(`Hello ...  i am ${name}`)
})("ganga ram")
/* From 1 to 100
Print Fizz whenever number is multiple of 3
Print Buzz whenever number is multiple of 5
Print FizzBuzz whenever number is multiple of 3 and 5
Print Bang when number is multiple of 7
Print Bong when number is multiple of 11
Print number when above conditions are not satisfied */

for (let i=1; i<=100; i++) {
   if (i%3 == 0 && i%5 == 0 && i%7 ==0) {
    console.log('Fizz');
   }
   else if (i%7 ==0 && (i%3 == 0 || i%5 == 0)) {
    console.log('FizzBang');
   }
   else if (i%7 ==0) {
    console.log('Bang');
   }
   else if (i%3 == 0) {
    console.log('Buzz');
   }
   else if (i%5 == 0) {
    console.log('FizzBuzz');
   }
   else if (i%11 == 0) {
    console.log('Bong');
   }
  
   else {
    console.log(i);
   }
}


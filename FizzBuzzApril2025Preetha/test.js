

function returnPhrase(number, divisor, phrase) {
    let count = 0;
    for (let i=1; i<= number; i++) {
        for (let j=0; j<divisor.length; j++) {
            if(i%divisor[j] == 0) {
                if(divisor.length == 1) {
                count ++ ;   
                 }
                 else if (divisor.length > 1) {
                continue;
                 }
             }
        }
        if (count>0) {
            console.log(phrase);
            count = 0;
        }
        else {
            console.log(i);
            
        }        
    }
}


returnPhrase(21,[3],'Fizz');
//returnPhrase(20,[5],'Buzz');
//returnPhrase(30,[3,5],'FizzBuzz');
/* From 1 to 100
Print Fizz whenever number is multiple of 3
Print Buzz whenever number is multiple of 5
Print FizzBuzz whenever number is multiple of 3 and 5
Print number when above conditions are not satisfied */



function returnPhrase(number) {
    let phrase = '';
    for (let i=1; i<=number; i++) {
        phrase = calculatePhrase(i);
        console.log(phrase);
    }
}

function calculatePhrase(number) {
    if(number%3 == 0 && number%5 == 0) {
        return 'FizzBuzz';
    }
    else if(number%3 == 0) {
        return 'Fizz' ;
    }
    else if (number%5 == 0) {
        return 'Buzz';
       
    }

    return number;   
}

returnPhrase(15);



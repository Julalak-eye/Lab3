let rendom_num = Math.floor(Math.random() * 101)
let first = 1 , second = 100;
let num = prompt("Guess the number between 1 and 100 inclusive or input other number to see the secret number.");

do{
    if(num == rendom_num){
        var win = 1;
        break;
    }
    
    else if(num > rendom_num) {
        second = num;
        num = prompt("Guess the number between " + first + " and " + second + " inclusive or input other number to see the secret number.");
    }

    else {
        first = num;
        num = prompt("Guess the number between " + first + " and " + second + " inclusive or input other number to see the secret number.");
    }
}
while(first < num && num < second);

if(win == 1){
    alert("Matched! You win.\nThe secret number is " + rendom_num);
}
else {
    alert("The secret number is " + rendom_num);
}

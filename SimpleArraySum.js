//Complete the simpleArraySum function below.
//Will return the sum of the array as an integer.
//simpleArraySum has the following parameters:
//     ar : an array of integers.
//sample input 1 2 3 4 10 11.
//sample output ar1 = 31, ar2 = 50.


function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
ar1 = [1,2,3,4,10,11];
ar2 = [10, 10, 5, 5, 10, 10];
console.log(simpleArraySum(ar1));
console.log(simpleArraySum(ar2));
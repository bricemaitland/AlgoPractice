//Complete the compareTriplets function below.
//The function should return an integer array.
//The function accepts the following parameters:
// Integer array a, Integer array b.

//psudo code:
//asking to display the sum of how many elements have greater values per index
//for example a[0] = 17 and b[0] = 99, 17>99 therefor b counter is 1.
//have an a counter and a b counter

a = [17, 28, 30];
b = [99, 16, 8];
function compareTriplets(a,b) {
    let countA = 0;
    let countB = 0;
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] < b[i]) {
            countB++;
        } 
        else if(a[i] > b[i]) {
            countA++;
        }
    }
    console.log([countA,countB]);
    return [countA, countB];
}
compareTriplets([17, 28, 30], [99, 16, 8]);

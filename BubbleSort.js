//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping 
//the adjacent elements if they are in wrong order.


//Psudo
//arrange elements from smallest to greatest
//iterate through the element to continually move the smallest digit to the left

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length - 1; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            } 
        }
    }
    return arr;
}
console.log(BubbleSort([1,6,3,5,4,8]));

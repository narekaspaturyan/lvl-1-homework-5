// binary search 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let elem = 5

function search(arr, el) {

    let startIndex = 0
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)

        if (arr[middleIndex] === el) {
            return `The index of ${el} is ${middleIndex}`
        }
        if (arr[middleIndex] < el) {
            startIndex = middleIndex + 1

        } else {
            endIndex = middleIndex - 1
        }
    }
    return "There is no such a number in the array"
}

console.log(search(array, elem))
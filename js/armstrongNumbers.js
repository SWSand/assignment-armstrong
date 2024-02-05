// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function() {

};


function findArmstrongNumbers(arr){
    armstrongArr = []

    for(num in arr){
        if (num <10){
            armstrongArr.pop(num)
        }
    }
}

console.log(findArmstrongNumbers([0,1,2,3,4,5,6,7,8,9,10,11,12]))
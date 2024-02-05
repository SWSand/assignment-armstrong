// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function (arr) {
    armstrongArr = [];
    strArr = String(arr);
  
    for (num in arr) {
      iExp = null;
  
      if (num < 10) {
        armstrongArr.push(arr[num]);
      } else {
        for (i in String(arr[num])) {
          iExp += (+String(arr[num])[i]) ** +String(arr[num]).length;
        }
        if (iExp === +arr[num]) {
          armstrongArr.push(arr[num]);
        }
      }
    }
    return armstrongArr;
  }

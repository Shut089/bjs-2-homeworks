function getArrayParams(...arr) {

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (value < min) min = value;
        if (value > max) max = value;
        sum += value;
    }

    const avg = +(sum / arr.length).toFixed(2);


  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
    if (arr.length === 0)
    return 0;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0)
    return 0;

    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (value < min) min = value;
        if (value > max) max = value;
    }
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0)
    return 0;

    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++){
        const value = arr[i];

        if (value % 2 === 0){
            sumEven += value;
        } else {
            sumOdd += value;
        }
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0)
    return 0;

    let sumEven = 0;
    let countEven = 0;

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

    if (value % 2 === 0) {
      sumEven += value;
      countEven += 1;
    }
  }

    if (countEven === 0)
    return 0;

    return sumEven / countEven;
}

function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
      const currentArr = arrOfArr[i];
      const result = func(...currentArr);

    if (result > maxWorkerResult) {
       maxWorkerResult = result;
        }
      }

      return maxWorkerResult;

}

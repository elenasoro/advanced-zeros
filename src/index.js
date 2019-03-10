module.exports = function getZerosCount(number, base) {
  var result = 0;
  var prime1 = 0;
  var prime2 = 0;
  var times = 0;
  var resultPrimeOne = 0;

  function findZeros(number, prime){
    for (var i = prime; i < number; i*=prime) {
      result += Math.floor(number/i);
    }
  }

  function calculatePrimes(base){


    while (base%2==0 && base>0){
      prime1 = 2;
      base = base/2;
      times++;
      prime2 = base;

    }



  }

  if(base > 2 && base%2 == 0){
    calculatePrimes(base);
    // console.log(prime1);
    // console.log(prime2);
    // console.log(times);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/times);
    // console.log(resultPrimeOne);

    result = 0;
    if(prime2>1){
      findZeros(number, prime2);
      resultPrimeTwo = result;
      result = Math.min(resultPrimeOne, resultPrimeTwo);
    }
    else{
      result = resultPrimeOne;
    }

    // console.log(resultPrimeTwo);


    // console.log(result);
    return result;
  }
  else if (base%2 != 0 && base>2){
    findZeros(number, base);
    // console.log(result);
    return result;
  }
  else if(base == 2){
    findZeros(number, base);
    // console.log(result);
    return result;
  }

}

// console.log(getZerosCount(58186721, 4));

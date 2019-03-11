module.exports =
function getZerosCount(number, base) {
  var result = 0;
  var prime1 = 0;
  var prime2 = 0;
  var prime3 = 0;
  var timesTwo = 0;
  var timesThree = 0;
  var resultPrimeOne = 0;
  var resultPrimeTwo = 0;
  var resultPrimeThree = 0;

  function findZeros(number, prime){
    for (var i = prime; i < number; i*=prime) {
      result += Math.floor(number/i);
    }
  }

  function calculatePrimes(base){
    while (base%2==0 && base>0){
      prime1 = 2;
      base = base/2;
      timesTwo++;
      prime2 = base;
    }
    if(base%3==0){
        while (base%3==0 && base>0){
          prime2 = 3;
          base = base/3;
          timesThree++;
          prime3 = base;
      }
    }
  }



  if(base > 2 && base%2 == 0){
    calculatePrimes(base);

    // console.log(prime1);
    // console.log(prime2);
    // console.log(prime3);
    // console.log(timesTwo);
    // console.log(timesThree);

    findZeros(number, prime1);
    // console.log(result);
    resultPrimeOne = Math.floor(result/timesTwo);
    // console.log(resultPrimeOne);
    result = 0;

    if(prime2>1){
      findZeros(number, prime2);

      // console.log(result);
      if(timesThree>0){
        resultPrimeTwo = Math.floor(result/timesThree);
      }
      else{
        resultPrimeTwo = result;
      }
      // console.log(resultPrimeTwo);
      result = 0;

      if(prime3>1){
        findZeros(number, prime3);
        // console.log(result);
        resultPrimeThree = result;
        // console.log(resultPrimeThree);
      }
      if(resultPrimeThree==0){
        result = Math.min(resultPrimeOne, resultPrimeTwo);
      }
      else{
        result = Math.min(resultPrimeOne, resultPrimeTwo, resultPrimeThree);
      }

      // console.log(result);
    }
    else{
      result = resultPrimeOne;
    }




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

// console.log(getZerosCount(71398757, 12));

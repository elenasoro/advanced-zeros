module.exports = function getZerosCount(number, base) {
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
    if(base%2==0){
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
        if(base%7==0){
            while (base%7==0 && base>0){
              prime3 = 7;
              base = base/7;

          }
        }
      }
      if(base%5==0){
          while (base%5==0 && base>0){
            prime2 = 5;
            base = base/5;
            timesThree++;
            prime3 = base;
        }
      }
      if(base%7==0){
          while (base%7==0 && base>0){
            prime2 = 7;
            base = base/7;
            timesThree++;
            prime3 = base;
        }
      }

    }


    else if(base%3==0){
      while (base%3==0 && base>0){
        prime1 = 3;
        base = base/3;
        timesTwo++;
        prime2 = base;
    }
    if(base%7==0){
        while (base%7==0 && base>0){
          prime2 = 7;
          base = base/7;
          timesThree++;
          prime3 = base;
      }
    }
    }


    else if(base%5==0){
      while (base%5==0 && base>0){
        prime1 = 5;
        base = base/5;
        timesTwo++;
        prime2 = base;
    }
    }
    else if(base%7==0){
      while (base%7==0 && base>0){
        prime1 = 7;
        base = base/7;
        timesTwo++;
        prime2 = base;
    }
    }
    else if(base%11==0){
      while (base%11==0 && base>0){
        prime1 = 11;
        base = base/11;
        timesTwo++;
        prime2 = base;
    }
    }
    else if(base%13==0){
      while (base%13==0 && base>0){
        prime1 = 13;
        base = base/13;
        timesTwo++;
        prime2 = base;
    }
    }

  }



  if(base > 2 && base%2 == 0){
    calculatePrimes(base);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/timesTwo);
    result = 0;

    if(prime2>1){
      findZeros(number, prime2);
      if(timesThree>0){
        resultPrimeTwo = Math.floor(result/timesThree);
      }
      else{
        resultPrimeTwo = result;
      }
      result = 0;

      if(prime3>1){
        findZeros(number, prime3);
        resultPrimeThree = result;
      }
      if(resultPrimeThree==0){
        result = Math.min(resultPrimeOne, resultPrimeTwo);
      }
      else{
        result = Math.min(resultPrimeOne, resultPrimeTwo, resultPrimeThree);
      }
    }
    else{
      result = resultPrimeOne;
    }
    return result;
  }

  else if(base%3 == 0 && base>3){
    calculatePrimes(base);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/timesTwo);

    if(prime2>1){
      result = 0;
      findZeros(number, prime2);

      if(timesThree>0){
        resultPrimeTwo = Math.floor(result/timesThree);
      }
      else{
        resultPrimeTwo = result;
      }
      }
    if(resultPrimeTwo == 0){
      result = resultPrimeOne;
    }
    else{
      result = Math.min(resultPrimeOne, resultPrimeTwo);
    }

    return result;
  }

  else if(base%5 == 0 && base>5){
    calculatePrimes(base);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/timesTwo);

    if(prime2>1){
      result = 0;
      findZeros(number, prime2);
      resultPrimeTwo = result;
      }
    if(resultPrimeTwo == 0){
      result = resultPrimeOne;
    }
    else{
      result = Math.min(resultPrimeOne, resultPrimeTwo);
    }

    return result;
  }


  else if(base%7 == 0 && base>7){
    calculatePrimes(base);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/timesTwo);

    if(prime2>1){
      result = 0;
      findZeros(number, prime2);
      resultPrimeTwo = result;
      }
    if(resultPrimeTwo == 0){
      result = resultPrimeOne;
    }
    else{
      result = Math.min(resultPrimeOne, resultPrimeTwo);
    }

    return result;
  }
  else if(base%11 == 0 && base>11){
    calculatePrimes(base);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/timesTwo);

    if(prime2>1){
      result = 0;
      findZeros(number, prime2);
      resultPrimeTwo = result;
      }
    if(resultPrimeTwo == 0){
      result = resultPrimeOne;
    }
    else{
      result = Math.min(resultPrimeOne, resultPrimeTwo);
    }

    return result;
  }

  else if(base%13 == 0 && base>13){
    calculatePrimes(base);
    findZeros(number, prime1);
    resultPrimeOne = Math.floor(result/timesTwo);

    if(prime2>1){
      result = 0;
      findZeros(number, prime2);
      resultPrimeTwo = result;
      }
    if(resultPrimeTwo == 0){
      result = resultPrimeOne;
    }
    else{
      result = Math.min(resultPrimeOne, resultPrimeTwo);
    }
    return result;
  }

  else if(base == 2){
    findZeros(number, base);
    return result;
  }
  else{
    findZeros(number, base);
    return result;
  }

}

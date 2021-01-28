const isPrime = num => {
  // do code here
  let divider = 0
  for(let a = 1; a <= num; a++) {
    if(num % a === 0){
      divider++
    }
  }
  return divider === 2 ? `${num} IS A PRIME` : `${num} IS NOT A PRIME`
}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(2), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')


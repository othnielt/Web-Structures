window.onload = () => {
// Initialize the array with all elements set to true (1)
var primes = new Array(1000).fill(1);

// Set the first two elements (0 and 1) to false (0)
primes[0] = 0;
primes[1] = 0;

// Loop through the array and apply the sieve algorithm
for (var i = 2; i <= Math.sqrt(999); i++) {
  if (primes[i] == 1) {
    for (var j = i*i; j <= 999; j += i) {
      primes[j] = 0;
    }
  }
}

// Print the prime numbers between 1 and 999 to an HTML element
var output = document.getElementById("primes");
if (output !== null) {
  for (var i = 2; i <= 999; i++) {
    if (primes[i] == 1) {
      output.innerHTML += i + " ";
    }
  }
} 
};



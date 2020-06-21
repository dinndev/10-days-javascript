/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
      const reverse = s.split("").reverse().join("");
      console.log(reverse);
    }
    catch(e) {
     console.log(e.message);
     console.log(s)
    }
  }
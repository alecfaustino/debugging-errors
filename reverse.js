var input = process.argv[2]; // this is the user input from the terminal so I need to pass a word

if (input) {
  console.log(reverse(input));
}

function reverse(original) {
  return original.split('').reverse().join('');
}
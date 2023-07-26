const getValues = () => {
  let userString = document.getElementById('user-string').value;

  let revString = checkForPalindrome(userString);

  displayResults(revString, userString);

}

const checkForPalindrome = (inputString) => {

  var re = /[^A-Za-z0-9]/g;
  let input = inputString.toLowerCase().replace(re, '');
  var length = input.length;

  for (var i = 0; i < length / 2; i++) {
    if (input[i] !== input[length - 1 - i]) {
      return false;
    }
  }
  return true;
}


const displayResults = (revString, userString) => {
  let inputBox = document.getElementById('user-string');
  let alertBox = document.getElementById('alert');
  if (revString === true) {
    document.getElementById('palindrome').textContent = "You entered a Palindrome!";
    document.getElementById('results').textContent = userString;
    alertBox.classList.remove('invisible', 'alert-danger');
    alertBox.classList.add('alert-success');
    inputBox.classList.remove('border', 'border-2', 'border-danger-subtle')
    inputBox.classList.add('border', 'border-2', 'border-success-subtle')

  }
  else if (revString === false) {
    document.getElementById('palindrome').textContent = "You did not enter a Palindrome!";
    document.getElementById('results').textContent = userString;
    alertBox.classList.remove('invisible', 'alert-success');
    alertBox.classList.add('alert-danger');
    inputBox.classList.remove('border', 'border-2', 'border-success-subtle')
    inputBox.classList.add('border', 'border-2', 'border-danger-subtle')

  }

}


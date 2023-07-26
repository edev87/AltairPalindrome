const getValues = () => {
  let userString = document.getElementById('user-string').value;
  let obj = checkForPalindrome(userString);

    displayResults(obj);

}

const checkForPalindrome = (inputString) => {

  var re = /[^A-Za-z0-9]/g;
  let input = inputString.toLowerCase().replace(re, '');
  var length = input.length;

  let revString = '';
  for (let i = input.length - 1; i >= 0; i--) {
    let letter = input[i];
    revString += letter;
  }

  let palindromeObj = {
    isPalindrome: (revString == inputString),
    reversedString: revString
  }

  return palindromeObj;
}

const displayResults = (obj) => {
  let inputBox = document.getElementById('user-string');
  let alertBox = document.getElementById('alert');
  if (obj.isPalindrome) {
    document.getElementById('palindrome').textContent = "You entered a Palindrome!";
    document.getElementById('results').textContent = obj.reversedString;
    alertBox.classList.remove('invisible', 'alert-danger');
    alertBox.classList.add('alert-success');
    inputBox.classList.remove('border', 'border-2', 'border-danger-subtle')
    inputBox.classList.add('border', 'border-2', 'border-success-subtle')

  }
  else if (!obj.isPalindrome) {
    document.getElementById('palindrome').textContent = "You did not enter a Palindrome!";
    document.getElementById('results').textContent = obj.reversedString;
    alertBox.classList.remove('invisible', 'alert-success');
    alertBox.classList.add('alert-danger');
    inputBox.classList.remove('border', 'border-2', 'border-success-subtle')
    inputBox.classList.add('border', 'border-2', 'border-danger-subtle')

  }

}


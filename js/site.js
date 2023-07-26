const getValues = () => {
  let userString = document.getElementById('user-string').value;

  let revString = checkForPalindrome(userString);

  displayResults(revString, userString);

}

const checkForPalindrome = (inputString) => {
  // let regex = /[^a-z0-9]/gi; replace anything that isnt a-z 0-9, ^ => means not
  //this removes extra characters

  var re = /[^A-Za-z0-9]/g;
  let input = inputString.toLowerCase().replace(re, '');
  var length = input.length;

  // let palindrome = {
  //   isPalindrome: (revString == userString);
  //   reversedString: revString;
  // };
  // palindrome.isPalindrome = true;
  // palindrome.reversedString = revString;
  //let isPalindrome = (revString == userString);

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


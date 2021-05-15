// declarations!
let generateBtn = document.getElementById('generate')
document.getElementById('password').readonly = false
const lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

//when generate password button is clicked this runs:
document.getElementById('generate').addEventListener('click', _ => {
  let result = [];
  let password = "";
  // prompt user for valid number of characters for password
  let length = (prompt('Choose the number of characters in your password. \nMinimum: 8 characters\nMaximum: 128 characters')).trim()
  // checks to see if number is valid
  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert('Please enter a number between 8 and 128 characters.\nPlease try again.')
    return document.querySelector("textarea").value = ""
    // checks to see if input for prompt is a number and nothing else
  } else if (isNaN(length) === true || length === "" || length == null) {
    alert('Please enter a "number" between 8 and 128 characters.\nPlease try again.')
    return document.querySelector("textarea").value = ""
  } else {
    // if a proper value was put in, function moves on to confirm lower case letter to add to password
    if (confirm('Would you like to add lower case letters? \nClick OK for yes, click CANCEL for no.')) {
      result = result.concat(lowCase)
    }
    // confirm upper case letters to add
    if (confirm('Would you like to add Upper case letters? \nClick OK for yes, click CANCEL for no.')) {
      result = result.concat(upCase)
    }
    //confirm numbers to add
    if (confirm('Would you like to add numbers? \nClick OK for yes, click CANCEL for no.')) {
      result = result.concat(num);
    }
    // confirm special numbers to add
    if (confirm('Would you like to add special characters? \nClick OK for yes, click CANCEL for no.')) {
      result = result.concat(specialChar)
    }
    // no available characters
    if (!result.length) {
      alert('You must choose at least one of the options above.')
      return document.querySelector("textarea").value = ""
    }
  }

  // Generate password string
  for (let i = 0; i < length; i++) {
    password = password + result[Math.floor(Math.random() * result.length)];
  }

  // puts the password onto the "textarea" on the index.html
  document.querySelector("textarea").value = password
})

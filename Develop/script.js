// declarations!
let generateBtn = document.getElementById('generate')
document.getElementById('password').readonly = false
const lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

let user = [];
let result = [];
// reset
let reset = _ => {
  user = []
}
//when generate password button is clicked this runs:
document.getElementById('generate').addEventListener('click', _ => {
  reset()
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
    let chooseLowCase = confirm('Would you like to add lower case letters? \nClick OK for yes, click CANCEL for no.')
    if (chooseLowCase === true) {
      result = result.concat(lowCase)
    } else {
      result = []
      // confirm upper case letters to add
    } let chooseUpCase = confirm('Would you like to add Upper case letters? \nClick OK for yes, click CANCEL for no.')
    if (chooseUpCase === true) {
      result = result.concat(upCase)
    } else {
      result = result
      //confirm numbers to add
    } let chooseNum = confirm('Would you like to add numbers? \nClick OK for yes, click CANCEL for no.')
    if (chooseNum === true) {
      result = result.concat(num);
    } else {
      result = result
      // confirm special numbers to add
    } let chooseSpecialChar = confirm('Would you like to add special characters? \nClick OK for yes, click CANCEL for no.')
    if (chooseSpecialChar === true) {
      result = result.concat(specialChar)
      // user must choose at least one option or it resets
    } else if (chooseLowCase === false && chooseUpCase === false && chooseNum === false && chooseSpecialChar === false) {
      alert(' You must choose at least one of the options above.')
      return document.querySelector("textarea").value = ""
    } else {
      result = result
    }
  }
  // loop to generate all the arrays that were selected to a proper length
  for (i = 0; i < length; i++) {
    user.push(result[Math.floor(Math.random() * result.length)]);
  }
  // takes the arrays and turns into string without any "[]" or ","
  let password = user.join('')
  console.log(password)

  // puts the password onto the "textarea" on the index.html
  document.querySelector("textarea").value = password
})


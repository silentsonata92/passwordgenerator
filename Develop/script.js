let generateBtn = document.getElementById('generate')
document.getElementById('password').readonly = false
const lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']

let user = [];
let result = [];
let reset = _ => {
  user = []
}

document.getElementById('generate').addEventListener('click', _ => {
  reset()
  let length = (prompt('Choose the number of characters in your password. \nMinimum: 8 characters\nMaximum: 128 characters'))
  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert('Please enter a number between 8 and 128 characters.\nPlease try again.')
  } else if (isNaN(length) === true || length === '') {
    alert('Please enter a number between 8 and 128 characters.\nPlease try again.')
  } else {
    let chooseLowCase = confirm('Would you like to add lower case letters? \nClick OK for yes, click CANCEL for no.')
    if (chooseLowCase === true) {
      result = result.concat(lowCase)
    } else {
      result = result
    } let chooseUpCase = confirm('Would you like to add Upper case letters? \nClick OK for yes, click CANCEL for no.')
    if (chooseUpCase === true) {
      result = result.concat(upCase)
    } else {
      result = result
    } let chooseNum = confirm('Would you like to add numbers? \nClick OK for yes, click CANCEL for no.')
    if (chooseNum === true) {
      result = result.concat(num);
    } else {
      result = result
    } let chooseSpecialChar = confirm('Would you like to add special characters? \nClick OK for yes, click CANCEL for no.')
    if (chooseSpecialChar === true) {
      result = result.concat(specialChar)
    } else if (chooseLowCase === false && chooseUpCase === false && chooseNum === false && chooseSpecialChar === false) {
      alert(' You must choose at least one of the options above.')
      return document.querySelector("textarea").value = ""
    } else {
      result = result
    }
  }
  for (i = 0; i < length; i++) {
    user.push(result[Math.floor(Math.random() * result.length)]);
  }
  let password = user.join('')
  console.log(password)
  document.querySelector("textarea").value = password
})


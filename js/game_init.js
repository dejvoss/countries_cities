// --------------------------------- GAME INITIALIZE ------------------------------------------------------------
//game initialization, user name form, game settings, declaring 3 important variable for game - user name, difficult level and categories


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ----------------------------------------------- DECLARED VARIABLES -----------------------------------------------------

var userName; //declare global variable user name    
var difLevel; // global variable for difficult level
var selCategor = []; // global variable for selected categories
var alphabetOnStart = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var currentGameAlphabet = []; // global variable for current game alphabet - after each round the chosen letter is removed from that alphabet to don't repeat it in next rounds
var roundLetter; // global variable for chosen letter for current game round

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// -------------------------------------------- USER NAME FORM -------------------------------------------------------//
// Initialize User name form by clicking start game button
function openUserNameForm() {
  document.getElementById("userNameForm").style.display = "block";
}

// Close user name form by clicking cancel
function closeUserNameForm() {
  document.getElementById("userNameInp").value = "";
  document.getElementById("userNameForm").style.display = "none";
  document.getElementById("gameSettings").style.display = "none";
  document.getElementById("gameSection").style.display = "none";

}

//   Click next in user name form, save the user name in variable
function openSettings() {
  var inputForm = document.getElementById("userNameInp");
  if (inputForm.value == "") {
    document.getElementById("noMessSpan").style.display = "block"; // show message when userName field is empty
  }
  else {
    userName = inputForm.value;
    document.getElementById("userNameForm").style.display = "none"; // close username form
    document.getElementById("gameSettings").style.display = "block"; // open game settings form
    //document.getElementById("gameSection").style.display = "block";
  }

}

// remove message when user name was empty but user click on user name input field
$("#userNameInp").focus(function () {
  document.getElementById("noMessSpan").style.display = "none";
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ----------------------------------------------------- GAME SETTINGS -------------------------------------------------//

// game settings category buttons - select all
var inputCheck = document.getElementById("setCatCheckboxes").getElementsByTagName("input");
document.getElementById("selectAllCat").addEventListener("click", function () {
  for (i = 0; i < inputCheck.length; i++) {
    inputCheck[i].checked = true;
  }
});
// game settings category buttons - unselect all
document.getElementById("unSelectAllCat").addEventListener("click", function () {
  for (i = 0; i < inputCheck.length; i++) {
    inputCheck[i].checked = false;
  }
});

// click save settings button in game settings form, set categories and difficult level
document.getElementById("saveSettBtn").addEventListener("click", saveSettings);

function saveSettings() {
  difLevel = document.getElementById("difLevel").value;
  var tempSelCategor = []; //declare local empty variable for categoriers
  for (i = 0; i < inputCheck.length; i++) { //check if category is choosen and add to the local category variable
    if (inputCheck[i].checked === true) {
      tempSelCategor.push(inputCheck[i].value);
    }
  }
  // show alert if none category is selected
  if (tempSelCategor.length === 0) {
    alert("You need to choose at least one category.");
  }
  selCategor = tempSelCategor; // assing local category variable to the global one 
  // create a base game Result Array - add headings based on chosen categories
  document.getElementById("gameSettings").style.display = "none"; // hide game settings div
  document.getElementById("roundPopUp").style.display = "block"; // show game round div
}
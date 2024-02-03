
// java for drop down list//
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function faqmyFunction1() {
  document.getElementById("faqmyDropdown1").classList.toggle("faqshow");
}
function faqmyFunction2() {
  document.getElementById("faqmyDropdown2").classList.toggle("faqshow");
}
function faqmyFunction3() {
  document.getElementById("faqmyDropdown3").classList.toggle("faqshow");
}
function faqmyFunction4() {
  document.getElementById("faqmyDropdown4").classList.toggle("faqshow");
}
function faqmyFunction5() {
  document.getElementById("faqmyDropdown5").classList.toggle("faqshow");
}
function faqmyFunction6() {
  document.getElementById("faqmyDropdown6").classList.toggle("faqshow");
}
function faqmyFunction7() {
  document.getElementById("faqmyDropdown7").classList.toggle("faqshow");
}
function faqmyFunction8() {
  document.getElementById("faqmyDropdown8").classList.toggle("faqshow");
}
function faqmyFunction9() {
  document.getElementById("faqmyDropdown9").classList.toggle("faqshow");
}
function faqmyFunction10() {
  document.getElementById("faqmyDropdown10").classList.toggle("faqshow");
}
function faqmyFunction11() {
  document.getElementById("faqmyDropdown11").classList.toggle("faqshow");
}
function faqmyFunction12() {
  document.getElementById("faqmyDropdown12").classList.toggle("faqshow");
}
function faqmyFunction13() {
  document.getElementById("faqmyDropdown13").classList.toggle("faqshow");
}
function faqmyFunction14() {
  document.getElementById("faqmyDropdown14").classList.toggle("faqshow");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.faqdropbtn')) {
    var dropdowns = document.getElementsByClassName("faqdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('faqshow')) {
        openDropdown.classList.remove('faqshow');
      }
    }
  }
}
//Statement 1 sets a variable before the loop starts (let i = 0).

//Statement 2 defines the condition for the loop to run (i must be less than 5).

//Statement 3 increases a value (i++) each time the code block in the loop has been executed.//



//modal//

// Get the modal
var modal = document.getElementById("bookformmyModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("bookformclose")[0];

// When the user clicks the button, open the modal
 function bookformfunctiononclick() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
window.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//confirmation//

function confirmation() {
  var urlarray = window.location.href.split('?');
  var urlwant = urlarray[1];
  var urlwant2 = urlwant.split(/&|=/);

  var room = urlwant2[1];
  var room1 = room.replace("%24","$").replaceAll("+"," ");;

  var checkin= urlwant2[3];
  var checkout = urlwant2[5];
  var adult = urlwant2[9];
  var child = urlwant2[11];
  var roomnum = urlwant2[13];
  var title = urlwant2[15];
  var firstname = urlwant2[17].replaceAll("+"," ");
  var contact = urlwant2[19].replaceAll("+"," ");
  var emailraw = urlwant2[21];
  var emailclean = emailraw.replace("%40", "@")

  document.getElementById("roombooked").innerHTML = room1;
  document.getElementById("checkin").innerHTML = checkin;
  document.getElementById("checkout").innerHTML = checkout;
  document.getElementById("adult").innerHTML = adult;
  document.getElementById("child").innerHTML = child;
  document.getElementById("roomnum").innerHTML = roomnum;
  document.getElementById("name").innerHTML = title + " " + firstname;

  document.getElementById("contact").innerHTML = contact;


  document.getElementById("emailclean").innerHTML = emailclean;

}

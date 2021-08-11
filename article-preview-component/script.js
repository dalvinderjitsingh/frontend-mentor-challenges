// Get UI items
const btnElement = document.getElementById("shareBtn");
const popUpElement = document.getElementById("popUp");

// Remove the share pop-up
popUpElement.style.display = "none";

// When the button is clicked, if the pop-up is removed then add it in else remove it
btnElement.addEventListener("click", function () {
  if (popUpElement.style.display == "none") {
    popUpElement.style.display = "block";
    console.log("Displaying pop-up");
  } else {
    popUpElement.style.display = "none";
    console.log("Removed pop-up");
  }
});

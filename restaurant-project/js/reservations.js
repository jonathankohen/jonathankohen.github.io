$(function() {
  $("#datepicker").datepicker();
});

const inputName = document.getElementById("inputName").value;
const inputDate = document.getElementById("datepicker").value;
const inputTime = document.getElementById("inputTime").value;

function handleSubmit() {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode(
    `<h2>Thank you, ${inputName}!</h2><p>Your reservation for ${inputDate} at ${inputTime} has been confirmed.</p>`
  );
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("confirmation");
  document.body.insertBefore(newDiv, currentDiv);
}

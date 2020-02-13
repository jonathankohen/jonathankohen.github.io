$(function() {
  $("#datepicker").datepicker();
});

function handleSubmit(event) {
  event.preventDefault();
  const inputName = document.getElementById("inputName").value;
  const inputDate = document.getElementById("datepicker").value;
  const inputTime = document.getElementById("timepicker").value;

  document.getElementById("thanks").innerHTML = "Thank you, " + inputName + "!";

  document.getElementById("confirmation").innerHTML =
    "Your reservation request for " +
    inputDate +
    " at " +
    inputTime +
    " will be reviewed by the Krusty Krab staff.";

  document.getElementById("confirmation2").innerHTML =
    "We will be in touch shortly with a confirmation.";
}

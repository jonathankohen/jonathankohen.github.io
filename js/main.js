$(function() {
  $("#datepicker").datepicker();
});

function handleSubmit() {
  const inputName = document.getElementById("inputName").value;
  const inputDate = document.getElementById("datepicker").value;
  const inputTime = document.getElementById("inputTime").value;

  alert(
    `<h2>Thank you, ${inputName}!</h2><p>Your reservation for ${inputDate} at ${inputTime} has been confirmed.</p>`
  );
}

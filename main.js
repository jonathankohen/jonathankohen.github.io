let name = document.getElementById("name").value;
let date = document.getElementById("date").value;

function bleh() {
  let reservationsTable = document.getElementById("bleh-body");
  let newTableRow = document.createElement("tr");
  newTableRow.setAttribute("class", "submitted");
  newTableRow.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;

  reservationsTable.appendChild(newTableRow);
}
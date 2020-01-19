/*jshint esversion: 6 */

function bleh() {
  const name = document.getElementById("name").value;
  console.log(name);
  const date = document.getElementById("date").value;
  console.log(date);

  const reservationsTable = document.getElementById("bleh-body");
  console.log(reservationsTable);
  const newTableRow = document.createElement("tr");
  console.log(newTableRow);
  newTableRow.setAttribute("class", "submitted");
  console.log(newTableRow);
  newTableRow.innerHTML = `<td class="reservation-names submitted-name">${name}</td><td class="submitted-date">${date}</td>`;
  console.log(newTableRow);

  reservationsTable.appendChild(newTableRow);
  console.log(reservationsTable);
}

document.getElementById("#subtmit-button").addEventListener("click", bleh());

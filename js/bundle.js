(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('index.js')) :
  typeof define === 'function' && define.amd ? define(['index.js'], factory) :
  (global = global || self, factory(global.index_js));
}(this, (function (index_js) { 'use strict';

  function bleh() {
    index_js.newReservation.setAttribute("class", "submitted");

    index_js.newReservation.innerHTML = `<td class="reservation-names submitted-name">${index_js.name}</td><td class="submitted-date">${index_js.date}</td>`;

    index_js.reservations.appendChild(index_js.newReservation);

    index_js.dbTarget.set({
      name: this.name,
      date: this.date
    });
  }

  document.getElementById("subtmit-button").onclick = bleh();

})));

function renderLists() {
  document.getElementById("medList").innerHTML =
    medications.map(m =>
      `<li class="list-group-item d-flex justify-content-between">
        <span>${m.name}</span>
        <span class="badge bg-primary">${m.time}</span>
      </li>`
    ).join("");

  document.getElementById("bpList").innerHTML =
    bloodPressures.map(b =>
      `<li class="list-group-item">
        ${b.sys}/${b.dia}
        <span class="badge bg-secondary float-end">${b.date}</span>
      </li>`
    ).join("");

  document.getElementById("sugarList").innerHTML =
    sugars.map(s =>
      `<li class="list-group-item">
        ${s.value}
        <span class="badge bg-secondary float-end">${s.date}</span>
      </li>`
    ).join("");
}if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
import { inventory } from "./products.js";

export const listProducts = () => {

  const table = document.getElementById("inventory-table-events");

  const tbody = document.getElementById("tbody");

 

  inventory.forEach((item, id) => {

    const row = tbody.insertRow();

 

    const cell1 = row.insertCell(0);

    const cell2 = row.insertCell(1);

    const cell3 = row.insertCell(2);

    const cell4 = row.insertCell(3);

 

    cell1.innerHTML = item.name;

    cell2.innerHTML = `${item.quantity} uds`;

    cell3.innerHTML = `${item.price} €`;

 

    const editButton = document.createElement("button");

    editButton.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";

    editButton.className = "edit-button";

    // editButton.id = "edit-button";

    editButton.dataset.index = id;

    editButton.dataset.bsToggle = "modal";

    editButton.dataset.bsTarget = "#modal";

    cell4.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fa-solid fa-x'></i>";
    deleteButton.className = "delete-button";
    deleteButton.dataset.index = id;
    // deleteButton.id = "delete-button";

    cell4.appendChild(deleteButton);



  });

 

};
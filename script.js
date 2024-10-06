document.addEventListener('DOMContentLoaded', function () {
    const closeNavButton = document.getElementById('close-nav');
    const navbar = document.getElementById('navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');
  
    // Show close button when navbar is expanded on small screens
    navbarToggler.addEventListener('click', function () {
      if (!navbar.classList.contains('show')) {
        closeNavButton.style.display = 'block';
      } else {
        closeNavButton.style.display = 'none';
      }
    });
  
    // Close navbar when close button is clicked
    closeNavButton.addEventListener('click', function () {
      navbar.classList.remove('show');
      closeNavButton.style.display = 'none';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const closeNavButton = document.getElementById('close-nav');
    const navbar = document.getElementById('navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Show close button when navbar is expanded on small screens
    navbarToggler.addEventListener('click', function () {
        if (!navbar.classList.contains('show')) {
            closeNavButton.style.display = 'block';
        } else {
            closeNavButton.style.display = 'none';
        }
    });

    // Close navbar when close button is clicked
    closeNavButton.addEventListener('click', function () {
        navbar.classList.remove('show');
        closeNavButton.style.display = 'none';
    });
});

// Sample data for chemicals
const chemicals = [
    {"id": 1, "name": "Acetone", "vender": "Vender A", "density": "0.79", "viscosity": "0.32", "packaging": "Drum", "packSize": "50L", "unit": "L", "quantity": 100},
    {"id": 2, "name": "Benzene", "vender": "Vender B", "density": "0.87", "viscosity": "0.34", "packaging": "Can", "packSize": "20L", "unit": "L", "quantity": 50},
    {"id": 3, "name": "Methanol", "vender": "Vender C", "density": "0.79", "viscosity": "0.6", "packaging": "Bottle", "packSize": "10L", "unit": "L", "quantity": 25},
    {"id": 4, "name": "Ethanol", "vender": "Vender D", "density": "0.789", "viscosity": "1.2", "packaging": "Can", "packSize": "30L", "unit": "L", "quantity": 60},
    {"id": 5, "name": "Toluene", "vender": "Vender E", "density": "0.87", "viscosity": "0.55", "packaging": "Drum", "packSize": "100L", "unit": "L", "quantity": 150},
    {"id": 6, "name": "Xylene", "vender": "Vender F", "density": "0.86", "viscosity": "0.64", "packaging": "Bottle", "packSize": "25L", "unit": "L", "quantity": 40},
    {"id": 7, "name": "Glycerol", "vender": "Vender G", "density": "1.26", "viscosity": "1.5", "packaging": "Drum", "packSize": "60L", "unit": "L", "quantity": 80},
    {"id": 8, "name": "Hexane", "vender": "Vender H", "density": "0.66", "viscosity": "0.3", "packaging": "Can", "packSize": "20L", "unit": "L", "quantity": 35},
    {"id": 9, "name": "Sulfuric Acid", "vender": "Vender I", "density": "1.84", "viscosity": "24", "packaging": "Drum", "packSize": "100L", "unit": "L", "quantity": 200},
    {"id": 10, "name": "Sodium Hydroxide", "vender": "Vender J", "density": "2.13", "viscosity": "80", "packaging": "Bag", "packSize": "50kg", "unit": "kg", "quantity": 75},
    {"id": 11, "name": "Ammonium Chloride", "vender": "Vender K", "density": "1.53", "viscosity": "1", "packaging": "Bag", "packSize": "30kg", "unit": "kg", "quantity": 100},
    {"id": 12, "name": "Nitric Acid", "vender": "Vender L", "density": "1.50", "viscosity": "2", "packaging": "Drum", "packSize": "40L", "unit": "L", "quantity": 90},
    {"id": 13, "name": "Hydrochloric Acid", "vender": "Vender M", "density": "1.19", "viscosity": "1.8", "packaging": "Drum", "packSize": "100L", "unit": "L", "quantity": 120},
];

// Initialize sorting direction
let sortDirection = {id: true, name: true, vender: true, density: true, viscosity: true};

// Load initial data into the table
function loadTableData() {
    const tableBody = document.getElementById("chemicalBody");
    tableBody.innerHTML = ""; // Clear previous rows
    chemicals.forEach((chemical) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${chemical.id}</td>
            <td>${chemical.name}</td>
            <td>${chemical.vender}</td>
            <td>${chemical.density}</td>
            <td>${chemical.viscosity}</td>
            <td>${chemical.packaging}</td>
            <td>${chemical.packSize}</td>
            <td>${chemical.unit}</td>
            <td>${chemical.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to sort table based on column
function sortTable(column) {
    chemicals.sort((a, b) => {
        const direction = sortDirection[column] ? 1 : -1;
        return a[column] > b[column] ? direction : -direction;
    });
    sortDirection[column] = !sortDirection[column];
    loadTableData();
}

// Add event listeners for sorting
document.getElementById("sortId").addEventListener("click", () => sortTable('id'));
document.getElementById("sortName").addEventListener("click", () => sortTable('name'));
document.getElementById("sortVender").addEventListener("click", () => sortTable('vender'));
document.getElementById("sortDensity").addEventListener("click", () => sortTable('density'));
document.getElementById("sortViscosity").addEventListener("click", () => sortTable('viscosity'));

// Add click event to rows for selection
document.getElementById("chemicalBody").addEventListener("click", (event) => {
    if (event.target.closest('tr')) {
        const selectedRow = event.target.closest('tr');
        const rows = document.querySelectorAll("#chemicalBody tr");
        rows.forEach(row => row.classList.remove('selected')); // Remove selection from all rows
        selectedRow.classList.add('selected'); // Add selection to the clicked row
    }
});

// Add a new row
document.getElementById("addRow").addEventListener("click", () => {
    const newId = chemicals.length ? chemicals[chemicals.length - 1].id + 1 : 1;
    const newChemical = {
        id: newId,
        name: `Chemical ${newId}`,
        vender: `Vender ${String.fromCharCode(65 + (newId - 1) % 26)}`, // A-Z
        density: (Math.random() * 2).toFixed(2),
        viscosity: (Math.random() * 100).toFixed(2),
        packaging: "Drum",
        packSize: `${Math.floor(Math.random() * 100 + 1)}L`,
        unit: "L",
        quantity: Math.floor(Math.random() * 200 + 1),
    };
    chemicals.push(newChemical);
    loadTableData();
});

// Move selected row up
document.getElementById("moveUp").addEventListener("click", () => {
    const selectedIndex = getSelectedRowIndex();
    if (selectedIndex > 0) {
        [chemicals[selectedIndex], chemicals[selectedIndex - 1]] = [chemicals[selectedIndex - 1], chemicals[selectedIndex]];
        loadTableData();
    }
});

// Move selected row down
document.getElementById("moveDown").addEventListener("click", () => {
    const selectedIndex = getSelectedRowIndex();
    if (selectedIndex < chemicals.length - 1) {
        [chemicals[selectedIndex], chemicals[selectedIndex + 1]] = [chemicals[selectedIndex + 1], chemicals[selectedIndex]];
        loadTableData();
    }
});

// Delete selected row
document.getElementById("deleteRow").addEventListener("click", () => {
    const selectedIndex = getSelectedRowIndex();
    if (selectedIndex > -1) {
        chemicals.splice(selectedIndex, 1);
        loadTableData();
    }
});



document.getElementById("refresh").addEventListener("click", () => {
    // Reset chemicals array to the initial data
    chemicals = [
        {"id": 1, "name": "Acetone", "vender": "Vender A", "density": "0.79", "viscosity": "0.32", "packaging": "Drum", "packSize": "50L", "unit": "L", "quantity": 100},
        {"id": 2, "name": "Benzene", "vender": "Vender B", "density": "0.87", "viscosity": "0.34", "packaging": "Can", "packSize": "20L", "unit": "L", "quantity": 50},
        {"id": 3, "name": "Methanol", "vender": "Vender C", "density": "0.79", "viscosity": "0.6", "packaging": "Bottle", "packSize": "10L", "unit": "L", "quantity": 25},
        {"id": 4, "name": "Ethanol", "vender": "Vender D", "density": "0.789", "viscosity": "1.2", "packaging": "Can", "packSize": "30L", "unit": "L", "quantity": 60},
        {"id": 5, "name": "Toluene", "vender": "Vender E", "density": "0.87", "viscosity": "0.55", "packaging": "Drum", "packSize": "100L", "unit": "L", "quantity": 150},
        {"id": 6, "name": "Xylene", "vender": "Vender F", "density": "0.86", "viscosity": "0.64", "packaging": "Bottle", "packSize": "25L", "unit": "L", "quantity": 40},
        {"id": 7, "name": "Glycerol", "vender": "Vender G", "density": "1.26", "viscosity": "1.5", "packaging": "Drum", "packSize": "60L", "unit": "L", "quantity": 80},
        {"id": 8, "name": "Hexane", "vender": "Vender H", "density": "0.66", "viscosity": "0.3", "packaging": "Can", "packSize": "20L", "unit": "L", "quantity": 35},
        {"id": 9, "name": "Sulfuric Acid", "vender": "Vender I", "density": "1.84", "viscosity": "24", "packaging": "Drum", "packSize": "100L", "unit": "L", "quantity": 200},
        {"id": 10, "name": "Sodium Hydroxide", "vender": "Vender J", "density": "2.13", "viscosity": "80", "packaging": "Bag", "packSize": "50kg", "unit": "kg", "quantity": 75},
        {"id": 11, "name": "Ammonium Chloride", "vender": "Vender K", "density": "1.53", "viscosity": "1", "packaging": "Bag", "packSize": "30kg", "unit": "kg", "quantity": 100},
        {"id": 12, "name": "Nitric Acid", "vender": "Vender L", "density": "1.50", "viscosity": "2", "packaging": "Drum", "packSize": "40L", "unit": "L", "quantity": 90},
        {"id": 13, "name": "Hydrochloric Acid", "vender": "Vender M", "density": "1.19", "viscosity": "1.8", "packaging": "Drum", "packSize": "100L", "unit": "L", "quantity": 120}
    ];
    loadTableData();
});


// Get index of selected row
function getSelectedRowIndex() {
    const tableBody = document.getElementById("chemicalBody");
    const selectedRow = tableBody.querySelector('tr.selected');
    return selectedRow ? Array.from(tableBody.children).indexOf(selectedRow) : -1;
}

// Load the initial data
loadTableData();

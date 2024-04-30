function addRow() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.getElementById("gender").value;
  var food = "";
  var foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (foodCheckboxes.length < 2) {
      alert("Please select at least 2 foods.");
      return;
  }
  foodCheckboxes.forEach(function(checkbox) {
      food += checkbox.value + ", ";
  });
  food = food.slice(0, -2); // Remove the last comma and space
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  var cells = [
      newRow.insertCell(0),
      newRow.insertCell(1),
      newRow.insertCell(2),
      newRow.insertCell(3),
      newRow.insertCell(4),
      newRow.insertCell(5),
      newRow.insertCell(6),
      newRow.insertCell(7)
  ];
  cells[0].innerText = firstName;
  cells[1].innerText = lastName;
  cells[2].innerText = address;
  cells[3].innerText = pincode;
  cells[4].innerText = gender;
  cells[5].innerText = food;
  cells[6].innerText = state;
  cells[7].innerText = country;

  // Clear form fields
  document.getElementById("myForm").reset();
}

// Test suite
function runTests() {
  // Test if there are at least 2 foods selected
  var foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  if (foodCheckboxes.length < 2) {
      console.error("Test failed: Less than 2 foods selected");
  } else {
      console.log("Test passed: At least 2 foods selected");
  }
}

// Run tests on load
runTests();




function printTable() {
    var number = parseInt(document.getElementById("numberInput").value);
    var table = "<h3>Table of " + number + "</h3><ul>";
  
    for (var i = 1; i <= 10; i++) {
      table += "<li>" + number + " x " + i + " = " + (number * i) + "</li>";
    }
  
    table += "</ul>";
  
    document.getElementById("tableContainer").innerHTML = table;
  }
function getDays() {
    var monthInput = document.getElementById("monthInput").value.toLowerCase();
    let days;

    switch (monthInput) {
      case "jan":
      case "mar":
      case "may":
      case "jul":
      case "aug":
      case "oct":
      case "dec":
        days = 31;
        break;
      case "apr":
      case "jun":
      case "sep":
      case "nov":
        days = 30;
        break;
      case "feb":
        days = "28 or 29";
        break;
      default:
        days = "Invalid month";
        break;
    }

    document.getElementById("result").innerHTML = `Total days in ${monthInput.toUpperCase()}: <span class="highlight">${days}</span>`;
}

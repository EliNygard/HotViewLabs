function daysUntilSummit() {
    const today = new Date();
    const nextSummit = new Date(2025, 7, 21)
    const difference = nextSummit - today; //difference in milliseconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); //convert ms to days
    return days;
}


// Days Until Next Summit
export function displayDaysUntilSummit() {
    const days = document.getElementById("daysUntilSummit")
    days.textContent = daysUntilSummit()
  }
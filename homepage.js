// homepage.js

document.querySelectorAll(".class-list button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectedClass = e.target.getAttribute("data-class");
    console.log("Selected class:", selectedClass);
    
    // Navigate to leaderboard.html with the selected class as a query parameter
    window.location.href = `leaderboard.html?class=${selectedClass}`;
  });
});

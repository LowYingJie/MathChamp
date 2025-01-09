// Listen for class selection
document.querySelectorAll(".class-list button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectedClass = e.target.getAttribute("data-class");
    console.log("Selected class:", selectedClass);
    alert(`You selected ${selectedClass}`);

    // Redirect to class-specific page (you can implement dynamic redirection if needed)
    // For now, redirecting to a placeholder page
    window.location.href = `class-${selectedClass}.html`;
  });
});

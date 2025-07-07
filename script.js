// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
// Dark Mode Toggle Logic
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load theme on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme and save preference
toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

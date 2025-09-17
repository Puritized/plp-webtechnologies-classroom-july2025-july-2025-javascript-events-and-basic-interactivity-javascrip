// ========================
// Part 1: Event Handling
// ========================

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark")
    ? "🌙 Toggle Light Mode"
    : "🌞 Toggle Dark Mode";
});

// ========================
// Part 2: Interactive Elements
// ========================

// Counter Game
let count = 0;
const incrementBtn = document.getElementById("incrementBtn");
const counter = document.getElementById("counter");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ========================
// Part 3: Form Validation
// ========================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload
  let errors = [];

  // Name validation
  if (nameInput.value.trim().length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }

  // Email validation with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    errors.push("Please enter a valid email address.");
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show messages
  if (errors.length > 0) {
    message.style.color = "red";
    message.textContent = errors.join(" ");
  } else {
    message.style.color = "green";
    message.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});

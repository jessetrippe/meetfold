const storageKey = "fold-theme";
const root = document.documentElement;

function preferredTheme() {
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem(storageKey, theme);
  document.querySelectorAll("[data-theme-label]").forEach((label) => {
    label.textContent = theme === "dark" ? "Light" : "Dark";
  });
}

applyTheme(preferredTheme());

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(preferredTheme());

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(root.classList.contains("dark") ? "light" : "dark");
    });
  });
});

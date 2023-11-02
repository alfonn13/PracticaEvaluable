const menuIcon = document.getElementById("menu-icon");
const menuDropdown = document.getElementById("menu-dropdown");
const logout = document.getElementById("log-out-link");

export function toggleMenu() {
    menuDropdown.classList.toggle("active");
  }
  
export function redirectToIndex() {
    document.location.href = "index.html";
}
  
menuIcon.addEventListener("click", toggleMenu);
logout.addEventListener("click", redirectToIndex);
  
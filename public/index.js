// HAMBURGER MENU
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
hamburger.addEventListener("click", toggleMenu);




// SCROLL
window.addEventListener('scroll', function () {
  const verticalScroll = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (verticalScroll / totalHeight) * 100;
  console.log(`Vertical Scroll Percentage: ${scrollPercentage.toFixed(2)}%`);
});

// Function to generate multiple box shadows
function multipleBoxShadow(n) {
  let value = '';
  for (let i = 0; i < n; i++) {
    value += `${Math.random() * window.innerWidth}px ${Math.random() * document.documentElement.scrollHeight}px #FFF, `;
  }
  return value.slice(0, -2); // Remove the trailing comma and space
}

// Create elements for stars
function createStars(id, size, animationDuration) {
  const stars = document.getElementById(id);
  stars.style.zIndex = -1;
  stars.style.width = `${size}px`;
  stars.style.height = `${size}px`;
  stars.style.background = 'transparent';
  stars.style.boxShadow = multipleBoxShadow(700); // Adjust the number of stars
  stars.style.animation = `animStar ${animationDuration}s linear infinite`;
  stars.style.position = 'absolute';
  const starsAfter = document.createElement('div');
  starsAfter.style.content = ' ';
  

  starsAfter.style.position = 'absolute';
  starsAfter.style.top = document.documentElement.scrollHeight + 'px';
  starsAfter.style.width = `${size}px`;
  starsAfter.style.height = `${size}px`;
  starsAfter.style.background = 'transparent';
  starsAfter.style.boxShadow = multipleBoxShadow(700); // Adjust the number of stars

  stars.appendChild(starsAfter);
}

// Create stars with different sizes and animation durations
createStars('stars', 1, 50);
// createStars('stars2', 2, 100);
// createStars('stars3', 3, 150);


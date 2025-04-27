

console.log("Wedding Invitation Navbar Loaded Successfully!");
// *****************************couple secction**************************
// Countdown Timer Logic
// Set the wedding date
const weddingDate = new Date("2025-05-04T06:45:00").getTime();

// Countdown function
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".countdown").innerHTML = "🎉 Happily Married! 🎉";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(".countdown").innerHTML = `
        <div class="countdown-item"><span>${days}</span>DAYS</div>
        <div class="countdown-item"><span>${hours}</span>HOURS</div>
        <div class="countdown-item"><span>${minutes}</span>MINUTES</div>
        <div class="countdown-item"><span>${seconds}</span>SECONDS</div>
    `;
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial display
updateCountdown();

// ********************************Story**************************************//
document.addEventListener("DOMContentLoaded", function () {
    console.log("Story section loaded successfully!");
});


// **********************************************

document.addEventListener('DOMContentLoaded', function () {
  const heartContainer = document.getElementById('falling-hearts-container');

  // Expanded heart styles
  const heartTypes = ['❤️', '💕', '💝', '💘', '💖',  '💓', '💞', '🩷', '❣️'];

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Pick a random heart type
    heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];

    // Random position, size, and animation speed
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.top = '-20px';
    heart.style.position = 'absolute';

    heartContainer.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Create more hearts more frequently
  setInterval(() => {
    // Drop multiple hearts at once
    for (let i = 0; i < 3; i++) {
      createHeart();
    }
  }, 200);
});


// Welcome screen music + fade
const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-btn");
const music = document.getElementById("bg-music");

enterBtn.addEventListener("click", () => {
  music.play();
  welcomeScreen.classList.add("opacity-0");
  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 1000);
});

// ************************************nav **************************
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

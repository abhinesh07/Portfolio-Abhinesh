document.addEventListener("DOMContentLoaded", function() {
  // Create a single IntersectionObserver for fade effects
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  // Combine all fade-related selectors into one array to reduce repetition
  const fadeClasses = [
    '.fade-in', '.fade-right', '.fade-right1', '.fade-right2', '.fade-right3', '.fade-right4', '.fade-right5',
    '.fade-left', '.fade-left1'
  ];

  fadeClasses.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  });

  // Typing animation setup
  const names = ["Mean Stack Developer", "Angular Developer"];
  let currentIndex = 0;

  function changeName() {
    const currentName = names[currentIndex];
    const displayElement = document.getElementById("changeText");

    if (!displayElement) return; // Prevents error if element doesn't exist

    displayElement.innerHTML = "";

    for (let i = 0; i < currentName.length; i++) {
      setTimeout(() => {
        displayElement.innerHTML += currentName[i];
      }, i * 30);
    }

    currentIndex = (currentIndex + 1) % names.length;
  }

  changeName();
  setInterval(changeName, 3000);

  // "See More" button functionality
  const seeMoreButton = document.getElementById('seeMore');
  if (seeMoreButton) {
    seeMoreButton.addEventListener('click', function() {
      document.querySelectorAll('.hidden').forEach(image => {
        image.classList.remove('hidden');
      });
      seeMoreButton.style.display = 'none';
    });
  }
});

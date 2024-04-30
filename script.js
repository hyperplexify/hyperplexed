// Get the element to apply the gradient to
const element = document.getElementById('bkg');

// Track mouse position
element.addEventListener('mousemove', (e) => {
  // Get x and y coordinates relative to the element
  const x = e.clientX / element.offsetWidth * 100;
  const y = e.clientY / element.offsetHeight * 100;

  // Compute gradient color stops based on x and y
  const topColor = `hsl(${x}, 100%, 50%)`;
  const bottomColor = `hsl(${y}, 100%, 50%)`;

  // Update the background gradient
  element.style.background = `radial-gradient(at ${x}% ${y}%, ${topColor}, ${bottomColor})`;
});

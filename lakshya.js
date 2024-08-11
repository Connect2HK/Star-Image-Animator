document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magic-button');
    const heading = document.getElementById('heading');
    const initialUI = document.getElementById('initial-ui');
    const animationUI = document.getElementById('animation-ui');
    const pencilDrawing = document.getElementById('pencil-drawing');
    const hand = document.getElementById('hand');
    const finalImage = document.getElementById('final-image');
    const congratulationsMessage = document.getElementById('congratulations');
    const starFrames = document.querySelectorAll('.star-frame');
  // animation con
    const startAnimation = () => {
      // Hide the initial UI (button and heading)
      initialUI.classList.add('hidden');
      magicButton.style.display = 'none'; // Add this line to hide the button
      heading.style.display = 'none'; // Add this line to hide the heading
  
      // Show the animation UI
      animationUI.classList.remove('hidden');
  
      // Start the pencil drawing animation
      pencilDrawing.classList.add('reveal');
  
      // Start the hand animation
      hand.style.animation = 'draw-hand 5s linear forwards';
  
      // Hide the hand icon after its animation
      setTimeout(() => {
        hand.style.display = 'none'; // Hide the hand icon
      }, 5000); // Time for the hand animation to complete
  
      // Start the star animation after the drawing completes
      starFrames.forEach((star, index) => {
        setTimeout(() => {
          star.style.opacity = '1';
          star.style.transform = 'scale(1)'; // Animate stars scaling up
        }, 6400 + (index * 200)); // Delay each star
      });
  
      // Reveal the final image after the star animation
      setTimeout(() => {
        finalImage.classList.add('reveal');
      }, 8800); // Timing for the final image reveal
  
      // Show the congratulations message after all animations
      setTimeout(() => {
        congratulationsMessage.style.display = 'block';
      }, 10000); // Timing for showing the congratulations message
    };
  
    magicButton.addEventListener('click', startAnimation);
    heading.addEventListener('click', startAnimation);
  });

// Wrap every letter in a span
/**var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 3000,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  window.addEventListener('scroll', function () {
    // Set the scroll threshold at which the animation starts
    var scrollThreshold = 100; // Adjust this value as needed

    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check if the scroll position is below the threshold
    if (scrollPosition >= scrollThreshold) {
        // Start the fade-out animation
        startFadeOutAnimation();

        // Remove the scroll event listener to prevent multiple triggers
        window.removeEventListener('scroll', arguments.callee);
    }
}); 
**/
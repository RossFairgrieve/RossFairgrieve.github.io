
 /* -------- Start Brain scripting --------- */

  function toggleOpen(e) {

    var clickedBrain = 0;
    if (e.target.classList.contains('brain1')) {
      clickedBrain = 1;
    } else if (e.target.classList.contains('brain2')) {
      clickedBrain = 2;
    } else if (e.target.classList.contains('brain3')) {
      clickedBrain = 3;
    } else if (e.target.classList.contains('brain4')) {
      clickedBrain = 4;
    }
    var clickedBrainClass = 'overlay-' + clickedBrain;

    if (e.target.classList.contains('open')) {
      var openBrains = document.querySelectorAll('.open');
      openBrains.forEach(openBrain => openBrain.classList.remove('open'));
      e.target.classList.toggle(clickedBrainClass);
    } else {
      var openBrains = document.querySelectorAll('.open');
      openBrains.forEach(openBrain => openBrain.classList.remove('open', 'overlay-1', 'overlay-2', 'overlay-3', 'overlay-4'));
      e.target.classList.toggle('open');
      e.target.classList.toggle(clickedBrainClass);
    }
 }

  function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  const brains = document.querySelectorAll('.brain');
  brains.forEach(brain => brain.addEventListener('click', toggleOpen));
  brains.forEach(brain => brain.addEventListener('transitionend', toggleActive));

  /* --------- End Brain scripting--------- */


  /* --------- Start Timeline scripting--------- */

  /* Function to check if the element is within the viewport */
  function isElemInView(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  /* If a 'timeline li' element is in view, add the 'in-view' class to it */
  const items = document.querySelectorAll(".timeline li");

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElemInView(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  /* Check whether the list elements are in view on page load, on scroll, and on resize */
  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  window.addEventListener("resize", callbackFunc);

  /* --------- End Timeline scripting--------- */


  /* --------- Start Ashford scripting--------- */
  var letters = [];

  function addLetters(e) {
    if (e.keyCode == 16) {
      return
    } else if (e.keyCode == 82) {
      letters = [82];
    } else {
    letters.push(e.keyCode);
    }

    if (letters.join() === [82, 79, 83, 83].join()) {
      var audio = document.querySelector(`.ashford${(Math.floor(Math.random() * 8) + 1)}`);
      audio.play();
      letters = [];
      // document.querySelector('.ashford').classList.remove('hidden');
      // document.querySelector('.ashford').classList.add('scale-up');
      // setTimeout(function () {
      //   document.querySelector('.ashford').classList.remove('scale-up');
      // }, 1000);
    }
  }

  window.addEventListener('keydown',addLetters);

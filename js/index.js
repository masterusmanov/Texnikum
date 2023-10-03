function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  

  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  document.getElementById("day").textContent = day +'-';
  document.getElementById("day1").textContent = day +'-';
  document.getElementById("month").textContent = month + '-';
  document.getElementById("month1").textContent = month + '-';
  document.getElementById("year").textContent = year;
  document.getElementById("year1").textContent = year;
  
  let playButton = document.getElementById("playButton");
  let audio = document.getElementById("myAudio");

  // Add a click event listener to the button
  playButton.addEventListener("click", function() {
      if (audio.paused) {
          // If the audio is paused, play it
          audio.play();
          // playButton.innerHTML = "Pause Song";
      } else {
          // If the audio is playing, pause it
          audio.pause();
          // playButton.innerHTML = "Play Song";
      }
  });

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = "KATTAQO'RG'ON ABU ALI IBN SINO NOMIDAGI JAMOAT SALOMATLIK TEXNIKUMI";
}
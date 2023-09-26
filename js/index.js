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
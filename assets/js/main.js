function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = `Buka Undangan`;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `Tutup Undangan`;
    moreText.style.display = "block";
  }
}

let countDownDate = new Date("Jan 14, 2023 00:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let timeDays = 60 * 60 * 1000 * 24;
  let timeHours = 60 * 60 * 1000;

  days = Math.floor((distance / timeDays) * 1);
  years = Math.floor(days / 365);
  if (years > 1) {
    days = days - years * 365;
  }
  hours = Math.floor(((distance % timeDays) / timeHours) * 1);
  minutes = Math.floor(((distance % timeDays) / timeHours) * 1);

  document.getElementById("demo").innerHTML =
    years + " Tahun " + days + " Hari " + hours + " Jam " + minutes + " Menit ";

  // If the count down is over, write some text
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);

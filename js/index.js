// mobile view header

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("bottom-arrow ");
  const toggleDiv = document.getElementById("show-when-click");
  const arrowIcon = document.getElementById("arrowIcon");

  toggleButton.addEventListener("click", () => {
    if (toggleDiv.style.display === "none" || toggleDiv.style.display === "") {
      toggleDiv.style.display = "block";
      arrowIcon.classList.remove("fa-chevron-down");
      arrowIcon.classList.add("fa-chevron-up");
    } else {
      toggleDiv.style.display = "none";
      arrowIcon.classList.remove("fa-chevron-up");
      arrowIcon.classList.add("fa-chevron-down");
    }
  });
});

// reservation js

document.addEventListener("DOMContentLoaded", function () {
  // ////////////////////// For Large Device
  // button variable
  var menubarForReservation = document.querySelector(".Réservation-button");
  var menubarForService = document.querySelector(".service-button");
  var menubarForOption = document.querySelector(".option-button");
  var menubarForConnexion = document.querySelector(".connexion-button");
  // button ranking
  var menubarForReservationRanking = document.querySelector(
    ".Réservation-button-ranking"
  );
  var menubarForServiceRanking = document.querySelector(
    ".service-button-ranking"
  );
  var menubarForOptionRanking = document.querySelector(
    ".option-button-ranking"
  );
  var menubarForConnexionRanking = document.querySelector(
    ".connexion-button-ranking"
  );

  // ////////////////////// For Small Device

  // button variable
  var menubarForReservationSmall = document.querySelector(
    ".Réservation-button-small"
  );
  var menubarForServiceSmall = document.querySelector(".service-button-small");
  var menubarForOptionSmall = document.querySelector(".option-button-small");
  var menubarForConnexionSmall = document.querySelector(
    ".connexion-button-small"
  );
  // button ranking
  var menubarForReservationRankingSmall = document.querySelector(
    ".Réservation-button-small-ranking"
  );
  var menubarForServiceRankingSmall = document.querySelector(
    ".service-button-small-ranking"
  );
  var menubarForOptionRankingSmall = document.querySelector(
    ".option-button-small-ranking"
  );
  var menubarForConnexionRankingSmall = document.querySelector(
    ".connexion-button-small-ranking"
  );

  // section variable
  var reservation = document.querySelector(".reservation-section");
  var service = document.querySelector(".service-section");
  var option = document.querySelector(".option-section");
  var connexion = document.querySelector(".connexion-section");

  // right side variable
  var rightside1 = document.querySelector(".reservation-right-side");
  var rightside2 = document.querySelector(".service-right-side");
  var rightside3 = document.querySelector(".option-right-side");
  var rightside4 = document.querySelector(".connexion-right-side");

  // bottom suivant button click to next page
  var ReservationSuivant = document.getElementById("reservation-suivant");
  var ServiceSuivant = document.getElementById("service-suivant");
  var OptionSuivant = document.getElementById("option-suivant");

  // For Large Device Change

  function handleReservationClick() {
    // for reservation-----------
    reservation.classList.add("display-block");
    reservation.classList.remove("display-none");
    service.classList.add("display-none");
    option.classList.add("display-none");
    connexion.classList.add("display-none");
    // right side
    rightside1.classList.add("display-block");
    rightside1.classList.remove("display-none");
    rightside2.classList.add("display-none");
    rightside3.classList.add("display-none");
    rightside4.classList.add("display-none");
    // button active
    menubarForReservation.classList.add("active-btn");
    menubarForService.classList.remove("active-btn");
    menubarForOption.classList.remove("active-btn");
    menubarForConnexion.classList.remove("active-btn");
    // button active Ranking
    menubarForReservationRanking.classList.add("active-ranking");
    menubarForServiceRanking.classList.remove("active-ranking");
    menubarForOptionRanking.classList.remove("active-ranking");
    menubarForConnexionRanking.classList.remove("active-ranking");
  }
  function handleServiceClick() {
    // for reservation-----------
    reservation.classList.add("display-none");
    service.classList.add("display-block");
    service.classList.remove("display-none");
    option.classList.add("display-none");
    connexion.classList.add("display-none");
    // right side
    rightside1.classList.add("display-none");
    rightside2.classList.add("display-block");
    rightside2.classList.remove("display-none");
    rightside3.classList.add("display-none");
    rightside4.classList.add("display-none");
    // button active
    menubarForReservation.classList.remove("active-btn");
    menubarForService.classList.add("active-btn");
    menubarForOption.classList.remove("active-btn");
    menubarForConnexion.classList.remove("active-btn");
    // button active Ranking
    menubarForReservationRanking.classList.remove("active-ranking");
    menubarForServiceRanking.classList.add("active-ranking");
    menubarForOptionRanking.classList.remove("active-ranking");
    menubarForConnexionRanking.classList.remove("active-ranking");
  }
  function handleOptionClick() {
    // for reservation-----------
    reservation.classList.add("display-none");
    service.classList.add("display-none");
    option.classList.add("display-block");
    option.classList.remove("display-none");
    connexion.classList.add("display-none");
    // right side
    rightside1.classList.add("display-none");
    rightside2.classList.add("display-none");
    rightside3.classList.add("display-block");
    rightside3.classList.remove("display-none");
    rightside4.classList.add("display-none");
    // button active
    menubarForReservation.classList.remove("active-btn");
    menubarForService.classList.remove("active-btn");
    menubarForOption.classList.add("active-btn");
    menubarForConnexion.classList.remove("active-btn");
    // button active Ranking
    menubarForReservationRanking.classList.remove("active-ranking");
    menubarForServiceRanking.classList.remove("active-ranking");
    menubarForOptionRanking.classList.add("active-ranking");
    menubarForConnexionRanking.classList.remove("active-ranking");
  }
  function handleConnexionClick() {
    // for reservation-----------
    reservation.classList.add("display-none");
    service.classList.add("display-none");
    option.classList.add("display-none");
    connexion.classList.add("display-block");
    connexion.classList.remove("display-none");
    // right side
    rightside1.classList.add("display-none");
    rightside2.classList.add("display-none");
    rightside3.classList.add("display-none");
    rightside4.classList.add("display-block");
    rightside4.classList.remove("display-none");
    // button active
    menubarForReservation.classList.remove("active-btn");
    menubarForService.classList.remove("active-btn");
    menubarForOption.classList.remove("active-btn");
    menubarForConnexion.classList.add("active-btn");
    // button active Ranking
    menubarForReservationRanking.classList.remove("active-ranking");
    menubarForServiceRanking.classList.remove("active-ranking");
    menubarForOptionRanking.classList.remove("active-ranking");
    menubarForConnexionRanking.classList.add("active-ranking");
  }

  menubarForReservation.addEventListener("click", handleReservationClick);
  ReservationSuivant.addEventListener("click", handleServiceClick);
  // for service---------------
  menubarForService.addEventListener("click", handleServiceClick);
  ServiceSuivant.addEventListener("click", handleOptionClick);
  // for option----------------
  menubarForOption.addEventListener("click", handleOptionClick);
  OptionSuivant.addEventListener("click", handleConnexionClick);
  // for connexion--------------
  menubarForConnexion.addEventListener("click", handleConnexionClick);

  // For Small Device Change

  function handleReservationSmallClick() {
    // for reservation-----------
    reservation.classList.add("display-block");
    reservation.classList.remove("display-none");
    service.classList.add("display-none");
    option.classList.add("display-none");
    connexion.classList.add("display-none");
    // right side
    rightside1.classList.add("display-block");
    rightside1.classList.remove("display-none");
    rightside2.classList.add("display-none");
    rightside3.classList.add("display-none");
    rightside4.classList.add("display-none");
    // button active
    menubarForReservationSmall.classList.add("active-btn");
    menubarForServiceSmall.classList.remove("active-btn");
    menubarForOptionSmall.classList.remove("active-btn");
    menubarForConnexionSmall.classList.remove("active-btn");
    // button active Ranking
    menubarForReservationRankingSmall.classList.add("active-ranking");
    menubarForServiceRankingSmall.classList.remove("active-ranking");
    menubarForOptionRankingSmall.classList.remove("active-ranking");
    menubarForConnexionRankingSmall.classList.remove("active-ranking");
  }
  function handleServiceSmallClick() {
    reservation.classList.add("display-none");
    service.classList.add("display-block");
    service.classList.remove("display-none");
    option.classList.add("display-none");
    connexion.classList.add("display-none");
    // right side
    rightside1.classList.add("display-none");
    rightside2.classList.add("display-block");
    rightside2.classList.remove("display-none");
    rightside3.classList.add("display-none");
    rightside4.classList.add("display-none");
    // button active
    menubarForReservationSmall.classList.remove("active-btn");
    menubarForServiceSmall.classList.add("active-btn");
    menubarForOptionSmall.classList.remove("active-btn");
    menubarForConnexionSmall.classList.remove("active-btn");
    // button active Ranking
    menubarForReservationRankingSmall.classList.remove("active-ranking");
    menubarForServiceRankingSmall.classList.add("active-ranking");
    menubarForOptionRankingSmall.classList.remove("active-ranking");
    menubarForConnexionRankingSmall.classList.remove("active-ranking");
  }
  function handleOptionSmallClick() {
    reservation.classList.add("display-none");
    service.classList.add("display-none");
    option.classList.add("display-block");
    option.classList.remove("display-none");
    connexion.classList.add("display-none");
    // right side
    rightside1.classList.add("display-none");
    rightside2.classList.add("display-none");
    rightside3.classList.add("display-block");
    rightside3.classList.remove("display-none");
    rightside4.classList.add("display-none");
    // button active
    menubarForReservationSmall.classList.remove("active-btn");
    menubarForServiceSmall.classList.remove("active-btn");
    menubarForOptionSmall.classList.add("active-btn");
    menubarForConnexionSmall.classList.remove("active-btn");
    // button active Ranking
    menubarForReservationRankingSmall.classList.remove("active-ranking");
    menubarForServiceRankingSmall.classList.remove("active-ranking");
    menubarForOptionRankingSmall.classList.add("active-ranking");
    menubarForConnexionRankingSmall.classList.remove("active-ranking");
  }
  function handleConnexionSmallClick() {
    reservation.classList.add("display-none");
    service.classList.add("display-none");
    option.classList.add("display-none");
    connexion.classList.add("display-block");
    connexion.classList.remove("display-none");
    // right side
    rightside1.classList.add("display-none");
    rightside2.classList.add("display-none");
    rightside3.classList.add("display-none");
    rightside4.classList.add("display-block");
    rightside4.classList.remove("display-none");
    // button active
    menubarForReservationSmall.classList.remove("active-btn");
    menubarForServiceSmall.classList.remove("active-btn");
    menubarForOptionSmall.classList.remove("active-btn");
    menubarForConnexionSmall.classList.add("active-btn");
    // button active Ranking
    menubarForReservationRankingSmall.classList.remove("active-ranking");
    menubarForServiceRankingSmall.classList.remove("active-ranking");
    menubarForOptionRankingSmall.classList.remove("active-ranking");
    menubarForConnexionRankingSmall.classList.add("active-ranking");
  }

  menubarForReservationSmall.addEventListener(
    "click",
    handleReservationSmallClick
  );
  ReservationSuivant.addEventListener("click", handleServiceSmallClick);
  // for service---------------
  menubarForServiceSmall.addEventListener("click", handleServiceSmallClick);
  ServiceSuivant.addEventListener("click", handleOptionSmallClick);
  // for option----------------
  menubarForOptionSmall.addEventListener("click", handleOptionSmallClick);
  OptionSuivant.addEventListener("click", handleConnexionSmallClick);
  // for connexion--------------
  menubarForConnexionSmall.addEventListener("click", handleConnexionSmallClick);
});



// time picker
document.addEventListener("DOMContentLoaded", function () {
  const timePickerInput1 = document.getElementById("timePickerInput1");
  const timePickerInput2 = document.getElementById("timePickerInput2");
  const timeDropdown1 = document.getElementById("timeDropdown1");
  const timeDropdown2 = document.getElementById("timeDropdown2");
  const dropdownIcon1 = document.querySelector(".dropdown-icon1");
  const dropdownIcon2 = document.querySelector(".dropdown-icon2");

  function toggleDropdown1() {
    timeDropdown1.classList.toggle("show");
  }
  function toggleDropdown2() {
    timeDropdown2.classList.toggle("show");
  }

  function hideDropdown(event) {
    if (!timePickerInput1.contains(event.target) && !timeDropdown1.contains(event.target) && !dropdownIcon1.contains(event.target)) {
      timeDropdown1.classList.remove("show");
    }
    if (!timePickerInput2.contains(event.target) && !timeDropdown2.contains(event.target) && !dropdownIcon2.contains(event.target)) {
      timeDropdown2.classList.remove("show");
    }
  }

  document.querySelectorAll("#timeDropdown1 .dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      timePickerInput1.value = this.textContent;
      timeDropdown1.classList.remove("show");
    });
  });
  document.querySelectorAll("#timeDropdown2 .dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      timePickerInput2.value = this.textContent;
      timeDropdown2.classList.remove("show");
    });
  });

  timePickerInput1.addEventListener("focus", toggleDropdown1);
  timePickerInput2.addEventListener("focus", toggleDropdown2);

  dropdownIcon1.addEventListener("click", toggleDropdown1);
  dropdownIcon2.addEventListener("click", toggleDropdown2);

  document.addEventListener("click", hideDropdown);
});
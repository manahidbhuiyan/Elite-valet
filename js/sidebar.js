      // sidebar js
      document.addEventListener("DOMContentLoaded", function () {
        var humberger = document.querySelector('.navbar-toggler')
        var sidebar = document.querySelector('.mobile-sidebar')
        var overLay = document.querySelector('.nav-overlay')
        var crossButton = document.querySelector('.cross')

        humberger.addEventListener("click", function () {
          sidebar.style.width = "90%";
          // sidebar.style.padding = "30px";
          overLay.style.width = "100%";
          // sidebar.classList.toggle("mobile-active");
          sidebar.classList.add("sidebar-padding");
        });

        crossButton.addEventListener("click", function () {
          sidebar.style.width = "0"
          // sidebar.style.padding = "0"
          overLay.style.width = "0"
          sidebar.classList.remove("sidebar-padding");

        });

      })
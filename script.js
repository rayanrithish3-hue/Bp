/* =======================================
   PROJECT BP OS
   SCRIPT.JS
======================================= */

document.addEventListener("DOMContentLoaded", () => {

    const bootScreen = document.getElementById("bootScreen");
    const osContainer = document.getElementById("osContainer");
    const clock = document.getElementById("clock");

    /* ----------------------------
       LIVE CLOCK
    ---------------------------- */

    function updateClock() {

        const now = new Date();

        let hour = now.getHours();
        let minute = now.getMinutes();

        if (minute < 10) {
            minute = "0" + minute;
        }

        clock.innerHTML = hour + ":" + minute;
    }

    updateClock();

    setInterval(updateClock, 1000);

    /* ----------------------------
       BOOT SCREEN
    ---------------------------- */

    setTimeout(() => {

        bootScreen.style.opacity = "0";

        setTimeout(() => {

            bootScreen.style.display = "none";

            osContainer.style.display = "block";

            osContainer.style.animation = "fadeIn 0.8s ease";

        }, 800);

    }, 4000);


    /* ----------------------------
       ICON CLICK
    ---------------------------- */

    const apps = document.querySelectorAll(".appIcon");

    apps.forEach(app => {

        app.addEventListener("click", () => {

            const appName = app.getAttribute("data-app");

            alert(appName.toUpperCase() + " App Coming Soon");

        });

    });

});
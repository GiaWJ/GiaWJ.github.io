document.addEventListener("DOMContentLoaded", function () {
    // Show age-based driving message
    window.showMessage = function () {
        let age = 15;
        let Name = "James";

        if (age >= 18) {
            alert("Hello, " + Name + ". You can now drive :)");
        } else {
            let years = 18 - age;
            alert("Hello kid. You are too young to drive :(");
            alert("Please come back after " + years + " years.");
        }

        let sum = 0;
        for (let i = 0; i <= 100; i++) {
            sum += i;
        }
        alert("1 + 2 + ... + 100 = " + sum);
    };

    // Change background colors of sections
    window.changeColor = function () {
        document.getElementById("main").style.backgroundColor = "pink";
        document.getElementById("justDiv").style.backgroundColor = "pink";
    };

    // Reset background color
    window.resetColor = function () {
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("justDiv").style.backgroundColor = "white";
    };

    // Change image to Old Town
    window.changeToTown = function () {
        const img = document.getElementById("drawing");
        if (img) img.src = "IMG/OldTown.jpg";
    };

    // Change image to Heritage Hall
    window.changeToHall = function () {
        const img = document.getElementById("drawing");
        if (img) img.src = "IMG/HertitageHall.JPG";
    };

    // Toggle theme by changing CSS file
    window.changeTheme = function () {
        const cssLink = document.getElementById("css");
        if (cssLink.getAttribute("href") === "./styles/styles.css") {
            cssLink.href = "./styles/dark-theme.css"; 
        } else {
            cssLink.href = "./styles/styles.css";
        }
    };

    // Highlight table row on click
    const rows = document.querySelectorAll("table tr");
    rows.forEach((row, index) => {
        if (index === 0) return; // Skip header
        row.addEventListener("click", function () {
            row.classList.toggle("highlight-row");
        });
    });

    // Log nav menu clicks
    const menuItems = document.querySelectorAll(".mainMenu");
    menuItems.forEach(link => {
        link.addEventListener("click", function () {
            console.log('Click the link：${link.textContent}');
        });
    });
});
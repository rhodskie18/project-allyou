document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close");
    const modals = document.querySelectorAll(".modal");

    // Open modal when clicking a button
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    // Close modal when clicking the close button
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").style.display = "none";
        });
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

document.getElementById("homeButton").addEventListener("click", () => {
    window.location.href = "index.html"; // Redirects to the main page
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");

    images.forEach(img => {
        img.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent immediate redirection
            
            let container = img.closest(".image-container");
            let hoverText = container.querySelector(".hover-text");

            // If text is already visible, proceed to the link
            if (hoverText.style.opacity == "1") {
                window.location.href = container.querySelector("a").href;
            } else {
                // Show the text first
                hoverText.style.opacity = "1";

                // Hide the text after 2 seconds
                setTimeout(() => {
                    hoverText.style.opacity = "0";
                }, 2000);
            }
        });
    });
});

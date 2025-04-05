document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const dashboard = document.getElementById("dashboard");
    const loginContainer = document.getElementById("login-container");
    const errorMessage = document.getElementById("login-error");
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.getElementById("password-toggle");

    // Fake login logic
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (email === "praya@testmail.com" && password === "11111") {
            loginContainer.style.display = "none";
            dashboard.style.display = "block";
        } else {
            errorMessage.style.display = "block";
        }
    });

    // Toggle password visibility
    passwordToggle.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        passwordToggle.classList.toggle("fa-eye-slash");
    });

    // Logout
    window.logout = function() {
        dashboard.style.display = "none";
        loginContainer.style.display = "block";
    };

    // Nav section switching
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".content");

    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            navButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const sectionToShow = btn.getAttribute("data-section");
            sections.forEach(sec => {
                sec.style.display = sec.id === sectionToShow ? "block" : "none";
            });
        });
    });

    // Default to showing "courses" section
    document.querySelector('[data-section="courses"]').click();
});

const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const getStartedBtn = document.querySelector(".btn1");
const contactLink = document.querySelector("#contactLink");


getStartedBtn.addEventListener('click', async () => {
    try {
        // Fetch login page content from a server-side endpoint
        const response = await fetch('login.html'); // Change this to your server-side endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch login page');
        }
        const loginPageContent = await response.text();

        // Inject login page content into the main HTML without removing sidebar and upper nav bar
        const contentElement = document.querySelector('.home');
        contentElement.innerHTML = loginPageContent;
    } catch (error) {
        console.error(error);
    }
});

toggle.addEventListener('click', () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});

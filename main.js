
const theme = document.querySelector("#theme");

if (localStorage.getItem("key-theme") === "light") {
    document.body.classList.add("light");
}

function updateTheme() {
    const light = document.body.classList.contains("light");

    theme.innerHTML = light
        ? '<i class="fa-regular fa-moon"></i>'
        : '<i class="fa-regular fa-sun"></i>';

    theme.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to white mode");
}

updateTheme();

theme.addEventListener("click", () => {
    document.body.classList.toggle("light");

    localStorage.setItem(
        "key-theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );

    updateTheme();
});

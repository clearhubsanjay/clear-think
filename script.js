document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});

document.getElementById("lang-btn").addEventListener("click", function() {
    let lang = this.textContent;
    this.textContent = lang === "English" ? "हिन्दी" : "English";
});
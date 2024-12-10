let icon = document.querySelector(".mobile-icon");
let links = document.querySelector(".mobile-links");

icon.addEventListener('click',() => {
    links.classList.toggle("hiden");
});


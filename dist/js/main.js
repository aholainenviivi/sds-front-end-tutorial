let showMenu = false;

const elements = getDOMElements();
elements.menuBtn.addEventListener("click", toggleMenu);

function getDOMElements() {
    const elements = {
        menuBtn: document.querySelector(".menu-btn"),
        menu: document.querySelector(".menu"),
        menuBranding: document.querySelector(".menu-branding"),
        menuNav: document.querySelector(".menu-nav"),
        navItems: document.querySelectorAll(".nav-item"),
    }
    return elements;
}

function toggleMenu() {
    if (!showMenu) {
        elements.menuBtn.classList.add("close");
        elements.menu.classList.add("show");
        elements.menuBranding.classList.add("show");
        elements.menuNav.classList.add("show");
        elements.navItems.forEach(item => item.classList.add("show"));
        showMenu = true;
    } else {
        elements.menuBtn.classList.remove("close");
        elements.menu.classList.remove("show");
        elements.menuBranding.classList.remove("show");
        elements.menuNav.classList.remove("show");
        elements.navItems.forEach(item => item.classList.remove("show"))
        showMenu = false;
    }
}
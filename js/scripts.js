window.onload = () => {
    const menuIcon = document.getElementById("icon-hamburger");
    const menuNav = document.querySelector(".menu__nav");
    const main = document.querySelector("main");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("close");
        menuNav.classList.toggle("show");
        document.querySelector(".modal.show")
            ? ""
            : main.classList.toggle("bg");
    });

    //MENU STICKY
    const menu = document.querySelector("header.menu");
    window.scrollY > 0
        ? menu.classList.add("sticky")
        : menu.classList.remove("sticky");

    window.addEventListener("scroll", () => {
        window.scrollY > 0
            ? menu.classList.add("sticky")
            : menu.classList.remove("sticky");
    });

    //SELECT PRICE
    const cardItems = document.querySelectorAll(".modal .prices__item");

    cardItems.forEach((cardItem) => {
        cardItem.addEventListener("click", () => {
            cardSelected(cardItem);
        });
    });
    function cardSelected(cardItem) {
        const cardId = document.querySelector(`#${cardItem.id}`)
        const input = document.querySelector(`#${cardItem.id} input`)
        const divConfirm = document.querySelector(`#${cardItem.id} .prices__item__confirm`)

        input.checked = true;

        document.querySelector(".modal .selected") ? document.querySelector(".modal .selected").classList.remove("selected") : "";
        document.querySelector(".modal .show") ? document.querySelector(".modal .show").classList.remove("show") : "";

        cardId.classList.add("selected");

        divConfirm.classList.add("show") 
    }
};

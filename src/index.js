import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

let displayController = (function () {
    let content = document.querySelector("#content");
    let homeButton = document.querySelector("#home");
    let menuButton = document.querySelector("#menu");
    let contactButton = document.querySelector("#contact");

    homeButton.addEventListener("click", () => {
        resetButtonBorders();
        homeButton.style.borderBottom = "2px outset black";
        clearContent();
        home.displayHome();
    });

    menuButton.addEventListener("click", () => {
        resetButtonBorders();
        menuButton.style.borderBottom = "2px outset black";
        clearContent();
        menu.displayMenu();
    });

    contactButton.addEventListener("click", () => {
        resetButtonBorders();
        contactButton.style.borderBottom = "2px outset black";
        clearContent();
        contact.displayContact();
    });

    let clearContent = () => {
        content.innerHTML = "";
    }

    let resetButtonBorders = () => {
        homeButton.style.borderBottom = "2px outset #E7D283";
        menuButton.style.borderBottom = "2px outset #E7D283";
        contactButton.style.borderBottom = "2px outset #E7D283";
    }

    return { }
})();

home.displayHome();
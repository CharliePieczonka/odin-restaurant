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
        clearContent();
        home.displayHome();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        menu.displayMenu();
    });

    contactButton.addEventListener("click", () => {
        clearContent();
        contact.displayContact();
    });

    let clearContent = () => {
        content.innerHTML = "";
    }


    return { }
})();

home.displayHome();
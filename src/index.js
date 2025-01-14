import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

let clearContent = () => {
    let content = document.querySelector("#content");
    content.innerHTML = "";
}

home.displayHome();

console.log("Testing index.js!");
const menu = (function () {
    let content = document.querySelector("#content");
    let contentInner = document.createElement("div");
    let contentHeader = document.createElement("p");
    let aboutUs = document.createElement("div");
    let aboutUsTitle = document.createElement("p");
    let aboutUsBody = document.createElement("p");
    let foodInfo = document.createElement("div");
    let foodInfoTitle = document.createElement("p");
    let foodInfoBody = document.createElement("p");

    let displayMenu = () => {
        contentInner.setAttribute("id", "content-inner");
    
        contentHeader.setAttribute("class", "content-header");
        contentHeader.textContent = "Testing Menu~~~!";

        contentInner.appendChild(contentHeader);
        content.appendChild(contentInner);
    }

    return { displayMenu };
})();

export { menu };
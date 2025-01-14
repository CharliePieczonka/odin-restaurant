const menu = (function () {

    
    let displayMenu = () => {
        let burgers = ["Plain Jane", "Bacon Cheeseburger", "Mushroom Melt Burger", "Veggie Burger"];
        let prices = ["$16", "$18", "$19", "$15"];
        let lorems = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae autem, suscipit hic pariatur corporis, amet maiores esse ipsam delectus nobis enim illo. Atque exercitationem veniam est alias accusantium. Magnam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia ut laudantium aut molestiae autem eum et culpa mollitia provident atque perspiciatis ea ipsum voluptatum magni exercitationem natus? Nihil, aliquid?",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eum iste ullam et nihil. Harum, ipsam pariatur vel rerum facilis nemo magni dignissimos ea magnam mollitia iusto dolor, quam recusandae?",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus minus rerum, ipsum, suscipit minima ab asperiores molestias quae quibusdam impedit voluptatibus mollitia nostrum a inventore neque possimus alias accusamus necessitatibus."];

        let content = document.querySelector("#content");
        let contentInner = document.createElement("div");
        let contentHeader = document.createElement("p");

        contentInner.setAttribute("id", "content-inner");
        contentHeader.setAttribute("class", "content-header");
        contentHeader.textContent = "Menu";

        contentInner.appendChild(contentHeader);
        
        for(let i = 0; i < burgers.length; i++) {
            let burgerDiv = document.createElement("div");
            let burgerInfoDiv = document.createElement("div");
            let burgerTitle = document.createElement("p");
            let burgerPrice = document.createElement("p");
            let burgerBody = document.createElement("p");
            
            burgerDiv.setAttribute("class", "menu-div");
            burgerInfoDiv.setAttribute("class", "itemInfo");
            burgerTitle.setAttribute("class", "content-title");
            burgerPrice.setAttribute("class", "price");
            burgerBody.setAttribute("class", "content-body");

            burgerTitle.textContent = burgers[i];
            burgerPrice.textContent = prices[i];
            burgerInfoDiv.appendChild(burgerTitle);
            burgerInfoDiv.appendChild(burgerPrice);

            burgerBody.textContent = lorems[i];

            burgerDiv.appendChild(burgerInfoDiv);
            burgerDiv.appendChild(burgerBody);

            contentInner.append(burgerDiv);

        }
        
        content.appendChild(contentInner);
    }

    return { displayMenu };
})();

export { menu };
const contact = (function () {

    let displayContact = () => {
        let titles = ["Phone & Email", "Store Hours", "Address"];
        let lorems = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae autem, suscipit hic pariatur corporis, amet maiores esse ipsam delectus nobis enim illo. Atque exercitationem veniam est alias accusantium. Magnam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia ut laudantium aut molestiae autem eum et culpa mollitia provident atque perspiciatis ea ipsum voluptatum magni exercitationem natus? Nihil, aliquid?",
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur numquam dolorem quidem eum odit, at rerum repudiandae id facere ullam fuga reiciendis unde voluptates repellendus? Dicta corporis voluptates aut."];

        let content = document.querySelector("#content");
        let contentInner = document.createElement("div");
        let contentHeader = document.createElement("p");
        
        contentInner.setAttribute("id", "content-inner");
        contentHeader.setAttribute("class", "content-header");
        contentHeader.textContent = "Contact Us";

        contentInner.append(contentHeader);
        
        for(let i = 0; i < titles.length; i++) {
            let contentDiv = document.createElement("div");
            let contentTitle = document.createElement("p");
            let contentBody = document.createElement("p");

            contentDiv.setAttribute("class", "content-div");
            contentTitle.setAttribute("class", "content-title");
            contentTitle.textContent = titles[i];
            contentBody.setAttribute("class", "content-body");
            contentBody.textContent = lorems[i];

            contentDiv.appendChild(contentTitle);
            contentDiv.appendChild(contentBody);
            contentInner.append(contentDiv);
        } 

        content.append(contentInner);
    }

    return { displayContact }
})();

export { contact };
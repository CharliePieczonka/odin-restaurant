const home = (function () {


    let displayHome = () => {

        let content = document.querySelector("#content");
        let contentInner = document.createElement("div");
        let contentHeader = document.createElement("p");
        let aboutUs = document.createElement("div");
        let aboutUsTitle = document.createElement("p");
        let aboutUsBody = document.createElement("p");
        let foodInfo = document.createElement("div");
        let foodInfoTitle = document.createElement("p");
        let foodInfoBody = document.createElement("p");
        
        contentInner.setAttribute("id", "content-inner");
    
        contentHeader.setAttribute("class", "content-header");
        contentHeader.textContent = "Thank you for checking out The Odin Restaurant!";
    
        aboutUs.setAttribute("class", "content-div");
    
        aboutUsTitle.setAttribute("class", "content-title");
        aboutUsTitle.textContent = "About Us";
    
        aboutUsBody.setAttribute("class", "content-body");
        aboutUsBody.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae autem, suscipit hic pariatur corporis, amet maiores esse ipsam delectus nobis enim illo. Atque exercitationem veniam est alias accusantium. Magnam!";
    
        foodInfo.setAttribute("class", "content-div");
    
        foodInfoTitle.setAttribute("class", "content-title");
        foodInfoTitle.textContent = "Our Food";
        
        foodInfoBody.setAttribute("class", "content-body");
        foodInfoBody.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quia ut laudantium aut molestiae autem eum et culpa mollitia provident atque perspiciatis ea ipsum voluptatum magni exercitationem natus? Nihil, aliquid?";
    
        aboutUs.appendChild(aboutUsTitle);
        aboutUs.appendChild(aboutUsBody);
        foodInfo.appendChild(foodInfoTitle);
        foodInfo.appendChild(foodInfoBody);
    
        contentInner.appendChild(contentHeader);
        contentInner.appendChild(aboutUs);
        contentInner.appendChild(foodInfo);
    
        content.appendChild(contentInner);
    }
 
    return { displayHome }
})();

export { home };
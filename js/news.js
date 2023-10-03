function createElement(...teglar){
    let store = [];
    for(let teg of teglar){
       let createdTeg = document.createElement(teg);
       store.push(createdTeg);
    }
    return store;
}


async function fetchProductsJSON() {
    const response = await fetch('http://localhost:3000/api/posts');
    const products = await response.json();
    return products;
  }
  
  fetchProductsJSON().then(products => {
    let cards = document.querySelector(".cards");
    console.log(products);
    
    for(let product of products){
        
        let [ div, img, div1, h2, p1, div2, btn, p2] = createElement('div', 'img', 'div', 'h2', 'p', 'div', 'button', 'p');
        div.style.width = "300px";
        div.style.display = "grid";
        div.style.justifyContent = "center";
        // div.style.border = "2px solid gray";    
        // div.style.boxShadow = "5px 5px 9px blue";    

        img.className = "img";
        img.src = `http://localhost:3000/${product.image}`;
        img.style.width = "300px";
        img.style.height = "300px";
        img.style.objectFit = "cover";

        h2.innerHTML = product.title;
        h2.style.fontSize = "20px";
        h2.style.fontWeight = "bold";
        h2.style.textAlign = "center";

        let text = '';
  
        for (let i = 0; i < product.content.length; i++) {
            if(i < 80){
                text += product.content[i];
            }
        }

        p1.innerHTML = text + '...';
        p1.style.textAlign = "justify";
        p1.style.marginRight = "15px";
        p1.style.fontWeight = "bold";
        p1.style.padding = "10px";
        p1.style.fontSize = "14px";

    
        div1.style.display = 'grid';
        div1.style.marginTop = '20px';
        div1.style.justifyContent = "center";
        div1.style.alignItems = "center";
        
        div2.style.display = 'flex';
        div2.style.justifyContent = "center";
        div2.style.alignItems = "center";
        div2.style.gap = "50px";
        div2.style.margin = "10px";

        btn.innerHTML = 'batafsil';
        btn.style.color = 'blue'
        btn.addEventListener("click", ()=>{
            localStorage.setItem('news_id', product.id);
            location.href = '../html/detail.html'
        })
        
        
        let randomWord = '';
  
        for (let i = 0; i < product.createdAt.length; i++) {
            if(i < 10){
                randomWord += product.createdAt[i];
            }
        }

        p2.innerHTML = randomWord;
        p2.style.color = "red";
        p2.style.marginRight = "15px";
        p2.style.fontWeight = "bold";
        p2.style.textAlign = "right";
        
        div2.append(btn, p2)
        div1.append(h2, p1, div2)
        div.append(img, div1);
        cards.append(div);
    }
})

let playButton = document.getElementById("playButton");
let audio = document.getElementById("myAudio");

playButton.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
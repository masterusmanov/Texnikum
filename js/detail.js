let natija = localStorage.getItem('news_id')

async function fetchProductsJSON() {
    const response = await fetch('http://localhost:3000/api/posts');
    const products = await response.json();
    return products;
  }
  
  fetchProductsJSON().then(products => {
    let title = document.querySelector(".title");
    let image = document.querySelector(".image");
    let content = document.querySelector(".content");
    let clock = document.querySelector(".clock");
    console.log(products);
    
    for(let product of products){
        if(product.id == natija){
            title.innerHTML = product.title;
            image.src = `http://localhost:3000/${product.image}`;
            content.innerHTML = product.content;
            let randomWord = '';
  
            for (let i = 0; i < product.createdAt.length; i++) {
                if(i < 10){
                    randomWord += product.createdAt[i];
                }
            };
            clock.innerHTML = randomWord;
        }
    }      
       
});
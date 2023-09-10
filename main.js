//este metodo sirve para cargar informacion de la API

async function getData(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log(data)
        data.results.forEach(element => {
            const article = document.createRange().createContextualFragment(`
            <article>
                <div class="image-container">
                    <img src="${element.image}" alt="">
                </div>
                <h2>${element.name}</h2>
                <span>${element.status}</span>
            </article>
            `)
            const main = document.querySelector("main")
            main.append(article)
        });
    } catch (error) {
        console.log(`Ha ocurrido un error en la peticion ${error}`)
    }
}

getData()
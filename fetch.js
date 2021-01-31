const form = document.querySelector('#gif-form');
const input = document.querySelector('#gif-text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    initFetch();
})

function initFetch() {
    const api = '0wtnmFLgfcLPSmwnUYWUo8uA1wNdz3sn';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${input.value}-keanu`;
    let out = document.querySelector('#output');

    fetch(url)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!');
        }
    })
    .then((content) =>{
        // let results = content.data;
        // results.forEach((result) => {
        //     console.log(result);
        //     let resImg = result.images.downsized.url;
        //     let element = `<div class="element"><img src="${resImg}" />`;

        //     out.innerHTML += element;
        // })
        let results = content.data.length;
        console.log(results);
        let img = content.data[0].images.downsized.url;
        out.style.backgroundImage = `url("${img}")`;
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
}
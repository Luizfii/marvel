import md5 from 'md5';

const publicKey = 'ba58962a1d55d424dfe16e87d471f646';
const privateKey= '2f60e890ea945000031dfc9cf4c75644ab4e7418';

const time = Date.now();

const hash = md5(time + privateKey + publicKey);



function Api () {

  fetch(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then((response) => {
    return response.json();
  })
  .catch(err=> console.log(err))
.then((jsonParsed) =>{
      const divHero = document.querySelector('#hero');
      jsonParsed.data.results.forEach(element => {
        const srcImg = element.thumbnail.path + "." + element.thumbnail.extension
        const nameHero = element.name
        const detalhes = element.description

        createDivHero(srcImg, nameHero, detalhes, divHero);
      });

    })


    function createDivHero(srcImg, nameHero, detalhes, divToAppend) {
      
      const divPai = document.createElement('div')
      const divFilho = document.createElement('div')
      const textName = document.createElement('text')
      const img = document.createElement('img')
      const textDescription = document.createElement('p')
      
      textName.textContent = nameHero
      img.src = srcImg
      textDescription.textContent = detalhes

      divFilho.appendChild(img)
      divFilho.appendChild(textName)
      divPai.appendChild(divFilho)
      divFilho.appendChild(textDescription)
      divToAppend.appendChild(divPai)
      
      

      divPai.classList.add("personagem");
    }

};

export default Api;
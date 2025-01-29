
//Exercicio eventos XMLHTTP request

 /* function promise(){
    return new Promise((success,fail) => {
        const request = new XMLHttpRequest();
        request.open('GET','https://api.jikan.moe/v4/top/anime');

        request.onload = () => success(request.response);
        request.responseType = 'json';
        request.onerror = () => fail('Error');

        request.send();

    });
}

async function findAnimes (year) {

        const promiseResult = await promise();
        const animes = promiseResult.data;

        const animesPerYear = animes.filter((anime) => anime.year === year);

        animesPerYear.length === 0 ? console.log(`O ano ${year} não tem conteúdos`): console.log(animesPerYear);
}; */


//Exercicio fetch + promise

async function findAnimes(year) {
  const promiseResult = await fetch('https://api.jikan.moe/v4/top/anime');
  const formatedResults = await promiseResult.json();

  const animesPerYear = formatedResults.data.filter((anime) => anime.year === year);

  animesPerYear.length === 0 ? console.log(`O ano ${year} não tem conteúdos`): console.log(animesPerYear);

}
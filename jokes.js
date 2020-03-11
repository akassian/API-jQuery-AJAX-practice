console.log("Let's get this party started!");

class Joke {
  constructor(joke){
    this.joke = joke;
    // this.score = 0;
  }
}

let jokeList = [];

async function getJokes(){
  const url = 'https://icanhazdadjoke.com/';
  let response;
  for(let i = 0; i < 10; i++){
    response = await axios.get(url, { headers: { "Accept": "application/json" } });
    // console.log(response);
    let joke = new Joke(response.data.joke);
    jokeList.push(joke);
  }

  for(let i = 0; i < jokeList.length; i++){
    let joke = jokeList[i];
    let newJoke = $("<div>").text(joke.joke);
    let like = $('<button>').text('+').on('click', voteUp);
    let dislike = $('<button>').text('-').on('click', voteDown);
    let score = $('<p>').text('0');
    newJoke.append(like).append(dislike).append(score);
    $("#jokes").append(newJoke);
  }
  // console.log(response);
}
function voteUp(evt){
  let scoreContainer = $(evt.target).siblings('p');
  let score = Number(scoreContainer.text()) + 1;
  scoreContainer.text(score);
}
function voteDown(evt){
  let scoreContainer = $(evt.target).siblings('p');
  let score = Number(scoreContainer.text()) - 1;
  scoreContainer.text(score);
}
getJokes();
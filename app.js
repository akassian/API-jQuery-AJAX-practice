console.log("Let's get this party started!");


const API_KEY = "xAiC2f53HUVIdrR0m96Hi3x7ZkvNUq9d";

async function searchGif(evt) {
  evt.preventDefault();
  let q = $("#search").val();
  let result = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: API_KEY, q }
  })
  let url = result.data.data[0].images.downsized.url;
  let gif = $('<img>');
  gif.attr('src', url);
  $('#gifs').append(gif);
}

function removeGifs(evt) {
  $('#gifs').empty();
}

function start() {
  $("#submit").on("click", searchGif);
  $("#remove").on("click", removeGifs);

}
$(start);
// API = xAiC2f53HUVIdrR0m96Hi3x7ZkvNUq9d
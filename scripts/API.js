
let newsSearch = []
let newsList = document.getElementById('news')


axios.get('https://gnews.io/api/v3/search?q=georgia&token=a5ad6e266f09e9d9a306372a761e63bd')
.then(function (response){
    newsSearch = response.data
    // console.log(response)
    // console.log(response.data)
    // console.log(response.data.articles)
    newsSearch.articles.map(function (article => {
        // console.log(article.title)
        new
        
    });
})


function displayStories (array) {

}


// function renderMovies(movieArray) {
//     let movieHtmlArray = movieArray.map(function (currentMovie) {
//         return `
//         <div id="movie" class="card m-3" style="width: 18rem;">
//         <img id="poster"
//             src="${currentMovie.Poster}"
//             class="card-img-top" alt="${currentMovie.Title}">
//         <div class="card-body">
//             <div class="titleDate">
//             <h5 id="title" class="card-title">${currentMovie.Title}</h5>
//             <h4 id="releaseDate"><span class="badge badge-secondary">${currentMovie.Year}</span></h4v>
//             </div>
//             <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add to Watchlist!</a>
//         </div>
//         </div>`
//     }
//     )
//     return movieHtmlArray.join('');
// };
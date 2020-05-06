
let $newsContainer = $('#news');
let newsSearch = [];

// loadArticles

axios.get('https://gnews.io/api/v3/search?q=georgia&token=a5ad6e266f09e9d9a306372a761e63bd')
.then(function renderArticles (response){
    $newsSearch = response.data;
    console.log(newsSearch);
    console.log(response.data);
    console.log(response.data.articles);
    console.log(response.data.articles.title);

})
    // newsSearch.articles.map(function (article) {
// document.addEventListener(‘DOMContentLoaded’, function () {
    

//             new
            
//         });
//     })

//         return `
//     <a href="${article.url}">${article.title}</a>`

// }


// function displayStories (array) {

// }

// USE CODE BELOW TO DESIGN ABOVE



// const movieContainer = document.getElementById('movies-container')
// const myForm = document.getElementById('search-form');
// document.addEventListener(‘DOMContentLoaded’, function() {
//     function renderMovies(movieArray) {
//         let movieHtmlArray = movieArray.map(function (currentMovie) {
//             return `
//             <div id="movie" class="card m-3" style="width: 18rem;">
//             <img id="poster"
//                 src="${currentMovie.Poster}"
//                 class="card-img-top" alt="${currentMovie.Title}">
//             <div class="card-body">
//                 <div class="titleDate">
//                 <h5 id="title" class="card-title">${currentMovie.Title}</h5>
//                 <h4 id="releaseDate"><span class="badge badge-secondary">${currentMovie.Year}</span></h4v>
//                 </div>
//                 <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add to Watchlist!</a>
//             </div>
//             </div>`
//         }
//         )
//         return movieHtmlArray.join('');
//     }

// });





// function saveToWatchlist(imdbID) {
//     console.log(imdbID);
//     axios.get(`http://www.omdbapi.com/?apikey=efe3c50b&i=${imdbID}`)
//     .then(function(response) {
//         let movie = response.data;
//         let watchlistJSON = localStorage.getItem('watchlist');
//         let watchlist = JSON.parse(watchlistJSON);
//         if (watchlistJSON == null) {
//             watchlist = [];
//         }  
//         watchlist.push(movie);
//         watchlistJSON = JSON.stringify(watchlist);
//         localStorage.setItem('watchlist', watchlistJSON);
//     })
// };
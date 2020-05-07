
let $newsContainer = $('#news');
let newsSearch = [];

function getNews(city, state) {
  // Get user's visit status from local storage
  // let user1 = localStorage.getItem('user');
  // console.log(user);
  // let user1JSON = JSON.parse(user1);
  // console.log(user1JSON);


  // let searchCity = user1JSON.city;
  // let searchState = user1JSON.state;
  // console.log(searchState);

  axios.get(`https://gnews.io/api/v3/search?q=${city}%20${state}&token=975a5f376a3a857c1cc3d8751561869f`)
    .then(function (response) {
      // add error handling if news doesnt show
      newsSearch = response.data.articles;
      console.log(newsSearch);
      let newsBlock = newsSearch.map(function (article) {
        console.log(article.title);
        console.log(article.url);

        //Set card into the news container on main page
        return `
        
<div class="row row-cols-1 w-lg-50 w-sm-100">
                <div class="col mb-4">
                  <div class="card">
                    <img src="${article.image}" class="card-img-top" alt="">
                    <div class="card-body">
                    <h5 class="card-title"><a href="${article.url}">${article.title}<a/></h5>
                    <p class="card-text">${article.description}</p>
                    <a href="${article.source.url}"><p class="card-text"><small class="text-muted">${article.source.name}</small></p><a/>
                    </div>
                  </div>
        `
      })
      $newsContainer.html(newsBlock);
    });
}




let $newsContainer = $('#news');
let newsSearch = [];






function getNews() {
  // Get user's visit status from local storage
  let user1 = localStorage.getItem('user');
  console.log(user);
  let user1JSON = JSON.parse(user1);
  console.log(user1JSON);


  let searchCity = user1JSON.city;
  let searchState = user1JSON.state;
  console.log(searchState);

  axios.get(`https://gnews.io/api/v3/search?q=${searchCity}%20${searchState}&token=134a593a2e5be5221726bf39ef418260`)
    .then(function (response) {
      newsSearch = response.data.articles;
      console.log(newsSearch);
      let newsBlock = newsSearch.map(function (article) {
        console.log(article.title);
        console.log(article.url);

        //Set card into the news container on main page
        return `
        
<div class="row row-cols-1">
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



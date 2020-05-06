
let $newsContainer = $('#news');
let newsSearch = [];


// Get user's visit status from local storage
let user1 = localStorage.getItem('user');
console.log(user);
let user1JSON = JSON.parse(user1);
console.log(user1JSON);


let searchCity = user1JSON.city;
let searchState = user1JSON.state;
console.log(searchState);




function getNews() {
  axios.get(`https://gnews.io/api/v3/search?q=${searchCity}%20${searchState}&token=3d5ec2062b972fa8960ea9159c358dd6`)
    .then(function (response) {
      newsSearch = response.data.articles;
      console.log(newsSearch);
      let newsBlock = newsSearch.map(function (article) {
        console.log(article.title);
        console.log(article.url);
        //Set card into the news container on main page
        return `
        
<div class="row row-cols-1 row-cols-md-2">
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
      console.log('news block');
      console.log(newsBlock);
    });
}



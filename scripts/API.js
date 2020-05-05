
// let search = 



axios.get('https://gnews.io/api/v3/search?q=georgia&token=a5ad6e266f09e9d9a306372a761e63bd')
.then(function (response){
    console.log(response)
    console.log(response.data)
    console.log(response.data.articles)
    response.data.articles.forEach(article => {
        console.log(article.title)
        
    });
})

// console.log(axios.get('https://gnews.io/api/v3/search?q=georgia&token=a5ad6e266f09e9d9a306372a761e63bd'))

// console.log('hello')


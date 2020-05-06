document.addEventListener('DOMContentLoaded', function() {


    //var visited = 
    localStorage.setItem('user', "city: 'atlanta', zip: '30043'");    //localStorage.getItem('user');
    let visited = localStorage.getItem('user');
    var returnDiv = document.getElementById('returningUser');
    cons

    // get users info from local storage

    //const userLocation = localStorage.setItem('user', {city: 'atlanta', zip: '30043'});    //localStorage.getItem('user');//JSON.parse(visited);
    pageInit(visited);

    function pageInit(visitStatus) {
        var x = document.getElementById('newUser');
    
        // NEED TO PUT OTHER NOT-TRUE CONDITIONS BELOW
        if (visitStatus != null) {
            x.style.display = 'none';
            console.log(visitStatus.user.city);
           // console.log(returnDiv.textContent += `${visitStatus.city}`);
    
        } else {
            x.style.display = 'flex';
            x.innerHTML += '<h1>NEW USER</h1>';
        }
    }
});
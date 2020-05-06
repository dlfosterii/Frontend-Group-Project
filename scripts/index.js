
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

var placesService;

// Set Global Variables
const user = {
    zip: '',
    state: '',
    city: '',
    country: '',
};

// Event handler that saves user's location input
$('#search-button').on('click', function () {
    const searchValue = $('#search').val();
    const request = {
        query: searchValue,
        fields: [
            'name',
            'formatted_address',
        ],
    };
    placesService.findPlaceFromQuery(request, function (results, status) {
        // If else checks user input, can be updated for better error handling
        if (results == null || results == 'ZERO_RESULTS') {
            console.log('error with user input');
        } else {
            console.log(results, status);
            // Formats the response from google API
            let formattedString = results[0].formatted_address;
            let locationArray = formattedString.split(', ');
            let userStateZip = (locationArray[locationArray.length - 2]);
            let stateZip = userStateZip.split(' ');
            // Sets the values of the user object 
            user.state = stateZip[0];
            user.zip = stateZip[1];
            user.country = (locationArray[locationArray.length - 1]);
            user.city = (locationArray[locationArray.length - 3])
            console.log(user);
        }

        // Push user {} to localStorage
        let userInfo = localStorage.getItem('user');
        let userInfoParsed = JSON.parse(userInfo);
        // If user doesn't exist in localStorage create empty array
        if (userInfoParsed === null) {
            userInfoParsed = [];
            // Stringify user then save it to localStorage
            userInfoToParse = JSON.stringify(user);
            console.log(userInfoToParse);
            localStorage.setItem('user', userInfoToParse);
        }


    }
    );



});


// Callback function to generate map used in the URL for the API in index.html
function initMap() {
    console.log('init map');
    placesService = new google.maps.places.PlacesService(document.createElement('div'));
};






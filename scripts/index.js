
document.addEventListener('DOMContentLoaded', function() {


    // Get user's visit status from local storage
    let visited = localStorage.getItem('user');
    console.log(visited);
    let visitedJSON = JSON.parse(visited);
    console.log(visitedJSON);


    // Assign contants to returningUser and newUser <div> elements in index.html
    const returnDiv = document.getElementById('returningUser');
    const newDiv = document.getElementById('newUser');

    if (visitedJSON === null) {
        console.log('null');
    } else {
        $('.search-container').hide();
    }
});

console.log('test');
// Create global variable for location data
var placesService;

// Set Global Variables
//const newDiv = document.getElementById('newUser');
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
    console.log(searchValue);
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
    });
    newUserDiv();
});

// Callback function to display returning user's div
function newUserDiv() {
    newDiv.style.display = 'block';
    newDiv.innerHTML += '<h1>NEW USER</h1>';
};

// Callback function to generate map used in the URL for the API in index.html
function initMap() {
    console.log('init map');
    placesService = new google.maps.places.PlacesService(document.createElement('div'));
};
// Create global variable for location data
var placesService;

// Set Global Variables
//const newDiv = document.getElementById('newUser');
const user = {
    zip: '',
    state: '',
    city: '',
    country: '',
    lat: '',
    lng: '',
};

document.addEventListener('DOMContentLoaded', function () {
    // Get user's visit status from local storage
    let visited = localStorage.getItem('user');
    let visitedJSON = JSON.parse(visited);

    // Assign contants to returningUser and newUser <div> elements in index.html
    const returnDiv = document.getElementById('returningUser');
    const newDiv = document.getElementById('newUser');
    if (visitedJSON == null) {
        console.log('localStorage = null');
        $('#news').hide();
        $('.search-container').show();
        $('#navigation').css('display', 'none')

    } else {
        $('.search-container').css('display', 'none');
        console.log('adding weather');
        getWeather(visitedJSON);
        getCalendar();
        console.log(visitedJSON);
        getNews(visitedJSON.city, visitedJSON.state);
    }
    var offset = new Date().getTimezoneOffset();
    console.log(offset);
});

// Event listeners for main search bar button
$('#search-button').on('click', function () {
    const searchValue = $('#search');
    setLocation(searchValue);
});
// Event listener for top nav bar button
$('#button-nav').on('click', function () {
    const navValue = $('#search-nav');
    setLocation(navValue);
});

// Event listener for changing theme and saving to local storage
$('.theme-item').on('click', function () {
    const themeName = this.dataset.theme;
    document.getElementById('theme').setAttribute('href', 'styles/' + themeName + '.css');
    if (themeName !== 'partymode') {
        localStorage.setItem('theme', themeName);
    } else {
        localStorage.setItem('theme', 'style');
    }
});

// Main function to set users Location
function setLocation(inputValue) {
    const searchValue = inputValue.val();
    const request = {
        query: searchValue,
        fields: [
            'name',
            'formatted_address',
            'geometry',
        ],
    };
    placesService.findPlaceFromQuery(request, function (results, status) {
        // If else checks user input, can be updated for better error handling
        if (results == null || results == 'ZERO_RESULTS') {
            console.log('error with user input');
        } else {
            user.lat = results[0].geometry.location.lat();
            user.lng = results[0].geometry.location.lng();
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
        }

        // Push user {} to localStorage
        let userInfo = localStorage.getItem('user');
        let userInfoParsed = JSON.parse(userInfo);
        // If user doesn't exist in localStorage create empty array
        if (userInfoParsed === null) {
            userInfoParsed = [];
        }
        // Stringify user then save it to localStorage
        userInfoToParse = JSON.stringify(user);
        localStorage.setItem('user', userInfoToParse);

        console.log(user.city)
        getNews(user.city, user.state);
        getWeather(user);
        getCalendar();
        location.reload();
        return false;

    });
}

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

// get weather info and create widget 
function getWeather(obj) {

    const { city, lng, lat } = obj;

    console.log(city);
    // push in users lat and lng to the weather widget
    $('#weatherWidget').append(`<div class="climacell-widget" data-apikey="Ejzw0cBfFqLJY7Cs3pX4ByvMz2Kb3l3y"
    data-type="nowcast" data-location-name="${city}" data-location-lon="${lng}" data-location-lat="${lat}"
    data-size-mode="large" data-font-color="#000" data-background-color="#fff" data-font-family="verdana"
    data-weather-params="temp:F,precipitation:mm/hr,wind_speed:mph,humidity:%,cloud_cover:%"
    data-precipitation-timeline="true"></div>`)
}

function getCalendar() {
    $('.googleCalendar').append(`
    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=Y294LmpvbmF0aGFuQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23E67C73&amp;color=%2333B679&amp;color=%230B8043&amp;showTz=0&amp;showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showNav=1&amp;showDate=0" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</div>`)
}

let $newsContainer = $('#news');
let newsSearch = [];

function getNews(city, state) {

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

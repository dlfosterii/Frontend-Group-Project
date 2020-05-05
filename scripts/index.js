var placesService;

// Event handler that saves user's location input
$('#search-button').on('click', function() {
    const searchValue = $('#search').val();
    const request = {
        query: searchValue,
        fields: [
            'name',
            'formatted_address',
        ],
    };
    placesService.findPlaceFromQuery(request, function(results, status) {
        //if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results, status);
            let formattedString = results[0].formatted_address;
            let locationArray = formattedString.split(',');
            console.log(locationArray)
            console.log(locationArray[locationArray.length - 3]);

        //}
    });
});

// Callback function to generate map used in the URL for the API in index.html
function initMap() {
    console.log('init map');
    placesService = new google.maps.places.PlacesService(document.createElement('div'));
}
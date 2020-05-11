# Local Information Dashboard
[Local Information Dashboard](https://wizardly-khorana-147bb3.netlify.app/) (Linfo) is a single-page website to gather news and weather for your location based on the user's location input. This was originally a group project for a coding bootcamp at [DigitalCrafts](https://www.digitalcrafts.com/) in Atlanta, GA.

### Netlify Link: https://wizardly-khorana-147bb3.netlify.app/

### Github Repository: [https://github.com/dlfosterii/Frontend-Group-Project](https://github.com/dlfosterii/Frontend-Group-Project)

## Developer Team
 - [Nick Bess](https://github.com/NBESS)
 - [Jonathan Cox](https://github.com/jonathancox1)
 - [David Foster](https://github.com/dlfosterii)
 - [Nicholas Nam](https://github.com/n1ckDotEXE)

## Integrated API's

Linfo utilizes the Google Places API as the foundation for the dashboard. An additional API is from GNews to retrieve a curated list of news that is localized to the user's city.

|API |Source| Authentication Required?|Query Limit|
|----------------|-------------------------------|-|-|
|Google Maps|developers.google.com/places|Yes|$0.017/Request|
|GNews|gnews.io|Yes|100/Day

- **Google Places** - The Google Places API is the foundation to the Linfo dashboard. When a user visits the website for the first time, they are prompted to enter their location. Google Places then deciphers the input and returns the closest match as their location. The Linfo website extracts the relevant values and is stored into the browser's Local Storage.
- **GNews** - GNews is a 3rd party API that acts as a replacement for the deprecated Google News API. When a location is available for the user, the required location data is sent to GNews with a GET request and curated list of local news is automatically populated on the dashboard.


## Integrated Widgets
With the help of widgets, Linfo is able to display visual data of pertinent information in relation to the user's location.

|Widget |Source |Authentication Required?|Query Limit|
|----------------|-------------------------------|-|-|
|Google Calendar|calendar.google.com|Yes|∞|
|Climacell Weather|climacell.co|Yes|100/Day|

  - **Google Calendar** - The Google Calendar widget utilizes the user's custom API token in order to display their calendar. For demonstration purposes, a predefined token is used to display the holidays of the year.
- **Climacell Weather** - Climacell Weather provides a widget that displays a visualized weather forecast of the user's location. 
  

## API Usage

PLACEHOLDER FOR DIAGRAM
  
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

  
## License

  

[GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html)

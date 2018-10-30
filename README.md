# Find your Gym

This is the eighth project of Udacity's Front End Nanodegree.

## Project Overview

Find your Gym app displays a map centered in Thessaloniki which displays the location of 20 gyms located around the center. When the user types into the search field, the location list view and the markers update accordingly to filtered results in real time. Clicking on a marker or a list-item pops up an info window with details about the selected GYM. Data are fetched from Foursquare API and map from Google Maps API.

## Getting Started

* Clone the repository or download the zip-file of the master branch.
* Install all project dependencies with `npm install`
* Start the server with `npm start`. The site will automatically open in `http://localhost:3000`.

### Prerequisites

_npm_ :
You have to install npm. In order to do so navigate to npm's [website](https://www.npmjs.com/get-npm) to download and install the software. After you download npm, install all project dependencies with `npm install`


#### To run in developer mode

- start the development server with `npm start`


### Dependencies

Below you can find the packages that are used:

- [react-google-maps](https://www.npmjs.com/package/create-react-app) for handling the map features.[Documentation](https://tomchentw.github.io/react-google-maps/)
- [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp)
- [recompose](https://www.npmjs.com/package/recompose)
- [prop-types](https://www.npmjs.com/package/prop-types)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### API

This project fetches location data from [Foursquare API](https://developer.foursquare.com/) and the map from [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial).

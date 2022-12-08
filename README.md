# Weather-Dashboard

Small Weather-Dashboard created with React and styled components

## Get 3-hourly forecasts for every location in the world up to +15 hours

![weather-dashboard](/src/img/weather-dashboard.png "Example for Lake Garda with temperature forecast")

## Description

With this small application you get the forecast for typical weather parameters like temperature, wind, rain, pressure and humidity for places all over the world.
The app shows the local time of the location together with the position on the map, updated when searching for a new location. You will also have access to further location information, e.g. sunrise and sunset. The weather data is plotted with different types of charts.

I decided to use styled components because it gives the possibility to create components and attach styles to them. Additionally it's possible to define themes and use them everywhere in your app, not only inside of styled components but also inside of other components. Although there already exists React-Router version 6 and even 6.4.5 i used React-Router version 5. The reason for that is that the older codebases still use version 5 and primarily i wanted to improve my skills on that.

## Third party libraries and APIs used to build this project

- 3-hourly weather data ([OpenWeatherMap API](https://openweathermap.org/))
- Local time ([Abstract API](https://www.abstractapi.com/))
- Input options ([RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities/))
- Location icon ([Geoapify](https://www.geoapify.com/))
- Symbol font for Open Weather Map API ([Owfont](https://websygen.github.io/owfont))
- Map ([React Leaflet](https://react-leaflet.js.org/))
- Animations ([Framer-motion](https://www.framer.com/docs/))
- Search for new locations ([React-select-async-paginate](https://www.npmjs.com/package/react-select-async-paginate))
- Plots ([Recharts](https://recharts.org/en-US/))

## Technologies

- React (18.2.0)
- Framer-motion (7.6.10)
- React-Leaflet (4.1.0)
- React-Router-DOM (5.3.4)
- React-select-async-paginate (0.7.0)
- Recharts (2.0.6)
- Styled components (5.3.6)

## Setup

To run this project, install it locally using npm:

```
$ cd <path to folder>
$ npm install
$ npm start
```

### Inspiration

Front-end design inspired by @MindInventory UI/UX - [dribbble](https://dribbble.com/shots/19207866-Weather-Forecast-Dashboard)

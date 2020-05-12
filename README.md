# Novel Covid-19 Live Tracker

This website showcases the global impact of COVID-19(SARS-CoV-2) and the impact on each country.

## Project Notes

- The webpage is built with `React.js` and `material-ui` is used for the UI while charts are drawn using `recharts.js`
- The statistics are pulled from [**worldometer**](https://www.worldometers.info/coronavirus/), [**JHUCSSE**](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series) and [**NYT**](https://github.com/nytimes/covid-19-data) through [_Novel Covid-19 API_](https://corona.lmao.ninja/v2) using `axios` async calls.
- The charts show the accumulated data and the daily data from a selected country; by default, the country is set to the country of a user's location found from `https://ipapi.co/json/`

## Dependancies

```
"@material-ui/core": "^4.9.11",
"@material-ui/icons": "^4.9.1",
"@material-ui/lab": "^4.0.0-alpha.52",
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
"axios": "^0.19.2",
"react": "^16.13.1",
"react-countup": "^4.3.3",
"react-scripts": "3.4.1",
"recharts": "^1.8.5",
```

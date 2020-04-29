import axios from 'axios'

const covid19_url = 'https://api.covid19api.com'
const ninja_url = 'https://corona.lmao.ninja/v2'

export const fetchSummary = async option => {
  try {
    const response = await axios.get(`${ninja_url}/all`)
    const history = await axios.get(`https://covid19.mathdro.id/api/daily`)
    console.log('history', history)
    return processGlobalData(response.data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchSummaryByCountry = async () => {
  try {
    const response = await axios.get(`${ninja_url}/countries?sort=cases`)
    return response.data.map(processCountryData)
  } catch (error) {
    console.error(error)
  }
}

export const fetchCountryHistory = async country => {
  try {
    const response = await axios.get(`${covid19_url}/country/${country}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export const fetchCountryInfo = async () => {
  try {
    const data = await fetchCountryHistory(await getCountryName())
    return data
  } catch (error) {
    console.error(error)
  }
}

const getCountryName = async () => {
  try {
    const response = await axios.get('https://ipapi.co/json/')
    return response.data.country_name
  } catch (error) {
    console.error(error)
  }
}

const processGlobalData = data => ({
  active: data.active,
  confirmed: data.cases,
  recovered: data.recovered,
  deaths: data.deaths,
  newConfirmed: data.todayCases,
  newDeaths: data.todayDeaths,
  tests: data.tests,
  date: new Date(data.updated).toString()
})

const processCountryData = data => ({
  country: data.country,
  active: data.active,
  confirmed: data.cases,
  recovered: data.recovered,
  deaths: data.deaths,
  newConfirmed: data.todayCases,
  newDeaths: data.todayDeaths,
  tests: data.tests,
  testsPM: data.testsPerOneMillion,
  flag: data.countryInfo.flag
})

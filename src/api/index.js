import axios from 'axios'

const covid19_url = 'https://api.covid19api.com'
const ninja_url = 'https://corona.lmao.ninja/v2'

export const fetchSummary = async option => {
  try {
    const response = await axios.get(`${ninja_url}/all`)
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
    console.log('fetched country history')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export const fetchCountryInfo = async () => {
  try {
    const data = await fetchCountryHistory((await getCountryName()) || 'USA')
    const res = groupByDate(data)
    return addNewCases(res)
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
  rr: ((data?.recovered / data?.cases) * 100).toFixed(2),
  mr: ((data?.deaths / data?.cases) * 100).toFixed(2),
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
  tpm: data.testsPerOneMillion,
  rr: ((data?.recovered / data?.cases) * 100).toFixed(2),
  mr: ((data?.deaths / data?.cases) * 100).toFixed(2),
  flag: data.countryInfo.flag
})
const groupByDate = data => {
  return data.reduce((daily, el) => {
    let key = new Date(el.Date)
    let item = daily.find(d => d && d.date.getTime() === key.getTime())
    if (item) {
      item.confirmed += el.Confirmed
      item.active += el.Active
      item.deaths += el.Deaths
      item.recovered += el.Recovered
    } else {
      daily.push({
        date: new Date(key),
        confirmed: el.Confirmed,
        active: el.Active,
        deaths: el.Deaths,
        recovered: el.Recovered
      })
    }
    return daily
  }, [])
}

const addNewCases = dailyData => {
  for (let i = dailyData.length - 1; i > 0; i--) {
    let data = dailyData[i],
      prevData = dailyData[i - 1]
    data.newConfirmed = data.confirmed - prevData.confirmed
    data.newRecovered = data.recovered - prevData.recovered
    data.newDeaths = data.deaths - prevData.deaths
  }

  dailyData[0].newConfirmed = dailyData[1].confirmed - dailyData[0].confirmed
  dailyData[0].newRecovered = dailyData[1].recovered - dailyData[0].recovered
  dailyData[0].newDeaths = dailyData[1].deaths - dailyData[0].deaths
  return dailyData
}

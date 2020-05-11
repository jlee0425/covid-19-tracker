import axios from 'axios'

const url = 'https://corona.lmao.ninja/v2'

export const fetchSummary = async () => {
  try {
    const response = await axios.get(`${url}/all`)
    return processGlobalData(response.data)
  } catch (error) {
    console.error(error)
  }
}

export const fetchSummaryByCountry = async () => {
  try {
    const response = await axios.get(`${url}/countries?sort=cases`)
    return response.data.map(processCountryData)
  } catch (error) {
    console.error(error)
  }
}

export const fetchCountryHistory = async countryName => {
  try {
    const country = countryName || (await fetchCountryName())
    const response = await axios.get(
      `${url}/historical/${country}?lastdays=all`
    )
    return addNewCases(processHistoricalData(response.data?.timeline))
  } catch (error) {
    console.error(error)
  }
}
export const fetchCountryName = async () => {
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
  date: new Date(data?.updated).toString()
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
const processHistoricalData = data => {
  let res = {
    total: []
  }
  for (let daily in data.cases) {
    const dailyData = {
      date: daily,
      confirmed: data.cases[daily],
      recovered: data.recovered[daily],
      deaths: data.deaths[daily]
    }
    res.total.push(dailyData)
  }
  return res
}
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
  let newCases = []
  const totalData = dailyData.total
  for (let i = totalData.length - 1; i > 0; i--) {
    let curr = totalData[i],
      prev = totalData[i - 1]
    const newDailyCase = {
      date: curr.date,
      confirmed: curr.confirmed - prev.confirmed,
      recovered: curr.recovered - prev.recovered,
      deaths: curr.deaths - prev.deaths
    }
    newCases.unshift(newDailyCase)
  }
  return { ...dailyData, daily: [...newCases] }
}

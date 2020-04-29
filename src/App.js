import React from 'react'

import Header from './components/Header/Header'
import Summary from './components/Summary'
import { fetchSummary, fetchSummaryByCountry, fetchCountryInfo } from './api'

export default class App extends React.Component {
  state = {}

  async componentDidMount () {
    const global = await fetchSummary()
    const countries = await fetchSummaryByCountry()
    const accessCountry = await fetchCountryInfo()
    this.setState({
      global: {
        ...global
      },
      accessCountry: accessCountry,
      countries: countries
    })
    console.log('state', this.state)
  }
  sortByCases = (country1, country2) =>
    country1.TotalConfirmed < country2.TotalConfirmed ? 1 : -1

  render () {
    return (
      <div>
        <Header />
        <Summary
          cardData={this.state.global}
          tableData={this.state.countries}
        />
      </div>
    )
  }
}

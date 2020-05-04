import React from 'react'

import Header from './components/Header/Header'
import Summary from './components/Summary'
import { fetchSummary, fetchSummaryByCountry, fetchCountryInfo } from './api'

export default class App extends React.Component {
  state = {}
  async componentDidMount () {
    const global = await fetchSummary()
    const countries = await fetchSummaryByCountry()
    // const accessCountry = await fetchCountryInfo()
    this.setState({
      global: { ...global },
      // accessCountry: accessCountry,
      countries: countries
    })
    console.log('state', this.state)
  }

  render () {
    return (
      <div>
        <Header lastUpdated={this.state.global?.date} />
        <Summary
          cardData={this.state.global}
          // chartData={this.state.accessCountry}
          tableData={this.state.countries}
        />
      </div>
    )
  }
}

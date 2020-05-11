import React from 'react'
import Container from '@material-ui/core/Container'

import Header from './components/Header/Header'
import Summary from './components/Summary'
import Footer from './components/Footer'
import {
  fetchSummary,
  fetchSummaryByCountry,
  fetchCountryHistory,
  fetchCountryName
} from './api'

export default class App extends React.Component {
  state = {}
  async componentDidMount () {
    try {
      const [global, countries, dailyData, accessedCountry] = await Promise.all(
        [
          fetchSummary(),
          fetchSummaryByCountry(),
          fetchCountryHistory(),
          fetchCountryName()
        ]
      )
      this.setState({
        global: global,
        dailyData: dailyData,
        accessedCountry: accessedCountry,
        countries: countries
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return Object.keys(this.state).length > 0 ? (
      <Container>
        <Header />
        <Summary
          cardData={this.state.global}
          countryName={this.state.accessedCountry}
          countries={this.state.countries.map(c => c.country)}
          chartData={this.state.dailyData}
          tableData={this.state.countries}
        />
        <Footer />
      </Container>
    ) : null
  }
}

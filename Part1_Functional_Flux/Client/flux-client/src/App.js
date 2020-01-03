import React from 'react';
import './App.css';
import WeatherDataContainer from './Containers/WeatherDataContainer';
import SelectCity from './Containers/SelectCity'
import { connect } from 'react-redux'
import { fetchForecastData, fetchWeatherData } from './State/actions'
import CreateDataContainer from './Containers/CreateDataContainer'
import RefreshDataContainer from './Containers/RefreshDataContainer'

class App extends React.Component{


  componentDidMount() {
    this.props.onFetchData()
  }

  render() {
    
    return (
      <div className="App">
      <RefreshDataContainer selectedCity= {this.props.selectedCity} />
        <SelectCity/>
        <CreateDataContainer/>
        {this.props.weatherData ? (<WeatherDataContainer startDate = {this.props.startDate} endDate = {this.props.endDate} weatherData = {this.props.weatherData} />)
         : (<div> </div>)}
        
      </div>
    );
  }

}

const mapStatetoProps = (state) => {
  return { weatherData: state.weatherData.weatherData, startDate: state.weatherData.startDate, endDate: state.weatherData.endDate, selectedCity: state.weatherData.selectedCity }
}
const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => { 
    dispatch(fetchWeatherData())
     dispatch(fetchForecastData()) } }
}
export default connect(mapStatetoProps, mapDispatchprops)(App);
import React, { Component } from "react";
import ExchangeRateCard from "./DisplayRates";



// Modify Modify Modify
// Display a list of coins 
class CurrencyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchData;
  }

  fetchData() {https://min-api.cryptocompare.com/data/all/coinlist
    let endpoint = ``;
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return <div />;
  }
}
export default CurrencyCard;

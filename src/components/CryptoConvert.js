import React, { Component } from "react";
import "../Convert.css";
import ExchangeRateCard from "./DisplayRates";
import ExchangeDetails from "./ConvertList";
import { Line } from "react-chartjs-2";

const LineGraph = props => {
  const data = {
    labels: ["01", "5", "10", "15", "20", "25"],
    datasets: [
      {
        label: "Coin dataset September",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [6762.06, 6834.49, 6633.01, 6687.08, 6827.32, 6628.31]
        // data: [65, 59, 80, 81, 56, 55, 58]
      }
    ]
  };
  return <Line data={data} />;
};
class Convert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coinList: [],
      imageStamp:
        "https://images.cryptocompare.com/sparkchart/ETH/JPY/latest.png?ts=1537903200",
      inputFields: {
        coin: "",
        currency: ""
      },
      currencySymbols: {
        USD_symbol: "$",
        JPY_symbol: "¥",
        EUR_symbol: "€",
        GBP_symbol: "£",
        KRW_symbol: "₩"
      },
      price: "Loading...",
      market: "Loading...",
      dirVol: "Loading...",
      TotalVol: "Loading...",
      MarketCap: "Loading...",
      chgPctDay: "Loading...",
      isLoading: true
    };

    this.handleCoinChange = this.handleCoinChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCoinChange(e) {
    this.setState({ coin: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.coin, this.state.currency);

    this.fetchCoinData();
  }

  handleCurrencyChange(e) {
    this.setState({ currency: e.target.value });
  }

  componentDidMount() {
    const defaultCoin = "BTC";
    const defaultCurrency = "USD";
    this.setState({ coin: defaultCoin });
    this.setState({ currency: defaultCurrency });
    console.log(this.state.coin, this.state.currency);
    const defaultInitUrl = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${defaultCoin}&tsym=${defaultCurrency}`;
    fetch(defaultInitUrl)
      .then(res => res.json())
      .then(data => {
        const PRICE = data.Data.AggregatedData.PRICE;
        const MARKET = data.Data.AggregatedData.LASTMARKET;
        const DIR_VOL = data.Data.AggregatedData.VOLUME24HOURTO;
        const TOT_VOL = data.Data.AggregatedData.TOTALVOLUME24HTO;
        const MARKETCAP = data.Data.AggregatedData.MKTCAP;
        const CHG_PCT = data.Data.AggregatedData.CHANGEPCTDAY;
        let withPct = `${CHG_PCT} %`;
        this.setState({
          price: `${this.state.currencySymbols.USD_symbol}${PRICE}`
        });
        this.setState({ market: MARKET });
        this.setState({ dirVol: DIR_VOL });
        this.setState({ TotalVol: TOT_VOL });
        console.log(this.state.TotalVol, this.state.dirVol);
        this.setState({ MarketCap: MARKETCAP });
        this.setState({ chgPctDay: withPct });
      });
  }

  fetchCoinData() {
    let url = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${
      this.state.coin
    }&tsym=${this.state.currency}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(url, data, this.state.imageStamp);
        const PRICE = data.Data.AggregatedData.PRICE;
        const MARKET = data.Data.AggregatedData.LASTMARKET;
        const DIR_VOL = data.Data.AggregatedData.VOLUME24HOURTO;
        const TOT_VOL = data.Data.AggregatedData.TOTALVOLUME24HTO;
        const MARKETCAP = data.Data.AggregatedData.MKTCAP;
        const CHG_PCT = data.Data.AggregatedData.CHANGEPCTDAY;
        // const { currency } = this.state;
        // if (currency.currency === "USD") {
        //   this.setState({
        //     price: `${this.state.currencySymbols.USD_symbol}${PRICE}`
        //   });
        // } else if (currency.currency === "JPY") {
        //   this.setState({
        //     price: `${this.state.currencySymbols.JPY_symbol}${PRICE}`
        //   });
        // } else if (currency.currency === "EUR") {
        //   this.setState({
        //     price: `${this.state.currencySymbols.EUR_symbol}${PRICE}`
        //   });
        // } else if (currency.currency === "GBP") {
        //   this.setState({
        //     price: `${this.state.currencySymbols.GBP_symbol}${PRICE}`
        //   });
        // } else if (currency.currency === "KRW") {
        //   this.setState({
        //     price: `${this.state.currencySymbols.KRW_symbol}${PRICE}`
        //   });
        // }
        this.setState({ price: PRICE });
        this.setState({ market: MARKET });
        this.setState({ dirVol: DIR_VOL });
        this.setState({ TotalVol: TOT_VOL });
        console.log(this.state.TotalVol, this.state.dirVol);
        this.setState({ MarketCap: MARKETCAP });
        this.setState({ chgPctDay: CHG_PCT });
        console.log(url);
      });
  }

  //==== FETCH METHOD TO RETURN THE LIST OF ALL COIN NAMES
  // fetchData() {
  //   let url = `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${
  //     this.state.coin
  //   }&tsym=${this.state.currency}`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       const dataObj = data.Data;
  //       const coinArray = Object.keys(dataObj).map(i => dataObj[i]);
  //       console.log(dataObj);
  //       console.log(coinArray);
  //       coinArray.map(function(coinArray) {
  //         let names = coinArray.CoinName;
  //         console.log(names);
  //       });
  //       // this.setState({ coinList: [...this.state.coinList] })
  //     })
  //     .catch(error => console.log("Fetch failed", error));
  // }

  render() {
    return (
      <div className="convert-body">
        <div className="row mt-5 mb-3 text-center justify-content-center convert-head">
          <h3 className="display-3">Get All Conversions Done</h3>
        </div>
        <div className="row">
          <div className="col-md-6 text-left">
            <div className="row display-option">
              <div className="col-6">
                <h1>Coin: {this.state.coin} </h1>
              </div>
              <div className="col-6">
                <h1>Currency: {this.state.currency} </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-right">
            <form className="form-row">
              <select
                onChange={this.handleCoinChange}
                className="form-control my-2 mr-2 col-md-4"
              >
                <option value="default" value="select">
                  Select Coin
                </option>
                <option value="BTC">BitCoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
                <option value="LTC">LiteCoin (LTC)</option>
                <option value="BCH">BitCoin Cash (BCH)</option>
                <option value="LTC">LiteCoin (LTC)</option>
              </select>
              <select
                onChange={this.handleCurrencyChange}
                className="form-control my-2 mr-2 col-md-4"
              >
                <option value="default">Select currency</option>
                <option value="USD">USD</option>
                <option value="JPY">Japan Yen</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="KRW">KRW</option>
              </select>
              <button
                type="submit"
                className="btn btn-primary mr-2 col-md-3"
                onClick={this.handleSubmit}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-7 exchange-details">
            <ExchangeDetails
              price={this.state.price}
              market={this.state.market}
              dirVol={this.state.dirVol}
              TotalVol={this.state.TotalVol}
              marktcap={this.state.MarketCap}
              chgPctDay={this.state.chgPctDay}
            />
          </div>
          <div className="col-md-5 mt-2 graph">
            <LineGraph />
          </div>
        </div>
      </div>
    );
  }
}
export default Convert;

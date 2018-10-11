import React, { Component } from "react";
import Convert from "./CryptoConvert";
import { Link } from "react-router-dom";
import "./DisplayRates.css";

class ExchangeRateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url_1:
        "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=BTC&tsym=USD",
      url_2:
        "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=ETH&tsym=USD",
      url_3:
        "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=LTC&tsym=USD",
      url_4:
        "https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=BCH&tsym=USD",

      price: {
        btc_price: "",
        eth_price: "",
        ltc_price: "",
        bch_price: ""
      },

      market: {
        btc_market: "",
        eth_market: "",
        ltc_market: "",
        bch_market: ""
      },
      base_url: "https://www.cryptocompare.com",
      coin_logo: {
        btc_logo: "",
        eth_logo: "",
        ltc_logo: "",
        bch_logo: ""
      }
    };
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata() {
    fetch(this.state.url_1)
      .then(response => response.json())
      .then(data => {
        const BTC_price = data.Data.AggregatedData.PRICE;
        const btc_img = data.Data.CoinInfo.ImageUrl;
        const BTC_market = data.Data.AggregatedData.LASTMARKET;
        console.log("btc market", BTC_market);
        console.log(BTC_price, btc_img);
        this.setState({ btc_market: BTC_market });
        this.setState({ btc_price: BTC_price });
        this.setState({ btc_logo: `${this.state.base_url}${btc_img}` });
        console.log(this.state.btc_logo);
      })
      .catch(error => console.log("Fetch Data Failed", error));

    fetch(this.state.url_2)
      .then(response => response.json())
      .then(data => {
        const ETH_price = data.Data.AggregatedData.PRICE;
        const eth_img = data.Data.CoinInfo.ImageUrl;
        const ETH_market = data.Data.AggregatedData.LASTMARKET;
        console.log("eth market", ETH_market);
        this.setState({ eth_market: ETH_market });
        this.setState({ eth_logo: `${this.state.base_url}${eth_img}` });
        console.log(ETH_price, eth_img);
        this.setState({ eth_price: ETH_price });
        console.log(this.state.eth_logo);
      })
      .catch(error => console.log("Fetch URL_2 Data Failed", error));

    fetch(this.state.url_3)
      .then(response => response.json())
      .then(data => {
        const LTC_price = data.Data.AggregatedData.PRICE;
        const ltc_img = data.Data.CoinInfo.ImageUrl;
        const LTC_market = data.Data.AggregatedData.LASTMARKET;
        console.log("ltc market", LTC_market);
        this.setState({ ltc_market: LTC_market });
        this.setState({ ltc_logo: `${this.state.base_url}${ltc_img}` });
        console.log(LTC_price, ltc_img);
        this.setState({ ltc_price: LTC_price });
        console.log(this.state.ltc_logo);
      })
      .catch(error => console.log("Fetch Data URL_3 Failed", error));

    fetch(this.state.url_4)
      .then(response => response.json())
      .then(data => {
        const BCH_price = data.Data.AggregatedData.PRICE;
        const bch_img = data.Data.CoinInfo.ImageUrl;
        const BCH_market = data.Data.AggregatedData.LASTMARKET;
        this.setState({ bch_market: BCH_market });
        console.log("bch market", BCH_market);
        this.setState({ bch_logo: `${this.state.base_url}${bch_img}` });
        console.log(BCH_price, bch_img);
        this.setState({ bch_price: BCH_price });
        console.log(this.state.bch_logo);
      })
      .catch(error => console.log("Fetch Data URL_4 Failed", error));
  }

  render() {
    return (
      <div>
        <header>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="">
                <img src={require("../images/cryptocompare.png")} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link to="/"> Home</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div className="main">
          <div className="container-fluid">
            <h4 className="">Popular Coins</h4>
            <div className="row">
              <div className="col-md-3">
                <div className="price-card">
                  <div className="box-header">
                    <h1>BTC-USD</h1>
                  </div>
                  <div className="box-content">
                    <div className="logo">
                      <img src={this.state.btc_logo} alt="btc_logo" />
                    </div>
                    <div className="price">
                      <h1>${this.state.btc_price}</h1>
                    </div>
                  </div>
                  <div className="card-foot">
                    <p>{this.state.btc_market}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="price-card">
                  <div className="box-header">
                    <h1>ETH-USD</h1>
                  </div>
                  <div className="box-content">
                    <div className="logo">
                      <img src={this.state.eth_logo} alt="ethereum logo" />
                    </div>
                    <div className="price">
                      <h1>${this.state.eth_price}</h1>
                    </div>
                  </div>
                  <div className="card-foot">
                    <p>{this.state.eth_market}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="price-card">
                  <div className="box-header">
                    <h1>LTC-USD</h1>
                  </div>
                  <div className="box-content">
                    <div className="logo">
                      <img src={this.state.ltc_logo} />
                    </div>
                    <div className="price">
                      <h1>${this.state.ltc_price}</h1>
                    </div>
                  </div>
                  <div className="card-foot">
                    <p>{this.state.ltc_market}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="price-card">
                  <div className="box-header">
                    <h1>BCH-USD</h1>
                  </div>
                  <div className="box-content">
                    <div className="logo">
                      <img src={this.state.bch_logo} alt="bch logo" />
                    </div>
                    <div className="price">
                      <h1>${this.state.bch_price}</h1>
                    </div>
                  </div>
                  <div className="card-foot">
                    <p>{this.state.bch_market}</p>
                  </div>
                </div>
              </div>
            </div>

            <Convert />
          </div>
        </div>
      </div>
    );
  }
}
export default ExchangeRateCard;

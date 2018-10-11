import React from "react";

const ExchangeDetails = props => (
  <div className="coin-details">
    <ul>
      <li>
        PRICE <span>{props.price}</span>
      </li>
      <hr />
      <li>
        LAST MARKET <span> {props.market} </span>
      </li>
      <hr />
      <li>
        DIRECT VOLUME(24H) <span> {props.dirVol} </span>
      </li>
      <hr />
      <li>
        TOTAL VOLUME (24H) <span> {props.TotalVol} </span>
      </li>
      <hr />
      <li>
        MARKET CAP <span> {props.marktcap} </span>
      </li>
      <hr />
      <li>
        CHANGE PERC DAY (24H) <span> {props.chgPctDay} </span>
      </li>
    </ul>
  </div>
);
export default ExchangeDetails;

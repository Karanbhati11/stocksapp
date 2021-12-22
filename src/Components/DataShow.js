import React from "react";

function DataShow({ TIMESTAMP, OPEN, HIGH, LOW, CLOSE, VOLUME }) {
  return (
    <div key={TIMESTAMP}>
      {/* <ul key={TIMESTAMP}>
        <li
          key={TIMESTAMP}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "0px",
            padding: "0",
            border: "2px solid black",
          }}
        >
          <h3>{TIMESTAMP}:</h3>
          <h3 style={{ color: "grey" }}>{OPEN}:</h3>
          <h3 style={{ color: "darkGreen" }}>{HIGH}:</h3>
          <h3 style={{ color: "red" }}>{LOW}:</h3>
          <h3>{CLOSE}:</h3>
          <h3 style={{ color: "blue" }}>{VOLUME}</h3>
        </li>
      </ul>
      <tr>
        <td>{OPEN}</td>
        <td>{HIGH}</td>
        <td>{LOW}</td>
        <td>{CLOSE}</td>
        <td>{VOLUME}</td>
      </tr> */}

      {/* {Open.map((items) => {
        const TimeStamp = items[0];
        const StockOpen = items[1];
        const StockHigh = items[2];
        const StockLow = items[3];
        const StockClose = items[4];
        const StockVolume = items[5];
        return ( */}
      <tr>
        <td>{TIMESTAMP}</td>
        <td>{OPEN}</td>
        <td>{HIGH}</td>
        <td>{LOW}</td>
        <td>{CLOSE}</td>
        <td>{VOLUME}</td>
      </tr>
      {/* ); */}
      {/* })} */}
    </div>
  );
}

export default DataShow;

import React, { useEffect, useState } from "react";
import { SmartAPI, WebScoket } from "smartapi-javascript";
import { ApiKey } from "./Constants";
import DataShow from "./DataShow";

//https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json

function ApiTest() {
  const [Open, setOpen] = useState([]);
  const [SYMBOL, setSymbol] = useState("");
  const [Input, setInput] = useState("");
  const [TIME_INTERVAL, setTimeInterval] = useState("ONE_MINUTE");
  const APICALLER = async () => {
    // setSymbol("");
    // setInput("");
    let smart_api = new SmartAPI({
      api_key: ApiKey, // PROVIDE YOUR API KEY HERE
      // OPTIONAL : If user has valid access token and refresh token then it can be directly passed to the constructor.
      // access_token: "YOUR_ACCESS_TOKEN",
      // refresh_token: "YOUR_REFRESH_TOKEN"
    });

    await smart_api.generateSession("K258074", "Karan11@2000").then((data) => {
      return smart_api
        .getCandleData({
          exchange: "NSE",
          symboltoken: `${SYMBOL}`,
          interval: `${TIME_INTERVAL}`,
          fromdate: "2021-12-21 09:00",
          todate: "2021-12-21 15:30",
        })
        .then((data) => {
          // Profile details
          // console.log(data.data.map((items) => items[2]));
          setOpen(data.data);
        })
        .catch((ex) => {
          //Log error
        });
    });
  };

  // const RENDERER = () => {
  //   return Open.map((items) => {
  //     const TimeStamp = items[0];
  //     const StockOpen = items[1];
  //     const StockHigh = items[2];
  //     const StockLow = items[3];
  //     const StockClose = items[4];
  //     const StockVolume = items[5];
  //     return (
  //       // <DataShow
  //       //   key={TimeStamp}
  //       //   TIMESTAMP={TimeStamp}
  //       //   OPEN={StockOpen}
  //       //   HIGH={StockHigh}
  //       //   LOW={StockLow}
  //       //   CLOSE={StockClose}
  //       //   VOLUME={StockVolume}
  //       // />

  //       // <table>
  //       //   <tr>
  //       //     <th>OPEN</th>
  //       //     <th>HIGH</th>
  //       //     <th>LOW</th>
  //       //     <th>CLOSE</th>
  //       //     <th>VOLUME</th>
  //       //   </tr>
  //       //   <tr>
  //       //     <td>{StockOpen}</td>
  //       //     <td>{StockHigh}</td>
  //       //     <td>{StockLow}</td>
  //       //     <td>{StockClose}</td>
  //       //     <td>{StockVolume}</td>
  //       //   </tr>
  //       // </table>
  //       TimeStamp, StockOpen, StockHigh, StockLow, StockClose, StockVolume
  //     );
  //   });
  // };

  // setInterval(function () {
  //   APICALLER();
  // }, 5000);

  const Changer = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
    setSymbol(e.target.value);
    // setTimeInterval(e.target.value);
  };
  const ChangerTime = (e) => {
    // e.preventDefault();
    // setInput(e.target.value);
    // setSymbol(e.target.value);
    const a = e.target.value;
    const b = a.toUpperCase();
    setTimeInterval(b);
  };

  // useEffect(() => {
  //   APICALLER();
  // }, [SYMBOL]);
  return (
    <React.Fragment>
      {/* <h1>{Open.map((items) => items[2])}</h1> */}
      {/* <DataShow Data={Open} /> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input
          className="form-control"
          style={{ width: "400px", margin: "10px" }}
          value={Input}
          placeholder="Symbol Token"
          onChange={(e) => Changer(e)}
        />
        <input
          className="form-control"
          style={{ width: "400px", margin: "10px" }}
          placeholder="Time Interval"
          value={TIME_INTERVAL}
          onChange={(e) => ChangerTime(e)}
        />
        <button
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={APICALLER}
        >
          Submit
        </button>
        <button
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={() => {
            setOpen([]);
            setSymbol("");
            setInput("");
            setTimeInterval("");
          }}
        >
          Clear
        </button>
      </form>
      <table
        className="table table-dark  table-striped"
        style={{ width: "80%", marginLeft: "10%" }}
      >
        <thead>
          <tr>
            <th className="table-dark" scope="col">
              TIMESTAMP
            </th>
            <th className="table-dark" scope="col">
              OPEN
            </th>
            <th className="table-dark" scope="col">
              HIGH
            </th>
            <th className="table-dark" scope="col">
              LOW
            </th>
            <th className="table-dark" scope="col">
              CLOSE
            </th>
            <th className="table-dark" scope="col">
              VOLUME
            </th>
          </tr>
        </thead>
        <tbody>
          {Open.map((items) => {
            const TimeStamp = items[0];
            const StockOpen = items[1];
            const StockHigh = items[2];
            const StockLow = items[3];
            const StockClose = items[4];
            const StockVolume = items[5];
            return (
              <tr key={TimeStamp}>
                <td className="table-dark">{TimeStamp}</td>
                <td className="table-dark">{StockOpen}</td>
                <td className="table-dark">{StockHigh}</td>
                <td className="table-dark">{StockLow}</td>
                <td className="table-dark">{StockClose}</td>
                <td className="table-dark">{StockVolume}</td>
              </tr>
            );
          })}
        </tbody>
        {/* {Open.map((items) => {
          const TimeStamp = items[0];
          const StockOpen = items[1];
          const StockHigh = items[2];
          const StockLow = items[3];
          const StockClose = items[4];
          const StockVolume = items[5];
          return (
            <React.Fragment>
              <DataShow TIMESTAMP={TimeStamp} />
              <DataShow OPEN={StockOpen} />
              <DataShow HIGH={StockHigh} />
              <DataShow OPEN={StockLow} />
              <DataShow CLOSE={StockClose} />
              <DataShow VOLUME={StockVolume} />
            </React.Fragment>
          );
        })} */}
      </table>
    </React.Fragment>
  );
}

export default ApiTest;

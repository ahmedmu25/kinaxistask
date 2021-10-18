import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { DropDownStock } from '../index';
import CardContent from '@mui/material/CardContent';
import BaseMultiChart from './BaseMultiChart';

const apikey = 'XMC3IVO4UHKHIEAO';
const MultiCharts = props => {
  const [rawData, setRawData] = useState([]);

  const [stockSym, setStockSym] = useState();
  const [rawStocks, setRawStocks] = useState([]);
  const [xAxisFinal, setXAxisFinal] = useState([]);
  const [chartSeries, setChartSeries] = useState([]);

  const makingChart = apiData => {
    let tempSeries = [];
    let xAxis = [];
    apiData.map((data, i) => {
      let tempHold = {};
      tempHold.name = data.name;

      let yAxis = [];
      for (let key in data.data) {
        if (key.search('2021') !== -1) {
          xAxis.push(key);
          yAxis.push(data.data[key]['1. open']);
        }
      }
      tempSeries.push(tempHold);
      tempHold.data = yAxis;
      return data
    });

    setChartSeries(tempSeries);
    setXAxisFinal(xAxis);
  };
  const onStockChange = stocks => {
    let difference = rawStocks.filter(x => !stocks.includes(x)); // calculates diff
    if (difference.length > 0) {
      let tempClone = [...rawData];
      let filterResult = tempClone.filter(
        single => single.name !== difference[0].value
      );
      setRawData(filterResult);
    } else {
        setStockSym(stocks[stocks.length - 1]);
    }

    setRawStocks(stocks);
  };

  useEffect(() => {
    if (stockSym !== undefined && stockSym !== '') {
      let tempArr = [...rawData];
      async function fetchData() {
        try {
          const request = await axios.get(
            `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stockSym.value}&apikey=${apikey}`
          );
          let data = {
            name: request.data['Meta Data']['2. Symbol'],
            data: request.data['Monthly Time Series']
          };
          tempArr.push(data);
          setRawData(tempArr);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stockSym] );  

  useEffect(() => {
    if (rawData.length > 0) {
      makingChart(rawData);
    }
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawData]);

  return (
    <React.Fragment>
      <CardContent>
        <BaseMultiChart series={chartSeries} xaxis={xAxisFinal} />
      </CardContent>
      <DropDownStock
        onChange={optionSelected => onStockChange(optionSelected)}
      />
    </React.Fragment>
  );
};

export default MultiCharts;

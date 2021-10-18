import { React, useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import Chart from 'react-apexcharts';


const BaseChart = props => {
  const [{ data, loading, error }] = useAxios(
    "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=${apikey}"
  );

  let xTempVal = [];
  let yTempVal = [];
  let temp = [];

  const [rawData, setRawData] = useState();

  const [defaultYears, setDefaultYears] = useState("2021");
  const [xValue, setXvalue] = useState([]);
  const [yValue, setYvalue] = useState([]);

  const series = (data, year) => {
    for (let key in data['Monthly Time Series']) {
      if (key.search(year) !== -1) {
        xTempVal.push(key);
        yTempVal.push(data['Monthly Time Series'][key]['1. open']);
        let tempTemp = [];
        tempTemp.push(key);
        tempTemp.push(data['Monthly Time Series'][key]['1. open']);
        temp.push(tempTemp);
      }
      setXvalue(xTempVal);
      setYvalue(yTempVal);
    }
  };

  useEffect(() => {
    if (!loading) {
      setRawData(data);
      series(data, defaultYears);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading,defaultYears]);

  useEffect(() => {
    if (data !== undefined) {
      setDefaultYears(props.defaultYears);
      series(rawData, props.defaultYear);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const rad = {
    options: {
      chart: {
        height: 380,
        width: '100%',
        type: 'line',
        stacked: false,
      
        animations: {
          initialAnimation: {
            enabled: false
          }
        }
      },
      xaxis: {
        type: 'datetime',
        categories: xValue
      }
    },
    series: [
      {
        name: 'IBM',
        data: yValue
      }
    ]
  };

  return (
    <Chart options={rad.options} series={rad.series} type='area' width='100%' />
  );
};

export default BaseChart;

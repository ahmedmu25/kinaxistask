import { React } from 'react';

import Chart from 'react-apexcharts';

const BaseMultiChart = props => {
  const rad = {
    options: {
      chart: {
        height: 380,
        width: '100%',
        type: 'line',
        stacked: false,
        zoom: {
          autoScaleYaxis: true
        },
        animations: {
          initialAnimation: {
            enabled: false
          }
        }
      },
      xaxis: {
        type: 'datetime',
        categories: props.xaxis
      }
    },
    series: props.series
  };
  return (
    <Chart options={rad.options} series={rad.series} type='area' width='100%' />
  );
};

export default BaseMultiChart;

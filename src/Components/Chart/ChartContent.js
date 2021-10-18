import { useState } from 'react';
import React from 'react';
import BaseChart from './BaseChart';
import { DropDownYear } from '../index';
import CardContent from '@mui/material/CardContent';
const ChartContent = props => {
  const [defaultYear, setDefaultYear] = useState('2021');

  const onYearChange = years => {
    let holder = [];
    if (years.length > 0) {
      years.map((year, index) => {
        holder.push(year.value);
        return year
      });
      setDefaultYear(holder.join('|'));
    } else {
      setDefaultYear('2021');
    }
  };
  return (
    <React.Fragment>
      <CardContent>
        <BaseChart defaultYear={defaultYear} />
      </CardContent>

      <DropDownYear onChange={optionSelected => onYearChange(optionSelected)} />
    </React.Fragment>
  );
};

export default ChartContent;

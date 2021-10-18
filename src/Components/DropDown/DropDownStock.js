import { React } from 'react';
import Grid from '@mui/material/Grid';
import Select from 'react-select';
import { StockList } from '../../Confg/Const/Const';

const DropDownStock = props => {
  return (
    <Grid continer>
      <Grid item xs={12}>
        <Select
          isMulti
          onChange={e => props.onChange(e)}
          menuPlacement='top'
          style={{
            width: '30'
          }}
          options={StockList}
        />
      </Grid>
    </Grid>
  );
};

export default DropDownStock;

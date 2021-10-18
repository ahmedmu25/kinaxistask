import { React } from 'react';
import Grid from '@mui/material/Grid';
import Select from 'react-select';
import { YearOptions } from '../../Confg/Const/Const';

const DropDownYear = props => {
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
          options={YearOptions}
        />
      </Grid>
    </Grid>
  );
};

export default DropDownYear;

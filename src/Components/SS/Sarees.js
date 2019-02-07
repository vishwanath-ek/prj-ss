import React from 'react';
import { Grid } from '@material-ui/core';
import Leftpane from './../Layouts/Leftpane';
import Rightpane from './../Layouts/Rightpane';

const style = {
  paperPanes: {
    padding: 20,
    marginTop: 10,
    marginBottom:20,
  },
};

export default ({match : { url }, types}) => {
  return (
     <Grid container>
       <Grid item sm>
        <Leftpane styles={style} types={types} prefix={url}/>
       </Grid>
       <Grid item sm>
        <Rightpane styles={style}/>
       </Grid>
     </Grid>
  );
}

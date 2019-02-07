import React from 'react';
import { Paper, Grid } from '@material-ui/core';


export default (props) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={props.styles.paperPanes}>
          Right Pane
        </Paper>
      </Grid>
    </Grid>
  );
}

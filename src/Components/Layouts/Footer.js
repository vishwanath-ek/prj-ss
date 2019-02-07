import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';

const styles = {
  paperCopyright: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    marginTop: 10,
  }
};

export default props => {
  return (
    <Fragment>
    <Paper style={styles.paperCopyright}>
      <Typography align="center" gutterBottom variant="caption">
        &copy; Shree Silks 2018
      </Typography>
   </Paper>
    </Fragment>
  );
}

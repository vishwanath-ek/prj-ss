import React, { Fragment } from 'react';
import { Paper, Grid, Typography, ListItem, ListItemText, List} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default (props) => {
  //console.log(props);
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={props.styles.paperPanes}>
          { props.types.map(({id, name, material}) =>
            //<Link key={id} to="">{name} - {material}<br/></Link>
            <Fragment>
              <Typography variant="headline" style={{textTransform: "capitalize"}}>
                {material}
              </Typography>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary={name} />
                </ListItem>
              </List>
            </Fragment>
            )
          }
        </Paper>
      </Grid>
    </Grid>
  );
}

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';


//function LinkTab(props) {
//  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
//}

const Header = (props) => {
  return (
      <AppBar position="static">
      <Toolbar>
            <Typography variant="h6" color="inherit" style={{fontFamily: "'Satisfy', Lato", flex: 1}}>
              Shree Silks
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header;

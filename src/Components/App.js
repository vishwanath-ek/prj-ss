import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  { Footer, Header } from './Layouts';
import { Tabs, Tab } from '@material-ui/core';
import Home from './SS/Home';
import Sarees from './SS/Sarees';
import Contact from './SS/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.store_url="http://localhost:3010/types";
    this.state = {
      value: 0,
      types: [1, 2, 3],
    };
  }

  async componentDidMount() {
    const types = await(await fetch(this.store_url)).json();
    const newState = this.state;
    newState.types = types;
    this.setState(newState);
  }

  handleTabSelection = (event, value) => {
    //console.log("-> " + value);
    const newState = this.state;
    newState.value = value;
    this.setState(newState);
  };

  render() {
    const types  = this.state.types;
    return (
        <Router>
          <Fragment>
          <Header/>
          <Tabs indicatorColor="primary" centered value={this.state.value} onChange={this.handleTabSelection}>
            <Tab label="Home" component={Link} to="/"/>
            <Tab label="Sarees" component={Link} to="/sarees"/>
            <Tab label="Contact us" component={Link} to="/contact-us" />
          </Tabs>
          <Footer/>
          <Route path="/" exact component={Home} />
          <Route path="/sarees" exact render={
              props => <Sarees {...props} types={types}/>
            }
          />
          <Route path="/contact-us" exact component={Contact} />
          </Fragment>
        </Router>
    );
  }
}

export default App;

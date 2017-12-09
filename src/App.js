import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Landing from './views/landing/landing';
import Main from './views/main/main';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.checkCookie = this.checkCookie.bind(this);
    this.setVisited = this.setVisited.bind(this);

    this.state = {
      visited: this.checkCookie()
    }
  }

  checkCookie() {
    const cookies = new Cookies();
    const ret = cookies.get('visited');
    //return (ret === 'true');
  }

  setVisited(value=true) {
    this.setState({
      visited: value
    });
  }

  render() {
    return (
      <div className="app" ref='app'>
        { this.state.visited ? <Main /> : <Landing setVisited={this.setVisited} /> }
      </div>
    );
  }
}

export default App;

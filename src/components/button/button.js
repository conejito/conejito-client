import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './button.css';

/**
 * Simple button component
 */
class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const cookies = new Cookies();
    cookies.set('visited', 'true', { path: '/' });
    this.props.setVisited(true);
  }

  render() {
    return (
      <button className='cta' onClick={this.handleClick}>
        Przejdź do aplikacji
      </button>
    );
  }
}

export default Button;

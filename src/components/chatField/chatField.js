import React, { Component } from 'react';
import './chatField.css';
// import mic from './mic.svg';

class ChatField extends Component {
  handleKeyPress = (event) => {
    if (event.key === 'Enter' && this.refs.input.value) {
      this.props.onSubmit( this.refs.input.value );
      this.refs.input.blur();
    }
  }

  handleFocus = () => {
    this.refs.input.select();
  }

  render() {
    return (
      <div className='chat-field'>
        <div className='input-wrapper'>
          <input className='input'
                 placeholder="Masz jakieś pytanie?"
                 type="text"
                 name="question"
                 onKeyPress={this.handleKeyPress}
                 onFocus={this.handleFocus}
                 ref='input' />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default ChatField;

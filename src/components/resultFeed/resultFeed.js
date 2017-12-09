import React, { Component } from 'react';
import './resultFeed.css';
import Result from '../../components/result/result';

class ResultFeed extends Component {
  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        this.scrollTo(element, to, duration - 10);
    }, 10);
  }

  componentDidUpdate() {
    this.refs.feed.style.height = (window.innerHeight - 185) + "px";
    this.scrollTo(this.refs.feed, 0, 500);
  }

  render () {
    return (
      <div className='result-feed' ref='feed'>
        {
          this.props.results.map((elem, i) => (
            <div key={i}>
              <Result info={elem} />
            </div>
          ))
        }
      </div>
    );
  }
}

export default ResultFeed;

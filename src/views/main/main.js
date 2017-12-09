import React, {Component} from 'react';
import './main.css';
import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';
import ChatField from '../../components/chatField/chatField';
import LoadingOverlay from '../../components/loadingOverlay/loadingOverlay';
import Footer from '../../components/footer/footer';
import ResultFeed from '../../components/resultFeed/resultFeed';

class Main extends Component {
  constructor(props) {
    super(props);
    this.setSearching = this.setSearching.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
    this.getData = this.getData.bind(this);
    this.handleNewData = this.handleNewData.bind(this);

    this.state = {
      searching: false,
      question: '',
      results: []
    };
  }

  setSearching(value = true) {
    this.setState({
      searching: value
    });
  }

  setQuestion(value) {
    this.setState({
      question: value
    });
  }

  getData() {
    /*
     Tu się trzeba wjebać i przetworzyć do takiej formy
     Dodatkowo ważna jest dla mnie kolejność - najpierw answer, potem result
     */
    //const data = {json: };

    //console.log(data);

    const $this = this;
    fetch('https://conejito.pl/message', {
      method: 'POST',
      body: JSON.stringify({
        id: 1,
        text: this.state.question
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        $this.handleNewData(result);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }

  handleNewData(data) {
    let next = {};

    if (data.result.place !== undefined) {
      const place = data.result.place;
      next = {
        type: 'result',
        data: {
          name: place.name,
          rating: place.rating,
          address: place.vicinity,
          location: {
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng
          }
        }
      };
    } else {
      next = {
        type: 'answer',
        data: {
          response: data.result.fulfillment.speech
        }
      };
    }

    const resultsCombined = [next, ...this.state.results];
    this.setState({
      results: resultsCombined
    });
  }

  render() {
    return (
      <div className='main'>
        {
          this.state.searching ?
            <div>
              <LoadingOverlay />
              <Logo variant='small'/>
              <ChatField question={this.state.question}
                         setSearching={this.setSearching}
                         setQuestion={this.setQuestion}
                         getData={this.getData}/>
              <ResultFeed results={this.state.results} />
            </div>
            :
            <div>
              <Conejito />
              <Logo variant='big'/>
              <ChatField question=''
                         setSearching={this.setSearching}
                         setQuestion={this.setQuestion}
                         getData={this.getData}/>
              <Footer />
            </div>
        }
      </div>
    );
  }
}

export default Main;

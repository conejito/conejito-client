import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../../actions'

import './chat.css'

import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';
import ChatField from '../../components/chatField/chatField';
import LoadingOverlay from '../../components/loadingOverlay/loadingOverlay';
import Footer from '../../components/footer/footer';
import ResultFeed from '../../components/resultFeed/resultFeed';

class Chat extends React.Component {
  render() {
    return (
      <div>
        { this.props.loading && <LoadingOverlay />}
        <Conejito />
        <Logo variant='big'/>
        <ChatField  question=''
                    onSubmit={this.props.onSubmit}
                    setSearching={this.setSearching}
                    setQuestion={this.setQuestion}
                    getData={this.getData}/>
        <ResultFeed results={this.props.messages} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    loading: state.chat.loading,
    messages: state.chat.messages
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (data) => {
      dispatch(sendMessage({q: data}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
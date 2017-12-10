import {
  MESSAGE_FULFILLED, MESSAGE_PENDING, MESSAGE_REJECTED
} from '../actions'

function chatReducer(state = { loading: false, messages: [] }, action) {
  switch (action.type) {
    case MESSAGE_PENDING:
      return {...state, loading: true}
    case MESSAGE_FULFILLED:
      return {...state, loading: false, messages: [...state.messages, { ...action.payload }]}
    case MESSAGE_REJECTED:
      return {...state, loading: false}
    default:
      return state
  }
}

export default chatReducer
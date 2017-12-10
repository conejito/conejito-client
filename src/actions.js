const MESSAGE = 'MESSAGE'
export const MESSAGE_PENDING = MESSAGE + '_PENDING'
export const MESSAGE_FULFILLED = MESSAGE + '_FULFILLED'
export const MESSAGE_REJECTED = MESSAGE + '_REJECTED'

function post(url, data) {
  return fetch(url, { 
    method: 'post', 
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export function sendMessage(data) {
  return { type: MESSAGE, payload: post('http://localhost:8080/message', data).then( data => data.json() ) }
}
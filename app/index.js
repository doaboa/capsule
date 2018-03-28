import createAtom from 'tiny-atom'
import createRouter from 'space-router'
import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import routes from './routes'
import createReducer from './state/reducer'
import Provider from './components/Provider'
import Wrapper from './components/Wrapper'
import initialState from './state/initialState'

const router = createRouter(routes)
const reducer = createReducer({ router })

const atom = createAtom(loadState(), reducer, function render ({get, split}) {
  console.log('state update', get())
  const { View } = get().route
  window.localStorage.setItem('atom', JSON.stringify(get()))
  ReactDOM.render(
    <Provider atom={get()} split={split} router={router}>
      <Wrapper>
        <View />
      </Wrapper>
    </Provider>,
    document.getElementById('root')
  )
})

router.start((route, data) => {
  atom.split('navigated', { route, data })
})

window.atom = atom
window.router = router
window.reducer = reducer

function loadState () {
  const stateString = window.localStorage.getItem('atom')
  const lastState = stateString ? JSON.parse(stateString) : {}
  return Object.assign({}, initialState, lastState)
}

if (module.hot) {
  module.hot.accept()
}

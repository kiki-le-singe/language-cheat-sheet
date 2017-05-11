import { createStore } from 'redux'

import rootReducer from '../reducers'

export default (preloadedState = {}) => createStore(rootReducer, preloadedState)

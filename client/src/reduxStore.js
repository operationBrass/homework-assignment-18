//Creating redux store and passing reducer.

import { createStore } from 'redux'
import { reducer } from './utils/reducers'

export const reduxStore = createStore(reducer); // export store



import { createStore, combineReducers } from 'redux'
import main from 'src/reducers'

const reducers = combineReducers({
  main
})

const store = createStore(reducers)

export default store
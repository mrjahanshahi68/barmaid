import counterReducer from './counter'
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
// export interface ApplicationState {
//     counter: Counter.CounterState;
// }



const rootReducer = (history) => combineReducers({
    counter:counterReducer,
    router: connectRouter(history)
  })
  

export default rootReducer


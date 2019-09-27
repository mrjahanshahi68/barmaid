import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './Store/index'
import { routerMiddleware } from 'connected-react-router'
//import thunkMiddleware from 'redux-thunk'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
 

export default function configureStore(history) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)

    const composeEnhancer = compose;
  const store = createStore(rootReducer(history))

  return store
}


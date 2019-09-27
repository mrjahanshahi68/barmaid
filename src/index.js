import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'
import * as RoutesModule from './routes';
import App from './Components/App'
import rootReducer from './Store/index'

let routes = RoutesModule.routes;
const MOUNT_NODE = document.getElementById("app");
const history = createBrowserHistory({basename:'./'})

const store=configureStore(history)

const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App history={history} />
        </Provider>
      </AppContainer>,
      MOUNT_NODE
    )
  }
  
  render()

//   if (module.hot) {
//     // Reload components
//     module.hot.accept('./Components/App', () => {
//       render()
//     })
  
//     // Reload reducers
//     module.hot.accept('./Store/index', () => {
//       store.replaceReducer(rootReducer(history))
//     })
//   }
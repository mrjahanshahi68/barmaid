import * as React from "react";
// import { Route, BrowserRouter as Router } from "react-router-dom";
import NavbarMenu from './NavbarMenu'
import { ConnectedRouter } from 'connected-react-router'
// import { ConnectedRouter } from 'react-router-redux';
import {routes} from '../routes'
const App = ({ history }) => {
    debugger;
    return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    )
  }

export default App
// export default class App extends React.Component<{}, {}>{

//     render() {
//         return (
//             <div>
//                 <NavbarMenu />

//                 <div className="main-content">
//                     {this.props.children}
//                 </div>
//             </div >

//         );
//     }
// }
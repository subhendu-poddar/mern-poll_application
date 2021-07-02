import React , {Component, Fragment} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {store} from '../store'
import { setCurrentUser,addError, setToken } from '../store/actions'
import decode from 'jwt-decode'
import Auth from '../components/auth'
import ErrorMessage from '../components/errorMessages'
import RouteViews from './RouteViews'
import NavBar from './NavBar'
import api from '../services/api'


if(localStorage.jwtToken){
  setToken(localStorage.jwtToken)
  try{
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)))
  }catch(err) {
    store.dispatch(setCurrentUser({}))
    store.dispatch(addError(err))
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        {/* <Auth authType={'login'} /> */}
        <ErrorMessage />
        <RouteViews />
      </Fragment>
    </Router>
  </Provider>
)

// class App extends Component {
//   async componentDidMount() {
//     const result = await api.call('post', 'auth/login', {
//       username: 'user',
//       password: 'password'
//     })
//     console.log(result)
//   }
//   render() {
//     return <div> App Works</div>
//   }
// }

export default App
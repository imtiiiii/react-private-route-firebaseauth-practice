import logo from './logo.svg';
import './App.css';
import initFirebaseConfig from './Firebase/Firebase.init';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Components/Contexts/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  initFirebaseConfig();
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* nav menu */}
          {/* nav menu will be fixed in every page */}
          <Header></Header>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

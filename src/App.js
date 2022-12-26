import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home'
import AllCountries from './Components/AllCountries'
import MyRecords from './Components/MyRecords'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  
render() {
  return (
    <Router>
      <Routes>
        <Route 
          exact path="/"
          element={<Home/>}
        >
        </Route>
        <Route 
          exact path="/allcountries"
          element={<AllCountries/>}
        >
        </Route>
        <Route 
          exact path="/myrecords"
          element={<MyRecords/>}
        >
        </Route>    
      </Routes>
  </Router>
  );
}
}

export default App;

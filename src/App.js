import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/search/search';
class App extends Component {
  render() {
    return (
       
    <MuiThemeProvider>
      <div>
        <Search />
      </div>
    </MuiThemeProvider>
      
   
    )
    
  }
}

export default App;

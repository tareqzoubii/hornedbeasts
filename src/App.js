import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      modelTheBeast : ''
    }
  }

  cardHandler = () => {
    alert('welcome')
  }

  render(){
    return(
      <div>
        <Header/>
        <Main data = {data} handel={this.cardHandler}/>       
        <Footer/>
        <SelectedBeast/>
      </div>
    )
  };
}

export default App;

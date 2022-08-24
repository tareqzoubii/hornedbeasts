import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
constructor (props){
  super(props)
  this.state = {
    ModelCards : ''
  }

  cardClickingHandler = () => {
    alert("welcome here")
  }
}

  render(){
    return(
      <div>
        <Header/>
        <Main data={data} handle={this.cardClickingHandler}/>       
        <Footer/>
      </div>
    )
  };
}

export default App;

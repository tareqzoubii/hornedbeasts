import React from 'react';
import HornedBeast from './HornedBeast';
import BlackHorse from './imgs/BlackHorse.jpg'
import pony from './imgs/pony.jpg';
class Main extends React.PureComponent {
    render(){
      return(
          <div>
              <HornedBeast name="BlackHorse" imgURL={BlackHorse} describtion="BlackHorse is a black horse with a horn"/>
              <HornedBeast name="pony" imgURL={pony} describtion="pony is a white horse" /> 
          </div>
      )
    }
  }
  export default Main;
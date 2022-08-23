import React from 'react';
import HornedBeast from './HornedBeast';
// import BlackHorse from './imgs/BlackHorse.jpg'
// import pony from './imgs/pony.jpg';
import data from './data.json';


// let allCards = Data.map(val => {
//   <HornedBeast key= {val._id} title={val.title} img={val.image_url} description={val.description}/>
// })

class Main extends React.Component {
  render(){
      return(
          // <div>
          //   <HornedBeast name="BlackHorse" imgURL={BlackHorse} describtion="BlackHorse is a black horse with a horn"/>
          //   <HornedBeast name="pony" imgURL={pony} describtion="pony is a white horse" />  */}
          // </div>
          // allCards
          <div>
            {data.map((val) => {
              return <div>
                <HornedBeast 
                id={val.id} 
                imgURL={val.image_url}
                title={val.title}
                description={val.description}
                keyword={val.keyword} 
                horns={val.horns} />
              </div>
            })}
          </div>
      )
    }
  }
  export default Main;
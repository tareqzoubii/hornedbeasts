import React from 'react';
import HornedBeast from './HornedBeast';
// import BlackHorse from './imgs/BlackHorse.jpg'
// import pony from './imgs/pony.jpg';
import data from './data.json';
import Row from 'react-bootstrap/Row';


// let allCards = Data.map(val => {
//   <HornedBeast key= {val._id} title={val.title} img={val.image_url} description={val.description}/>
// })

class Main extends React.Component {
  render(){
      return(
        <Row xs={2} md={4} className="g-4">    
            {data.map((val) => {
              return (
                <HornedBeast 
                id={val.id} 
                imgURL={val.image_url}
                title={val.title}
                description={val.description}
                keyword={val.keyword} 
                horns={val.horns} />
      )
              })}</Row>)}}
  export default Main;
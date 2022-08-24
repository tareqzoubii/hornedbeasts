import React from 'react';
//import HornedBeast from './HornedBeast';
// import BlackHorse from './imgs/BlackHorse.jpg'
// import pony from './imgs/pony.jpg';
// import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// let allCards = Data.map(val => {
//   <HornedBeast key= {val._id} title={val.title} img={val.image_url} description={val.description}/>
// })

class Main extends React.Component {
  // render(){
  //     return(
  //       <Row xs={2} md={4} className="g-4">    
  //           {this.props.data.map((val) => {
  //             return (
  //               <HornedBeast 
  //               id={val.id} 
  //               imgURL={val.image_url}
  //               title={val.title}
  //               description={val.description}
  //               keyword={val.keyword} 
  //               horns={val.horns} />
  //     )
  //             })}</Row>)}}
  
  constructor(props){
  super(props)
  this.state = {
  votes : 0
   };
};

}

voteByPressing = () => {
this.setState({
votes : this.state.votes + 1
  });
  
  };

render(){    
    return (
       <div>
         
<Row xs={1} md={3} className="g-4">

{this.props.Data.map((i) => {
return (
<Col>
<Card>
<Card.Img variant="top" src={this.props.imgURL} title={this.props.name} onClick={this.voteByPressing} />
<Card.Body>
<Card.Title>{this.props.title}</Card.Title>
<Card.Text>
<li>Keyword: {this.props.keyword}</li>
<li>Horns: {this.props.horns}</li>
<li>description: {this.props.description}</li>
🐙 Votes : {this.state.votes} 🐙
</Card.Text>
</Card.Body>
</Card>
</Col>
)
         
   
})}
</Row>
          
</div>

    );
}


  export default Main;
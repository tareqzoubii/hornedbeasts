import React from 'react';
// import HornedBeast from './HornedBeast';
// import BlackHorse from './imgs/BlackHorse.jpg'
// import pony from './imgs/pony.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import data from './data.json';


// let allCards = Data.map(val => {
//   <HornedBeast key= {val._id} title={val.title} img={val.image_url} description={val.description}/>
// })

class Main extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          votes : 0
      };
  }
  voteByPressing = () => {
      this.setState({
          votes : this.state.votes + 1
      });
    }

  render(){
      return(
        <div>
           <Row xs={2} md={4} className="g-4">
              {this.props.data.map((val) => {
              return (
                <Col>
                <card onClick={this.props.handle}>
                <Card.Img variant="top" src={val.image_url} onClick={this.voteByPressing} />
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>
                    <li>Keyword: {val.keyword}</li>
                    <li>Horns: {val.horns}</li>
                    <li>description:{val.description}</li>
                    <p>Vote here: {this.state.votes}</p>
                  </Card.Text>
                </Card.Body>
                </card>
                </Col>
              )
              })
            }
            </Row>
            </div>
      )};
          };
  export default Main;

import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showCard : false
    };
  }

  render() {
    return(
      <Row xs={1} md={4} className="g-4">
        {this.props.data.map((val) =>{
          return(
            <HornedBeast
            title={val.title}
            keyWord={val.keyword}
            id={val._id}
            description={val.description}
            horns={val.horns} 
            image={val.image_url}
            showing={this.props.showing}/>
          )
        })}
    </Row>
    )
  }
}
export default Main;
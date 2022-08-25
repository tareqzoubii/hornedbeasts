import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }
  voteByPressing = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };
  render() {
    return (
      <Col>
        <Card onClick={() => {this.props.showing(this.props.id)}}>
          <Card.Img
            variant="top"
            src={this.props.image}
            title={this.props.title}
            onClick={this.voteByPressing}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <li>Horns: {this.props.horns}</li>
              <li>description: {this.props.description}</li>
              🐙 Votes : {this.state.votes} 🐙
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;

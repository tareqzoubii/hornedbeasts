import React from "react";
class HornedBeast extends React.Component {
    render(){
        return(
        <div>
        <h2>{this.props.name}</h2>
        <img title={this.props.name} src={this.props.imgURL} alt=""></img>
        <p> {this.props.describtion} </p>
        </div>
    )}
}
export default HornedBeast;
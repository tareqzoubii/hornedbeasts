import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
        return(
            <Modal show={this.props.showCard} onHide={()=>{ this.props.closing()}} >
                <Modal.Header  >
                    
                    <Modal.Title>{this.props.datas.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.datas.image_url} alt="img"></img>
                    <p>{this.props.datas.description}</p>
                    <p>Horns {this.props.datas.horns}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{ this.props.closing()}} >
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        )
    }
}
export default SelectedBeast;
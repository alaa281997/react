import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HornedBeast from './HornedBeast';
import data from './data.json';
class SelectedBeast extends React.Component {
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.props.handleShow}>
                    Launch demo modal
      </Button>

      
      <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>  {this.props.myarr.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> {this.props.myarr.description}  </Modal.Body>
                    <Card.Img style={{ width: '300px' }} variant="top" src={this.props.myarr.image_url} />
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default SelectedBeast;
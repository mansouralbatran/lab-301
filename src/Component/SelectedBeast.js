import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import show from 'react-bootstrap/show';
class SelectedBeast  extends React.Component {

  close =() =>{
this.props.close();
 }
 
 render() {
   console.log(this.props.elem);
        return(<>
          <Modal show={this.props.show}onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.elem.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body   >
          <Card.Img  src={this.props.elem.image_url} alt="" />
            
            {this.props.elem.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"  onClick={this.close}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>









      


        </>

        );
    };
};

export default SelectedBeast;

  
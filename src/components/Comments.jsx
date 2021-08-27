import React from 'react'
import {Modal, Button} from 'react-bootstrap'

class Comments extends React.Component {
    state = {
        show: true
    }
    hideCom(){
        this.setState({show: false})
    }
    render(){
        console.log(this.state.show)
        return(
            <Modal show={this.state.show}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideCom}>
                Close
              </Button>
              <Button variant="primary" onClick={this.hideCom}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default Comments
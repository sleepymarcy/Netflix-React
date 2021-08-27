import React from 'react'
import {Modal, Button} from 'react-bootstrap'

class Comments extends React.Component {
    state = {
        showIt: true
    }
    hideCom(){
        this.setState({showIt: false})
    }
    render(){
        console.log(this.state.showIt)
        return(
            <Modal show={this.state.showIt}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>{this.setState({showIt: false})}}>
                Close
              </Button>
              <Button variant="primary" onClick={()=> this.hideCom}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default Comments
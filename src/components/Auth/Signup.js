import React, { Component } from 'react';
import { Button, Form, Modal} from 'semantic-ui-react'
import './Auth.css';

class Signup extends Component {

  render() {
    return (
      <Modal className='auth' size='small' trigger={<Button color='olive'>Sign up</Button>}>
        <Modal.Header className='auth__header'>Sign up</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' placeholder='Password' />
            </Form.Field>
            <Button color='olive' type='submit'>Sign up</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Signup;



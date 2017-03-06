import React, { Component } from 'react';
import { Button, Menu, Form, Modal} from 'semantic-ui-react'
import './Auth.css';

class Login extends Component {

  render() {
    return (
      <Modal
        className='auth'
        size='small'
        trigger={<Menu.Item position='right' name='Login' />}
      >
        <Modal.Header className='auth__header'>Login</Modal.Header>
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
            <Button color='olive' type='submit'>Login</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default Login;



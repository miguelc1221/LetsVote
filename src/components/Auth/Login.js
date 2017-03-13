import React, { Component, PropTypes } from "react";
import { Button, Menu, Form, Modal, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import * as authActions from "../../actions/auth";
import "./Auth.css";

class Login extends Component {
  static propTypes = {
    error: PropTypes.object,
    isFetching: PropTypes.bool
  };

  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      modalOpen: false,
      tokenExpired: ""
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.tokenExpired) {
      return this.setState({
        modalOpen: true,
        tokenExpired: "Please Log in to continue"
      });
    }
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state);
  }

  handleOnOpen() {
    this.setState({ modalOpen: true });
  }

  handleOnClose() {
    this.props.clearErrors();
    this.setState({ modalOpen: false });
  }

  render() {
    const { email, password, tokenExpired } = this.state;
    const { loginError, isFetching } = this.props.auth;
    return (
      <Modal
        className="auth"
        size="small"
        trigger={
          <Menu.Item
            position="right"
            name="Login"
            onClick={this.handleOnOpen}
          />
        }
        open={this.state.modalOpen}
        onClose={this.handleOnClose}
      >
        <Modal.Header className="auth__header">
          {tokenExpired ? tokenExpired : "Login"}
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleOnSubmit} error={!!loginError}>
            <Form.Field>
              <label>Email</label>
              <input
                placeholder="Email"
                name="email"
                onChange={this.handleOnChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleOnChange}
              />
              <Message
                error
                hidden={!loginError.Error}
                content={loginError.Error ? loginError.Error : ""}
              />
            </Form.Field>
            <Button
              color="olive"
              type="submit"
              disabled={!email || !password}
              loading={isFetching}
            >
              Login
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, authActions)(Login);

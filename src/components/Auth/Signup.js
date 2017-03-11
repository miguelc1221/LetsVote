import React, { Component, PropTypes } from "react";
import { Button, Form, Modal, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import * as authActions from "../../actions/auth";
import "./Auth.css";

class Signup extends Component {
  static propTypes = {
    signUpError: PropTypes.object,
    isFetching: PropTypes.bool
  };

  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmError: "",
      modalOpen: false
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnSubmit(e) {
    const { email, password, confirmPassword } = this.state;
    e.preventDefault();

    if (confirmPassword === password) {
      this.setState({ confirmError: "" });
      return this.props.signupUser({ email, password });
    }

    this.setState({
      confirmError: "Password and confirmPassword do not match."
    });
    return null;
  }

  handleOnOpen() {
    this.setState({ modalOpen: true });
  }

  handleOnClose() {
    this.props.clearErrors();
    this.setState({ modalOpen: false, confirmError: "" });
  }

  render() {
    const { email, password, confirmPassword, confirmError } = this.state;
    const { signUpError, isFetching } = this.props.auth;

    return (
      <Modal
        className="auth"
        size="small"
        trigger={
          <Button color="olive" onClick={this.handleOnOpen}>Sign up</Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleOnClose}
      >
        <Modal.Header className="auth__header">Sign up</Modal.Header>
        <Modal.Content>
          <Form
            onSubmit={this.handleOnSubmit}
            error={
              !!signUpError.email || !!signUpError.password || !!confirmError
            }
          >
            <Form.Field>
              <label>Email</label>
              <input
                name="email"
                placeholder="Email"
                onChange={this.handleOnChange}
              />
              <Message
                error
                hidden={!signUpError.email}
                content={signUpError.email ? signUpError.email.message : ""}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleOnChange}
              />
              <Message
                error
                hidden={!signUpError.password}
                content={
                  signUpError.password ? signUpError.password.message : ""
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Comfirm Password"
                onChange={this.handleOnChange}
              />
              <Message
                error
                hidden={!confirmError}
                content="Password and Confirm Password do not match."
              />
            </Form.Field>
            <Button
              color="olive"
              type="submit"
              loading={isFetching}
              disabled={!email || !password || !confirmPassword}
            >
              Sign up
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

export default connect(mapStateToProps, authActions)(Signup);

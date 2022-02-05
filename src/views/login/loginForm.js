import React, { Component } from "react";
import { Button,Col,Form,Modal,Row,Tabs,Tab } from "react-bootstrap";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    login: { userID: "", password: "" },
    register: {
      userName: "",
      email: "",
      phoneNo: "",
      password: "",
      cnfPassword: "",
    },
    errors: {},
  };
  componentDidMount() {}

  componentDidUpdate(prevProps) {}

  loginTextChange = (event) => {
    let { login } = this.state;
    login[event.target.name] = event.target.value;
    this.setState({ login: login });
  };
  registerTextChange = (event) => {
    let { register } = this.state;
    register[event.target.name] = event.target.value;
    this.setState({ register: register });
  };

  render() {
    let { login, errors, register } = this.state;

    return (
      <>
        <Modal
          show={this.props.show}
          onHide={() => this.props.onClose()}
          backdrop="static"
          keyboard={true}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              <Row className="p-3">
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="text"
                    value={login.userID}
                    placeholder="Email or Phone"
                    name="userID"
                    onChange={(event) => this.loginTextChange(event)}
                    required
                    isInvalid={errors.userID}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid User Name.
                  </Form.Control.Feedback>
                </Col>
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="password"
                    value={login.password}
                    placeholder="Password"
                    name="password"
                    onChange={(event) => this.loginTextChange(event)}
                    required
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row className="m-0 cta">
                <Col xs={4} sm={6} className="p-0">
                  <Button
                    variant="danger"
                    block
                    onClick={() => this.props.onClose()}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col xs={4} sm={6} className="p-0">
                  <Button
                    variant="primary"
                    block
                    onClick={() => this.props.onClose()}
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="register" title="Register">
              <Row className="p-3">
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="text"
                    value={register.userName}
                    placeholder="Name"
                    name="userName"
                    onChange={(event) => this.registerTextChange(event)}
                    required
                    isInvalid={errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid User Name.
                  </Form.Control.Feedback>
                </Col>
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="email"
                    value={register.email}
                    placeholder="Email"
                    name="email"
                    onChange={(event) => this.registerTextChange(event)}
                    required
                    isInvalid={errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid User Name.
                  </Form.Control.Feedback>
                </Col>
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="tel"
                    value={register.phoneNo}
                    placeholder="Phone"
                    name="phone"
                    onChange={(event) => this.registerTextChange(event)}
                    required
                    isInvalid={errors.phoneNo}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid User Name.
                  </Form.Control.Feedback>
                </Col>
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="password"
                    value={register.password}
                    placeholder="Password"
                    name="password"
                    onChange={(event) => this.registerTextChange(event)}
                    required
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Col>
                <Col md={12} className="pb-4">
                  <Form.Control
                    autoComplete={false}
                    type="cnfPassword"
                    value={register.cnfPassword}
                    placeholder="Confirm Password"
                    name="cnfPassword"
                    onChange={(event) => this.registerTextChange(event)}
                    required
                    isInvalid={errors.cnfPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Password.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row className="m-0 cta">
                <Col xs={4} sm={6} className="p-0">
                  <Button
                    variant="danger"
                    block
                    onClick={() => this.props.onClose()}
                  >
                    Cancel
                  </Button>
                </Col>
                <Col xs={4} sm={6} className="p-0">
                  <Button
                    variant="primary"
                    block
                    onClick={() => this.props.onClose()}
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default React.memo(connectedLogin);

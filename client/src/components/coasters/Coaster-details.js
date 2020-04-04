import React, { Component } from "react";
import Service from "../../service/Coaster.service";
import AuthService from "../../service/Auth.service";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CoasterForm from "./Coaster-form-edit";

class CoasterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coaster: {},
      showModalWindow: false,
      loggedInUser: null,
    };
    this._service = new Service();
    this._authService = new AuthService();
  }

  componentDidMount = () => {
    const coasterId = this.props.match.params.id;
    this._service
      .getOneCoaster(coasterId)
      .then((theCoaster) => this.setState({ coaster: theCoaster.data }))
      .catch((err) => console.log(err));
  };

  handleShow = () => this.setState({ showModalWindow: true });
  handleClose = () => this.setState({ showModalWindow: false });

  updateCoaster = () => {
    const coasterId = this.props.match.params.id;
    this._service
      .getOneCoaster(coasterId)
      .then((theCoaster) => this.setState({ coaster: theCoaster.data }))
      .catch((err) => console.log("Error", err));
  };

  deleteCoaster = () => {
    const coasterId = this.props.match.params.id;
    //;
    this._service
      .deleteCoaster(coasterId)
      .then(() => this.props.history.push("/coasters"))
      .catch((err) => console.log("Error", err));
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._authService
        .loggedin()
        .then((theLoggedInUserFromTheServer) =>
          this.setState({ loggedInUser: theLoggedInUserFromTheServer.data })
        )
        .catch((err) => {
          this.setState({ loggedInUser: false });
          console.log({ err });
        });
    }
  };

  render() {
    this.fetchUser();
    return (
      <Container className="coaster-details">
        <h1>{this.state.coaster.title}</h1>
        <hr />
        <section>
          <Row>
            <Col md={6}>
              <h2>Detalles</h2>
              <p>
                <strong>Descripción:</strong> {this.state.coaster.description}
              </p>
              <hr></hr>
              <p>
                <small>Longitud:</small> {this.state.coaster.length} |
                Inversiones: {this.state.coaster.inversions}
              </p>
              <Link to="/coasters" className="btn btn-dark">
                Volver
              </Link>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <img
                src={this.state.coaster.imageUrl}
                alt={this.state.coaster.title}
              ></img>
              <hr />
              <div className="btnFlex">
                {this.state.loggedInUser && (
                  <Button variant="dark" onClick={this.handleShow}>
                    Editar
                  </Button>
                )}
                {this.state.loggedInUser && (
                  <Button variant="dark" onClick={this.deleteCoaster}>
                    Eliminar
                  </Button>
                )}
              </div>
            </Col>
          </Row>
          <Modal show={this.state.showModalWindow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar montaña rusa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CoasterForm
                closeModalWindow={this.handleClose}
                updateCoaster={this.updateCoaster}
                coaster={this.state.coaster}
              />
            </Modal.Body>
          </Modal>
        </section>
      </Container>
    );
  }
}

export default CoasterDetail;

import React from 'react'
import { Container } from "react-bootstrap";

const Profile = props => {

    return (
      <Container>
        <h1>Bienvenido {props.loggedInUser.username}</h1>
        <hr />
      </Container>
    )
}

export default Profile
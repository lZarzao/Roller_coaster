import React from 'react'
import { Container } from 'react-bootstrap'

const Index = () => {
    return (
      <Container>
        <h1>Coaster App!</h1>
        <hr />
        <p>Diversión con React</p>
        <img className="fpimg" src="https://res.cloudinary.com/dwnz2epom/image/upload/v1586031816/coasters/rollerCoaster_wklhqv.jpg" alt="RollerCoaster"></img>
      </Container>
    );
}

export default Index
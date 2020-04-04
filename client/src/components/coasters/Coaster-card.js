import React from 'react'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

class CoasterCard extends React.Component{
    constructor(props){
        super(props)
    }

    render (){
        return (
            <Col className="coaster-card" md={4}>
                <img src={this.props.coaster.imageUrl} alt={this.props.coaster.title} />
                <h3>{this.props.coaster.title}</h3>
                <p>{this.props.coaster.description}</p>
                <small>Inversiones: {this.props.coaster.inversions} | Longitud: {this.props.coaster.length}</small>
                <br></br>
                <Link className="btn btn-sm btn-dark" to={`/coasters/${this.props.coaster._id}`}>Ver detalles</Link>
            </Col >
        )
    }
}

export default CoasterCard
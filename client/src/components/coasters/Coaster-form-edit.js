import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

import CoastersService from '../../service/Coaster.service'

class CoasterForm extends Component {

    constructor(props) {
        super(props)
        this._coastersService = new CoastersService()
        this.state = {
          disabledButton: false,
          buttonText: "Guardar",
          coaster: {
            title: this.props.coaster.title,
            description: this.props.coaster.description,
            inversions: this.props.coaster.inversions,
            length: this.props.coaster.length,
            imageUrl: this.props.coaster.imageUrl,
          },
        };
    }

    handleSubmit = e => {
        e.preventDefault()
        this._coastersService.putCoaster(this.props.coaster._id, this.state.coaster)
            .then(x => {
                this.props.closeModalWindow()
                this.props.updateCoaster();
            })
            .catch(err => console.log(err))
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({
            coaster: { ...this.state.coaster, [name]: value }
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="title" onChange={this.handleInputChange} value={this.state.coaster.title} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.coaster.description} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="number" name="length" onChange={this.handleInputChange} value={this.state.coaster.length} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="number" name="inversions" onChange={this.handleInputChange} value={this.state.coaster.inversions} />
                </Form.Group>
                <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>{this.state.buttonText}</Button>
            </Form>
        )
    }
}

export default CoasterForm
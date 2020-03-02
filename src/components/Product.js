import React from 'react'
import{Col} from 'react-bootstrap'

class Product extends React.Component {

    render() {
        return(
            <Col sm="4" className="border border-info" style={{margin : 0}}>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} width="100%"/>
                <p style={{padding : 5}}>{this.props.description}</p>
                <p className="btn-info"><b> Precio : {this.props.price}€ </b></p>
                <p>Ref: {this.props.reference} </p>
            </Col>
        )
    }
}

export default Product
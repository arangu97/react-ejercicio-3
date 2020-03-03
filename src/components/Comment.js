import React from 'react';
import {Row, Col, } from 'react-bootstrap';

import './Comment.css'

class Comment extends React.Component {

    render() {
        return(
            <article className="Comment">
                <Row>
                    <Col>
                        <h1>{this.props.title}</h1>
                    </Col>
                    <Col>
                        <button type="button" className="float-right btn btn-danger" onClick={this.props.clicked}>
                            DELETE
                        </button>
                    </Col>
                </Row>
                <Row>
                    <div className="Author"><h4>{this.props.author}</h4></div>
                </Row>
                <Row>
                    <p className="Body">{this.props.commentText}</p>
                </Row>
            </article>
        )
    }
}

export default Comment;
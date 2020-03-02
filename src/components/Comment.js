import React from 'react';
import {Row} from 'react-bootstrap';

import './Comment.css'

class Comment extends React.Component {

    render() {
        return(
            <article className="Comment" onClick={this.props.clicked} style={{border: 2, borderColor: '#000000'}}>
                <Row>
                    <h1>{this.props.title}</h1>
                </Row>
                <Row>
                    <div className="Author">{this.props.author}</div>
                </Row>
                <Row>
                    <p>{this.props.commentText}</p>
                </Row>
            </article>
        )
    }
}

export default Comment;
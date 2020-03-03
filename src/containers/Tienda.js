import React from 'react';
// import axios from 'axios';
import axios from '../axios';
import {Row, Container} from 'react-bootstrap'

import Product from '../components/Product';
import Comment from '../components/Comment';
import NewComment from '../components/NewComment';

class Tienda extends React.Component {
    state = {
        products: [],
        comments: [],
        error: false,
        lastIndex: 0
    }

    componentDidMount() {
        //axios.get('https://firestore.googleapis.com/v1/projects/my-demoblog/databases/(default)/documents/posts/')
        axios.get('/comments.json')
            .then(response => {
                let comments = [];
                for (let key in response.data) {
                    comments.push({
                        ...response.data[key],
                        idb: key
                    });
                    this.setState({ lastIndex : key })
                }
                comments = comments.slice(0, 4);
                this.setState({ comments: comments });
            }).catch(error => {
                this.setState({ error: true });
            });

            axios.get('/products.json')
            .then(response => {
                let products = [];
                for (let key in response.data) {
                    products.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                products = products.slice(0, 4);
                this.setState({ products: products });
            }).catch(error => {
                this.setState({ error: true });
            });
    }


    deleteCommentHandler = (id) => {
        axios.delete(`/comments/${id}.json`)
    }

    render() {
        let products = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if(!this.state.error) {
            products = this.state.products.map(product => {
                        return (
                            <Product
                            key={product.idb}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            reference={product.reference} />
                            );
                    });
        }
        let comments = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.error) {
            comments = this.state.comments.map(comment => {
                return <Comment
                    key={comment.idb}
                    title={comment.title}
                    author={comment.author}
                    commentText={comment.comment}
                    clicked={() => this.deleteCommentHandler(comment.idb)} />;
            });
        }
        return (
            <Container>
                <Row className="justify-content-center" style={{backgroundColor: '#000000'}}>
                    <img src="https://netrinoimages.s3.eu-west-2.amazonaws.com/2016/12/18/431639/163597/range_rover_logo_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_1818137_o.jpg" height="200"/>
                </Row>
                <Row style={{padding: 45}}>
                    {products}
                </Row>
                <Row className="text-center">
                    <h2>Insert a new comment or rate our products!</h2>
                </Row>
                <NewComment lastIndex={this.state.lastIndex}/>
                <Row>
                    {comments}
                </Row>
            </Container>
        );
    }
}

export default Tienda;
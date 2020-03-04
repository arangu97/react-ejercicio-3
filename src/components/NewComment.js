import React from 'react';
import axios from '../axios';

class NewComment extends React.Component {
    state = {
        title: '',
        comment: '',
        author: ''
    }

    postDataHandler = async() => {
        const data = {
            title: this.state.title,
            comment: this.state.comment,
            author: this.state.author
        };
     axios.post('/comments.json', data).then(() => {
            window.location.reload()
            }
        )
    }

    render () {
        return (
            <div style={{paddingBottom: 20}}>
                <form>
                <div className="form-group" style={{padding : 10}}>
                    <label htmlFor="exampleInputTitle">Title</label>
                    <input type="text" className="form-control" id="exampleInputTitle" placeholder="Enter title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                </div>
                <div className="form-group" style={{padding : 10}}>
                    <label htmlFor="exampleInputComment">Comment</label>
                    <textarea className="form-control" id="exampleInputComment" rows="4" value={this.state.comment} onChange={(event) => this.setState({comment: event.target.value})} />
                </div>
                <div className="form-group" style={{padding : 10}}>
                    <label htmlFor="exampleInputAuthor">Author</label>
                    <input type="text" className="form-control" value={this.state.author} id="exampleInputAuthor"  placeholder="Enter author" onChange={(event) => this.setState({author: event.target.value})} />
                </div>
                </form>
                <button className="btn btn-success" onClick={this.postDataHandler}>Add Post</button>         
            </div>   
        );
    }
}

export default NewComment;
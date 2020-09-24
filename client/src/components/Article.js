import React from 'react'
import { Link } from 'react-router-dom'
const URI = "https://127.0.0.1:5000/articles/";

class Article extends React.Component {
    constructor(props){
        super();
        this.state = { title: '',
                       article: '',
                       author: ''
        }          
    }

    componentDidMount() {
        const { id } =  this.props.match.params;
        fetch(URI + id, {
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }})             
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    id: result._id,
                    title: result.title,
                    article: result.article,
                    author: result.author
                })
            })         
    }   
   
    render () {
        const { id, title, article, author } = this.state;
        return (
            <div>
                <div className="container my-5" key={id}>
                    <h2>{title}</h2>
                    <p>{article}</p>
                    <span className="badge badge-secondary p-2">{author}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <Link to={`/editer/${id}`} className="btn btn-outline-success">Editer</Link>
                        </div>
                        <div className="col-sm-2">
                            <Link to={`/supprimer/${id}`} className="btn btn-outline-danger">Supprimer</Link>
                        </div>
                    </div>                        
                </div>
            </div>
        )
    }
}

export default Article

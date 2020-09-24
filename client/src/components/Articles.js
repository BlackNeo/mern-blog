import React from 'react'
import spinner from "../spinner.gif"
import { Link } from 'react-router-dom'

const URI = "http://127.0.0.1:5000/articles";

class Articles extends React.Component {
    constructor(props){
        super();
        this.state = {
            articles: [],
            isLoaded: false
        }
    }
     
    componentDidMount() {
        fetch(URI, {
            method: "GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }})             
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    articles: result,
                    isLoaded: true
                })
            })          
    }
    render() {
        const { articles, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>
                        <img src={spinner} alt="Chargement..." />
                        Chargement…
                    </div>;
        } else {
            return (
                <div className="container">
                   {articles.map(article => (
                        <div className="p-5" key={article._id}>
                            <Link to={`/article/${article._id}`}>
                                <h2>{article.title}</h2>
                            </Link>
                            <p>{article.article}</p>
                            <span className="badge badge-secondary p-2">{article.author}</span>
                        </div>
                    ))} 
                </div>
            )
        }        
    }
}

export default Articles

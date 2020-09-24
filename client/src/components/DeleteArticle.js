import React from 'react';
const URI = "https://mern-stack-blog-geni.herokuapp.com:5000/articles/";

class DeleteArticle extends React.Component {
    constructor(props){
        super();
        this.state = { id: '',
                       title: '',
                       article: '',
                       author: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);          
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

    handleSubmit(event) {
        event.preventDefault();
        let isOK = false;
        // eslint-disable-next-line no-restricted-globals
        isOK = confirm("Etes vous sur de vouloir \nsupprimer cet article !");

        const id = this.state.id;

        const fetchURI = URI + id;

        if(isOK) {
            fetch(fetchURI, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }           
            });
            setTimeout(function(){ this.props.history.push('/'); }.bind(this), 750);    
            
        }       
    }

    render() {
        return (
            <div className="container">
                <h1>Supprimer l'article</h1>
                <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Nom de l'auteur</label>
                    <input readOnly type="text" name="author" placeholder={this.state.author} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input readOnly type="text" name="title" placeholder={this.state.title} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="article">Texte de l'article</label>
                    <textarea readOnly name="article" className="form-control" placeholder={this.state.article} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-danger">Supprimer</button>
                </form>         
            </div>
        )
    }

}

export default DeleteArticle

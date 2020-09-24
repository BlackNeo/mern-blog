import React from 'react'
const URI = "/articles/"

class UpdateArticle extends React.Component {
    constructor(props){
        super();
        this.state = { id: '',
                       title: '',
                       article: '',
                       author: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
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

    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
            [name]: value
        });  
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.state.id;
        const data = { title: this.state.title,
            article: this.state.article,
            author: this.state.author,
        }

        const fetchURI = URI + "update/" + id;

        fetch(fetchURI, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }           
        });
        setTimeout(function(){ this.props.history.push('/article/' + id); }.bind(this), 750);        
    }

    render () {
        return (
            <div className="container">
                <h1>Aujouter l'article</h1>
                <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Nom de l'auteur</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="article">Texte de l'article</label>
                    <textarea name="article" className="form-control" onChange={this.handleInputChange} value={this.state.article} rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-success">Mettre à jour</button>
                </form>         
            </div>
        )
    }
}

export default UpdateArticle

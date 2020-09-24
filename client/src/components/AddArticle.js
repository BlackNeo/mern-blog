import React from 'react'
const URI = "https://0.0.0.0:5000/articles/add";

class AddArticle extends React.Component {
    constructor(){
        super();
        this.state = { title: '',
                       article: '',
                       author: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const data = { title: this.state.title,
            article: this.state.article,
            author: this.state.author,
    }

        fetch(URI, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }           
        });
        setTimeout(function(){ this.props.history.push('/'); }.bind(this), 750);        
    }
    render () {
        return (
            <div className="container">
                <h1>Aujouter l'article</h1>
                <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Nom de l'auteur</label>
                    <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange} className="form-control" placeholder="Nom de l'auteur" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Titre de l'article</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} className="form-control" placeholder="Titre de l'article" />
                </div>
                <div className="form-group">
                    <label htmlFor="article">Texte de l'article</label>
                    <textarea name="article" className="form-control" onChange={this.handleInputChange} value={this.state.article} rows="3" placeholder="Ecrivez votre article ici"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Publier</button>
                </form>         
            </div>
        )
    }   
}

export default AddArticle;

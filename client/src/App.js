import React from 'react';
import {Route} from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header   from './components/layouts/Header';
import Navbar   from './components/layouts/Navbar';
import Footer   from './components/layouts/Footer';
import Articles from './components/Articles';
import Article from './components/Article';
import AddArticle from './components/AddArticle';
import UpdateArticle from './components/UpdateArticle';
import DeleteArticle from './components/DeleteArticle';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Route exact path="/" component={Articles} />
      <Route path="/article/:id" component={Article} />
      <Route path="/editer/:id" component={UpdateArticle} />
      <Route path="/supprimer/:id" component={DeleteArticle} />      
      <Route path="/ajouter" component={AddArticle} />
      <Footer/>      
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Header from './Header';
import Cadastro from './pages/Cadastro';
import Noticias from './pages/Noticias';

ReactDOM.render(
    <Router>
        <div>
            <GlobalStyle />
            <Header />
            <Route exact path="/" component={Cadastro} />
            <Route path="/noticias" component={Noticias} />
        </div>
    </Router>,
    document.getElementById('root')
);

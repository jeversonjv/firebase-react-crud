import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navigation } from './styles/styles';

export default function Header() {
    return (
        <Container>
            <Navigation>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/noticias">Notícias</Link>
                    </li>
                </ul>
            </Navigation>
        </Container>
    );
}

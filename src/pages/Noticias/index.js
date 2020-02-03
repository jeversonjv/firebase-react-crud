import React, { useEffect, useState } from 'react';

import { database } from '../../services/firebaseConfig';

import { Container, Newslatters, Newslatter } from './styles';

function Noticias() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const records = [];
            const result = await database.collection('newslatters').get();
            result.docs.forEach(doc =>
                records.push({ id: doc.id, data: doc.data() })
            );
            setNews(records);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Newslatters>
                {news.map(newslatter => {
                    return (
                        <Newslatter key={newslatter.id}>
                            <img src={newslatter.data.urlImage} alt="Imagem" />
                            <a href={`/noticia/${newslatter.id}`}>
                                {newslatter.data.title}
                            </a>
                            <p>{`${newslatter.data.text.substring(
                                0,
                                200
                            )}...`}</p>
                        </Newslatter>
                    );
                })}
            </Newslatters>
        </Container>
    );
}

export default Noticias;

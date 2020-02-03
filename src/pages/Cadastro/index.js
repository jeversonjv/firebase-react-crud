import React, { useState } from 'react';

import { Editor } from '@tinymce/tinymce-react';
import {
    ToastsContainer,
    ToastsStore,
    ToastsContainerPosition,
} from 'react-toasts';

import { database, storage } from '../../services/firebaseConfig';

import { Container, Form } from './styles';
import imageLoading from '../../images/load.gif';

function Cadastro() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [Nameimage, setNameimage] = useState(
        'Selecione um arquivo de imagem'
    );

    function resetForm() {
        setTitle('');
        setImage('');
        setText('');
        setLoading(false);
        setNameimage('Selecione um arquivo de imagem');
    }

    async function onSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const imageRef = storage.child(
                title[0] + title[title.length - 1] + Math.random() * 99
            );
            const resultImage = await imageRef.put(image);
            const url = await resultImage.task.snapshot.ref.getDownloadURL();

            await database.collection('newslatters').add({
                title,
                text,
                urlImage: url,
            });
            ToastsStore.success('Sucesso no cadastro!');
        } catch (err) {
            ToastsStore.error('Erro ao cadastrar, tente novamente!');
        }
        resetForm();
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Digite o título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <Editor
                    apiKey="wzgsaeardyvxvx9v5oe4szeo8scdburogza87ve0bl8n9gyi"
                    init={{
                        height: 350,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist outdent indent | removeformat | help',
                    }}
                    value={text}
                    onChange={e => setText(e.target.getContent())}
                />
                <div>
                    <input type="text" value={Nameimage} disabled />
                    <label htmlFor="inputFile">
                        Selecionar
                        <input
                            type="file"
                            id="inputFile"
                            onChange={e => {
                                setImage(e.target.files[0]);
                                setNameimage(
                                    e.target.files[0].size > 0
                                        ? e.target.files[0].name
                                        : 'Selecione um arquivo de imagem'
                                );
                            }}
                            required
                        />
                    </label>
                </div>
                {!loading ? (
                    <button type="submit">Salvar</button>
                ) : (
                    <button type="button" disabled>
                        <img
                            src={imageLoading}
                            alt="Botão de carregamento"
                            height="32"
                            width="35"
                        />
                    </button>
                )}
                <ToastsContainer
                    store={ToastsStore}
                    position={ToastsContainerPosition.TOP_RIGHT}
                />
            </Form>
        </Container>
    );
}

export default Cadastro;

//  event.target.files[0];

// database.collection("newslatters").add({
//   name: "Teste"
// });

// database.collection("newslatters").get().then( (newsletters) => {
//   newsletters.docs.forEach(doc => console.log(doc.data()));
// });

// const result = await database.collection("newslatters").doc('WPle4eBL8BGrtcbbN0gw').update({
//   name: "Testando o update"
// });

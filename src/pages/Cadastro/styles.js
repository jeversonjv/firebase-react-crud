import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 480px;
    max-width: 100%;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    input[type='text'] {
        border: 1px solid #ddd;
        width: 90%;
        padding: 5px;
        border-radius: 2px;
        font-size: 14px;
    }

    input[type='text']::placeholder {
        font-size: 14px;
        color: #696969;
    }

    div {
        display: flex;
        width: 90%;
        margin-top: 10px;

        input[type='text'] {
            height: 30px;
            color: #696969;
        }

        label {
            font-size: 14px;
            text-align: center;
            background: #7159c1;
            line-height: 19px;
            margin-left: 2px;
            height: 30px;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
        }
    }

    input[type='file'] {
        display: none;
    }

    button {
        border: 1px solid #696969;
        height: 30px;
        width: 100px;
        margin-top: 10px;
        background: #7159c1;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
`;

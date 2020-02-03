import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    background: #7159C1;
    color: #fff;
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    ul{
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    li{
        margin-right: 15px;
        font-size: 18px;
    }

    a{
        color: #fff;
        text-decoration: none;
        &:hover{
            color: #eee;
        }
    }
`;
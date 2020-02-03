import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px 40px;
`;

export const Newslatters = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 10px;
`;

export const Newslatter = styled.div`
    background-color: #fff;
    width: 480px;
    max-width: 100%;
    margin: 10px 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    margin-left: 20px;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: #7159c1;
        margin: 5px;
    }

    p {
        font-size: 14px;
        margin: 5px;
        height: 75px;
    }

    img {
        width: 100%;
        height: 200px;
    }
`;

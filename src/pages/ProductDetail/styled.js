import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;

export const StyledImage = styled.div`
    flex: 1;
    margin-right: 30px;
`;

export const StyledInfo = styled.div`
    align-items: center;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 4px 8px -2px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    display: flex;
    flex-direction: column;
    flex: 2;
    font-weight: 700;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;

    h2 {
        letter-spacing: -2px;
    }
`;

export const StyledPoints = styled.div`
    align-items: center;
    background: rgb(226, 228, 233, 0.5);
    border-radius: 50px;
    display: flex;
    font-weight: 700;
    justify-content: center;
    margin-left: 0.6em;
    padding: 0.4em 0.5em 0.4em 1em;
`;

export const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

button {
    align-items: center;
    background-color: rgba(21, 219, 255, 0.9);
    border: 1px solid rgba(21, 219, 255, 0.9);
    border-radius: 50px;
    box-shadow: 0 3px 4px rgba(0,0,0,.1);
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    font-weight: 700;
    justify-content: center;
    justify-items: stretch;
    letter-spacing: 1px;
    margin: 30px;
    padding: 0.4em 1em;
    transition: all .25s;
    text-align: center;
    user-select: none;

    &:hover {
        background-color: rgba(21, 219, 255, 0.7);
    }
}
`;
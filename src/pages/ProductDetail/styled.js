import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin: 20px auto;
    max-width: 1000px;
    padding: 20px;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;

export const StyledImage = styled.div`
    flex: 1;
`;

export const StyledInfo = styled.div`
    background: #ffffff;
    border: 1px solid rgba(21, 219, 255, 0.9);
    display: flex;
    flex-direction: column;
    flex: 2;
    justify-content: space-between;

    h2 {
        font-weight: 700;
        letter-spacing: -2px;
    }
`;

export const StyledPoints = styled.div`
`;

export const StyledButton = styled.div`
    text-align: center;
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
    margin: 20px auto;
    padding: 0.4em 0.5em 0.4em 1em;
    transition: all .25s;
    text-align: center;
    user-select: none;

    &:hover {
        background-color: rgba(21, 219, 255, 0.7);
    }
}
`;
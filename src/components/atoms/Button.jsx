import styled from 'styled-components';

const IntButton = styled.button`
    background: transparent;
    border-radius: 2pt;
    border: 2pt solid black;
    color: black;
    margin: 0.1em;
    min-width: 92px;
    height: 48px;
    font-size: 14pt;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 130%;
        height: 55px;
        background-color: black;
        transform: translate(0%, -100%) skew(0deg);
        transition: 0.5s;
    }

    &:hover {
        color: white;
    }

    &:hover::before {
        transform: translate(0%, 0) skew(0deg);
    }

    .btn-text {
        position: relative;
        transition: 0.5s;
    }

    &:hover .btn-text {
        color: white;
    }
`;

export const Button = ({ onClick, children }) => (
    <IntButton onClick={onClick}>
        <span class='btn-text urbanist-400'>{children}</span>
    </IntButton>
)

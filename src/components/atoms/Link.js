import styled from "styled-components";

export const Link = styled.a`
    color: black;
    position: relative;
    text-decoration: none;
    font-size: 18pt;
    font-family: "Reddit Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: black;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform 0.5s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`;

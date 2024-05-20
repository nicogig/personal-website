import styled from "styled-components";
import { fadeIn } from "./fadeIn";

export const Content = styled.div`
display: flex;
flex-direction: column;
animation: ${fadeIn} 0.75s ease-in-out; 
height: 100%;
align-items: center;
justify-content: center;
padding-bottom: 180px;
`;

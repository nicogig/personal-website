import React from "react";
import styled from "styled-components";
import { fadeIn } from "./atoms/fadeIn";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";

const Page = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgba(255, 255, 255, 0.8);
    padding-top: 140px;
    padding-left: 50px;
    padding-right: 50px;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: 10;
    display: flex;
    flex-direction: column;
    opacity: 1;
    animation: ${fadeIn} 0.75s ease-in-out; 
    
    & > h1 {
        color: black;
    }

    .heading {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
    }

    .heading > h1 {
        color: black;
        opacity: 0.5;
    }

    .heading > span {
        font-size: 38px;
        opacity: 0.5;
        cursor: pointer;
    }
`;

export const SupplementaryPage = ({page, setShowSupplementaryPage}) => (<Page>
        <div className="heading"><h1 className="urbanist-500">{page}</h1><span aria-description="Close" onClick={() => { setShowSupplementaryPage(false); }}>&times;</span></div>
        {
            page === 'about' && <About />
        }
        {
            page === 'projects' && <Projects />
        }
        {
            page === 'contacts' && <Contacts />
        }
    </Page>);

import React from 'react';
import { Button } from './atoms/Button';
import styled from 'styled-components';
import logo from '../static/logo.svg';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    width: -webkit-fill-available;
    z-index: 99;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    align-items: center;
    padding: 25px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

const setPage = (setShowSupplementaryPage, setSupplementaryPage, page) => (_e) => {
    setShowSupplementaryPage(true);
    setSupplementaryPage(page);
}

export const Header = ({ setShowSupplementaryPage, setSupplementaryPage }) => (
    <HeaderContainer>
        <object data={logo} height={'64pt'} />
        <ButtonContainer>
            <Button onClick={setPage(setShowSupplementaryPage, setSupplementaryPage, 'about')}>about</Button>
            <Button onClick={setPage(setShowSupplementaryPage, setSupplementaryPage, 'projects')}>projects</Button>
            <Button onClick={setPage(setShowSupplementaryPage, setSupplementaryPage, 'contacts')}>contacts</Button>
        </ButtonContainer>
    </HeaderContainer>
);
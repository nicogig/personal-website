import React from 'react';
import styled from 'styled-components';
import memoji from '../../static/memoji.png';
import { fadeIn } from '../atoms/fadeIn';
import { Paragraph } from '../atoms/Paragraph';

const Content = styled.div`
    display: grid;
    grid-template-columns: 0.75fr 2fr;
    overflow: hidden;
    animation: ${fadeIn} 0.75s ease-in-out; 
    height: 100%;
`;

const FadingImage = styled.img`
    position: absolute;
    bottom: 0px;
`;

const AboutSections = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 120px;
    margin-left: 60px;
    padding-bottom: 180px;
    overflow: scroll;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1), rgba(0,0,0,0));
    height: -webkit-fill-available;
    justify-content: center;
`;

export const About = () => (<Content>
    <div><FadingImage src={memoji} alt={'Memoji of a person waving hello'} /></div>
    <AboutSections>
        <Paragraph>Hey! I'm <strong>Nicola</strong>, a 25 year old full-stack Software Engineer and UI/UX designer based in London, England.<br />Currently, I work at <strong>Apple</strong> as a Software Engineer for their Services division.</Paragraph>
        <Paragraph>I hold a Masters' Degree in Electronic Engineering with Computer Science from <strong>Univeristy College London (UCL)</strong>, where I graduated in September 2022. My thesis focused on the emulation of faults in novel neuromorphic devices to improve the resiliance of hardware-based neural networks. While my work at University focused on hardware, outside of University I spent my free time bringing ideas to life through software. Some of the projects I worked on are still up on my GitHub!</Paragraph>
        <Paragraph>Engineering is more than a profession to me — it's the bridge between art and science, capable of blending technology and human ingenuity with creativity and beauty. I love being able to blend the two in my projects to make ideas happen.</Paragraph>
    </AboutSections>
</Content>);
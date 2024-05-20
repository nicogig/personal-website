import React from "react";
import { Content } from "../atoms/Content";
import { Heading } from "../atoms/Heading";
import { Link } from "../atoms/Link";
import instagram from '../../static/instagram.svg';
import mastodon from '../../static/mastodon.svg';
import envelopeAt from '../../static/envelope-at.svg';
import styled from "styled-components";

const greetings = [
    'Hi!',
    'Hello!',
    'Ciao!',
    'Howdy!',
    '¡Hola!'
];

const TextAndLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px
`;

export const Contacts = () => (<Content>
    <Heading>Say {greetings[Math.floor(Math.random() * (greetings.length))]}</Heading>
    <Link href="https://www.instagram.com/_nicolagigante/"><TextAndLogo><object data={instagram} aria-label="Instagram Logo" height={'24pt'} /> Follow me on Instagram</TextAndLogo></Link>
    <br/>
    <Link href="https://tech.lgbt/@nicogig"><TextAndLogo><object data={mastodon} aria-label="Mastodon Logo" height={'24pt'} /> Find me on Mastodon</TextAndLogo></Link>
    <br />
    <Link href="mailto:nicola.gigante@icloud.com"><TextAndLogo><object data={envelopeAt} aria-label="eMail Logo" height={'24pt'} /> Send me an eMail</TextAndLogo></Link>
</Content>);
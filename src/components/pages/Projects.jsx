import React from "react";
import { Paragraph } from "../atoms/Paragraph";
import { Button } from "../atoms/Button";
import { Content } from "../atoms/Content";
import { Heading } from "../atoms/Heading";

export const Projects = () => (<Content>
    <Heading>Heya, this section isn't quite ready yet.</Heading>
    <Paragraph>In the future, this will be a living archive of my personal projects. In the meantime...</Paragraph>
    <Button onClick={() => {
        window.open('https://github.com/nicogig')
    }}>Take a peek at my GitHub</Button>
</Content>);
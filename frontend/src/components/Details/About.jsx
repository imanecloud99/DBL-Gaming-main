import React from 'react';
import BasicPage from './BasicPage';
import { aboutPage } from '../data/Data';

function About() {
    const {
        pageTitle,
        pageContent,
    } = aboutPage;
    return (
        <>
            <BasicPage pageTitle={pageTitle} pageContent={pageContent} />
        </>
    );
}

export default About;

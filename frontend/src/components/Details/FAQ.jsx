import React from 'react';
import BasicPage from './BasicPage';
import { FAQPage } from '../data/Data';

function FAQ() {
    const {
        pageTitle,
        pageContent,
    } = FAQPage;
    return (
        <>
            <BasicPage pageTitle={pageTitle} pageContent={pageContent} />
        </>
    );
}

export default FAQ;

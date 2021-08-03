import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { graphql, StaticQuery } from "gatsby"
import * as stylesLayouts from './layout.module.scss';
const layoutComponent = ({children}) => {
    return (
        <div className={stylesLayouts.container}>
            <div className={stylesLayouts.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    );
}


export default layoutComponent;

// query MyQuery {
//     allFile {
//         edges {
//         node {
//             dir
//             name
//             ext
//         }
//         }
//     }
//     }
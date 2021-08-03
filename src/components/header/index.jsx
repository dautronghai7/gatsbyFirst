import React, { Component } from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';
import * as styles from './header.module.scss';
const HeaderComponent = () => {
    const data = useStaticQuery(graphql`query MyQuery{
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }`);    
    return (
        <div className={styles.header}>
            <div>
                <h1>
                    <Link className={styles.title} to="/">
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
            </div>
            <nav>
                <ul className={styles.nav_list}>
                    <li><Link activeClassName={styles.nav_item_active} className={styles.nav_item} to="/">Home</Link></li>
                    <li><Link activeClassName={styles.nav_item_active} className={styles.nav_item} to="/blog">BLog</Link></li>
                    <li><Link activeClassName={styles.nav_item_active} className={styles.nav_item} to="/about">About</Link></li>
                    <li><Link activeClassName={styles.nav_item_active} className={styles.nav_item} to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    );
}

export default HeaderComponent;
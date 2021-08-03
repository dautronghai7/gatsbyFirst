import { Link } from 'gatsby';
import React, { Component } from 'react';

import Layout from '../components/layout';
import '../styles/index.scss';

const indexPage = ()=> {
    return (
      <Layout>
          <h1>Xin chao gatsby</h1>
          <p>Goto contact page: <a href="/contact">Contact</a></p>
          <p>Goto contact page: <Link to="/blog">Blog</Link></p>
      </Layout>
    );
}

export default indexPage;
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = ()=> {
  
  const query = graphql`
  {
    allContentfulBlogPostTest {
      edges {
        node {
          id
          title
        }
      }
    }
  }`;
  const data = useStaticQuery(query);  
   let edges = data.allContentfulBlogPostTest.edges;
  return (
    <Layout>
      <h2>List Post from Content Ful</h2>
      <ol>
        {edges.map((edge, i) => {
          return (
            <li key={i}>
              <h4><a>{edge.node.title}</a></h4>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
}

export default IndexPage;
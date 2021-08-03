import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
const BlogPage = () => {    
    const query = graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date
              scripts
              title
            }
          }
        }
      }
    }
  `;
  const data = useStaticQuery(query); 
    //console.log("query",data);
    return (
        <Layout>
            <h2>List Post</h2>
            <ol>
                {data.allMarkdownRemark.edges.map((edge, i)=>{                    
                    return (
                        <li key={i}>
                            <h4><a href={"/blog/"+edge.node.fields.slug}>{edge.node.frontmatter.title}</a></h4>
                            <p><a>{edge.node.frontmatter.scripts}</a></p>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    );
}
export default BlogPage;
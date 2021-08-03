import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export const query = graphql`query($slug:String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      },
      html
    }
  }`;

const BlogTempate = (props) => { 
    console.log(props);
  //const data = useStaticQuery(query);
  return (<Layout>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html }}></div>    
        </Layout>
    );
};

export default BlogTempate;

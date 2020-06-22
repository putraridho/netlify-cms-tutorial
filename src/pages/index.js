import React from "react"
import { graphql } from "gatsby"

// export const query = graphql`
//   query {
//     allFile(
//       filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
//     ) {
//       edges {
//         node {
//           childMarkdownRemark {
//             frontmatter {
//               title
//               intro
//             }
//           }
//         }
//       }
//     }
//   }
// `

export default function Home(props) {
  // const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  // console.log(data)

  return (
    <>
      {/* <h1>{data.title}</h1>
      <p>{data.intro}</p> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </>
  )
}

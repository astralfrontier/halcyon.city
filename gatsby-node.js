const path = require(`path`)
const slug = require(`slug`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/components/page.js`)
  const villainTemplate = path.resolve(`src/components/villain.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                sourceInstanceName
              }
            }
            frontmatter {
              name
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    switch (node.parent.sourceInstanceName) {
      case 'pages':
        createPage({
          path: node.frontmatter.path,
          component: pageTemplate,
          context: {}, // additional data can be passed via context
        })
        break;
      case 'villains':
        createPage({
          path: `villains/${slug(node.frontmatter.name).toLowerCase()}`,
          component: villainTemplate,
          context: {id: node.id}, // additional data can be passed via context
        })
        break;
    }
  })
}
import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getArticles = async () => {
    const query = gql`
        query GetArticles {
            articlesConnection {
                edges {
                  node {
                    author {
                      bio
                      name
                      id
                      authorImage {
                        url
                      }
                    }
                    createdAt
                    slug
                    title
                    preview
                    articleImage {
                      url
                    }
                    topics {
                      name
                      slug
                    }
                  }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.articlesConnection.edges;
}
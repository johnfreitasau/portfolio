import { GraphQLClient } from 'graphql-request'

export const graphQLClient = new GraphQLClient(process.env.GRAPHCMS_URL_ENDPOINT)

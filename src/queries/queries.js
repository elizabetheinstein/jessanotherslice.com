import { graphql } from "gatsby";

export const GET_RESTAURANTS = graphql`
    query {
        allMongodbJessanothersliceRestaurants {
            edges {
                node {
                    id
                    name
                    neighborhood
                    subways
                    rating {
                        jas
                        google
                        yelp
                    }
                }
            }
        }
    }
`
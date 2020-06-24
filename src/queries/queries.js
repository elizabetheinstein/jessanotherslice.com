import { graphql } from "gatsby";

const GET_RESTAURANTS = graphql`
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
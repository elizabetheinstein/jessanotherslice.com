import { graphql } from "gatsby";
const _ = require('lodash');
const Restaurant = require('../models/restaurant');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql

const RestaurantType = new GraphQLObjectType({
    name: "Restaurant",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        rating: { type: GraphQLObjectType },
        neighborhood: { type: GraphQLString },
        subway: { type: GraphQLList }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        restaurant: {
            type: RestaurantType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Restaurant.findById(args.id)
            }
        },
        restaurants: {
            type: new GraphQLList(RestaurantType),
            resolve(parent, args) {
                return Restaurant.find({})
            }
        }
    })
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addRestaurant: {
            type: RestaurantType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                rating: { type: new GraphQLNonNull(GraphQLObjectType) },
                neighborhood: { type: new GraphQLNonNull(GraphQLString) },
                subway: { type: new GraphQLString }
            },
            resolve(parent, args) {
                let restaurant = new Restaurant({
                    name: args.name,
                    rating: args.rating,
                    neighborhood: args.neighborhood,
                    subway: args.subway
                })
                return restaurant.save()
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
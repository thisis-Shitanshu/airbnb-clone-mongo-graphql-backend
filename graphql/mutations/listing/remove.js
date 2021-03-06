import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

// Import file(s) here.
import listingType from '../../types/listing';
import ListingModel from '../../../models/listing';

export default {
    type: listingType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    async resolve (root, params, options) {
        const removedListing = await ListingModel
            .findByIdAndRemove(params.id)
            .exec();

            if (!removedListing) {
                throw new Error('Error removing listing');
            }

            return removedListing;
    }
};
import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';

// Import custome file(s) here.
import ListingModel from '../../../models/listing';
import listingType from '../../types/listing';
import listingInputType from '../../types/listing-input';

export default {
    type: listingType,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(listingInputType)
        }
    },
    resolve (root, params) {
        const listingModel = new ListingModel(params.data);
        const newListing = listingModel.save();

        if (!newListing) {
            throw new Error('Error adding new listing');
        }

        return newListing;
    }
}
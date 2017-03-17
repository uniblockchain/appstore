import {parseJSONError} from './Form';

describe('Testing the window error result parser', () => {

    it('should parse a general error', () => {
        expect(parseJSONError(['Signature is invalid']))
            .toEqual({
                fields: {},
                global: ['Signature is invalid'],
            });
    });

});
var pocket = require('pocket-api')

var consumer_key = '89424-6a5ecb8c87fa2c3b158f1a13';

pocket.getRequestToken( consumer_key , function( data ) {
    console.log( data );
    //returns request_token
});


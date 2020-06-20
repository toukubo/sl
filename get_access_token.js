var pocket = require('pocket-api')

var consumer_key = '89424-6a5ecb8c87fa2c3b158f1a13';
var request_token = 'a14c60c3-399d-684e-445e-d71269';

pocket.getAccessToken( consumer_key , request_token, function( data ) {
    console.log( data );
    //returns username and access_token
});

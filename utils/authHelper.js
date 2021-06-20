const jwt = require("jsonwebtoken");
const httpHelper = require('./httpHelper');

// default: RS256 encryption
const createToken = ( data, authentication_secret, validity ) => {

    if( typeof( validity ) !== "number" ) 
    {

        httpHelper.sendAckResponse(res, new Error("Provide authentication validity."), null);

        return;
    
    }

    if( !authentication_secret ) {

        httpHelper.sendAckResponse(res, new Error("Provide authentication secret."), null);

        return;

    }

    if( Object.keys(data).length === 0 ) {

        httpHelper.sendAckResponse(res, new Error("Provide user data."), null);

        return;

    }

    try {

        return jwt.sign( data, authentication_secret, { expiresIn: validity } );

    } catch (error) {

        httpHelper.sendAckResponse(res, new Error("Error while generating jwt token."), "");

    }
};

//Verifying token
const verifyToken = ( headers, authentication_secret ) => {
    
    let token = fetch(headers);

    return new Promise( ( resolve, reject ) => {

        jwt.verify(token, authentication_secret, function(err, decode) {
            
            if (err) {
    
                reject( new Error( "Invalid Token" ) )
    
            } else {
    
                resolve( decode );
    
            }
        });

    } )

};

const fetch = (headers) => {
    if (headers && headers.authorization) {

        let authorization = headers.authorization;

        let part = authorization.split(' ');

        if (part.length === 2) {

            return part[1];

        } else {

            return null;

        }

    } else {

        return null;

    }
};

module.exports = {
    createToken,
    verifyToken
};
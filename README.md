# `Express-Util-Helper`
## Http Helper & Error Handler

Express Helper is a NPM where you can get 
- `Http Helper` 
- `Error Handler`

## Features

> `const { httpHelper, errorHandler, authHelper } = require( 'express-util-helper' );`

- ### *`HTTP Helper`*

    > Response in `Boolean` \
    > e.g. Success : `{ success : "true", message : "Some Success Message" }` \
    > e.g. Error : `{ success : "false", message : "Some Error Message" }` \
    > `app.get( '/', ( req, res ) => { httpHelper( 'ack', res, error, message ); } ) `
    
    > Response in `Object` \
    > e.g. Success :  `{ "success": true, "data": { "name": "Sarada", "age": "22" } }` \
    > e.g. Error :  `{ "success": false, "data": {  }, err : { "message" : "Some error message" } }` \
    > `app.get( '/', ( req, res ) => { httpHelper( 'ack', res, error, object ); } )`  
    
    > Response in `Array` \
    > e.g. Success :  `{ "success": true, "data": [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }` \
    > e.g. Error :  `{ "success": false, "data": [], err : { "message" : "Some error message" } }` \
    > `app.get( '/', ( req, res ) => { httpHelper( 'ack', res, error, array ); } )`  

- ### *`Error Handler`*
    > `const { invalidRoute, universalErrorHandler } = errorHandler;`

    > After all routers
    > `app.use( invalidRoute )`
    > `app.use( universalErrorHandler )`
    
- ### *`JWT Authentication Helper`*
    >  `const { createToken, verifyToken } = authHelper;`

    >  `This authentication function is a middleware to filter authenticate users`
    >   `const authentication = ( req, res, next ) => {`
    >   `verifyToken( req.headers, 'secret' )    // "secret" - Secret key to encrypt and decrypt data`
    >   `.then( data => {`
    >   `req.authData = data;`
    >   `next();`
    >   `} )`
    >   `.catch( err => {`
    >   `httpHelper( 'ack', res, err, err.message  );`
    >   `} )`
    >   `}`
    
    >   `Authentication Methods`
    >   `# () Generate Authentication Token`
    >   `app.get( '/generate/token', ( req, res ) => {`
    >   `let token = createToken( { id : 101 }, "secret", 60 * 60 * 24 )`     
    >   `// { id : 101 } - This data will encrypted`
    >   `// "secret" - Secret key to encrypt and decrypt data`
    >   `// 60 * 60 * 24 = 24 hours = 24 * 3600 seconds`
    >   `httpHelper( 'record', res, null, { jwtToken : token } )`
    >   ` } )`
    >   `# () Validate Authentication Token In A Middleware`
    >   `app.get( '/verify/token', authentication, ( req, res, next ) => {`
    >   `let responseData = {`
    >   `message : "User Authenticated",`
    >   `authData : {`
    >   `...req.authData`
    >   `}`
    >   `}`
    >   `httpHelper( 'record', res, null, responseData );`
    >   `} )`
    
    `#NB :  Secret key must be same in both encrypt and decrypt case. Otherwise token will not be validated.`

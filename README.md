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
    >   `const authentication = ( req, res, next ) => {
    >   &nbsp;&nbsp;&nbsp;&nbsp;`verifyToken( req.headers, 'secret' )    // "secret" - Secret key to encrypt and decrypt data`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `.then( data => {`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `req.authData = data;`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `next();`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `} )`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `.catch( err => {`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `httpHelper( 'ack', res, err, err.message  );`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `} )`
    >   `}`
    
    >   `Authentication Methods`
    >   `# () Generate Authentication Token`
    >   `app.get( '/generate/token', ( req, res ) => {`
    >   &nbsp;&nbsp;&nbsp;&nbsp; `let token = createToken( { id : 101 }, "secret", 60 * 60 * 24 )`     
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `// { id : 101 } - This data will encrypted`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `// "secret" - Secret key to encrypt and decrypt data`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `// 60 * 60 * 24 = 24 hours = 24 * 3600 seconds`
    >   &nbsp;&nbsp;&nbsp;&nbsp; `httpHelper( 'record', res, null, { jwtToken : token } )`
    >   ` } )`
    >   `# () Validate Authentication Token In A Middleware`
    >   `app.get( '/verify/token', authentication, ( req, res, next ) => {`
    >   &nbsp;&nbsp;&nbsp;&nbsp; `let responseData = {`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `message : "User Authenticated",`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `authData : {`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    `...req.authData`
    >   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `}`
    >   &nbsp;&nbsp;&nbsp;&nbsp; `}`
    >   &nbsp;&nbsp;&nbsp;&nbsp; `httpHelper( 'record', res, null, responseData );`
    >   `} )`
    
    `#NB :  Secret key must be same in both encrypt and decrypt case. Otherwise token will not be validated.`

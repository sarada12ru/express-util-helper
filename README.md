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

    >  `This authentication function is a middleware to filter authenticate users`  <br />
    >   `const authentication = ( req, res, next ) => {`    <br />
    >   `verifyToken( req.headers, 'secret' )    // "secret" - Secret key to encrypt and decrypt data`  <br />
    >   `.then( data => {`<br />
    >   `req.authData = data;`<br />
    >   `next();`   <br />
    >   `} )`   <br />
    >   `.catch( err => {`  <br />
    >   `httpHelper( 'ack', res, err, err.message  );`  <br />
    >   `} )`   <br />
    >   `}` <br />
    
    >   `Authentication Methods`    <br />
    >   `# () Generate Authentication Token`    <br />
    >   `app.get( '/generate/token', ( req, res ) => {`     <br />
    >   `let token = createToken( { id : 101 }, "secret", 60 * 60 * 24 )`   <br />  
    >   `// { id : 101 } - This data will encrypted`    <br />
    >   `// "secret" - Secret key to encrypt and decrypt data`  <br />
    >   `// 60 * 60 * 24 = 24 hours = 24 * 3600 seconds`    <br />
    >   `httpHelper( 'record', res, null, { jwtToken : token } )`   <br />
    >   ` } )`  <br />
    >   `# () Validate Authentication Token In A Middleware`    <br />
    >   `app.get( '/verify/token', authentication, ( req, res, next ) => {`     <br />
    >   `let responseData = {`      <br />
    >   `message : "User Authenticated",`       <br />
    >   `authData : {`      <br />
    >   `...req.authData`       <br />
    >   `}`     <br />
    >   `}`     <br />
    >   `httpHelper( 'record', res, null, responseData );`      <br />
    >   `} )`   
    
    `#NB :  Secret key must be same in both encrypt and decrypt case. Otherwise token will not be validated.`

# `Express-Util-Helper`
## Http Helper & Error Handler

Express Util Helper is a NPM where you can get 
- `Http Helper` 
- `Error Handler`

## Features

> `const { httpHelper, errorHandler } = require( 'express-util-helper' );`

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

    > After all routers \
    > `app.use( invalidRoute )` \
    > `app.use( universalErrorHandler )`
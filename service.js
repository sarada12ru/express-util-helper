// Http Helper

const { sendAckResponse, sendGetRecordResponse, sendGetRecordsResponse } = require( './utils/httpHelper' );

const httpHelper = ( type = 'ack' || 'record' || 'records', res, error, result ) => {

    if( !res ) {
        throw new Error( "Response is undefined" )
    }    

    if( type === 'ack' ) {

        if( typeof result !== 'string' ){

            throw new Error( "Result must be a String" );

        }

        sendAckResponse( res, error, result );

    }

    if( type === 'record' ) {

        if( typeof result !== 'object' ){

            throw new Error( "Result must be an object" );

        }

        sendGetRecordResponse( res, error, result );

    }

    if( type === 'records' ) {

        if( ! Array.isArray( result ) ){

            throw new Error( "Result must be an array" );

        }

        sendGetRecordsResponse( res, error, result );

    }

}

//Error Handler

const { invalidRoute, universalErrorHandler } = require( './utils/errorHandler' );

const errorHandler = {
    invalidRoute,
    universalErrorHandler
}

const { createToken, verifyToken } = require( './utils/authHelper' );

const authHelper = {
    createToken,
    verifyToken
}

module.exports = {

    httpHelper,
    errorHandler,
    authHelper
    
}
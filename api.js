const express = require('express')
		, app = express()
		// , Promise = require('bluebird')
		, fs = require('fs-extra')
		, path = require('path')
		, http = require('http')
		, url = require('url')
		, request = require('request')
		, chalk = require('chalk')
		, session = require('express-session')
		, CASAuthentication = require('cas-authentication');


const jsessionIDCookie = 'jsessionId=D7C4393661225B32708BAB9E8DE1EF76';

const username = 'supportadvanced@email.com';
const password = 'decisions789';
var casURL = 'https://login-dev2.networkedinsights.com/login?';
var pentahoURL = `http://${username}:${password}@104.154.200.92:8080/pentaho/`
var pentahoURL = `http://104.154.200.92:8080/pentaho/`

// request.cookie('JSESSIONID=D7C4393661225B32708BAB9E8DE1EF76')

// Set up an Express session, which is required for CASAuthentication.
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));

// Create a new instance of CASAuthentication.
var cas = new CASAuthentication({
    cas_url     : casURL,
    service_url : pentahoURL
});

// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
app.get( '/app', cas.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});

// Unauthenticated clients will receive a 401 Unauthorized response instead of
// the JSON data.
app.get( '/api', cas.block, function ( req, res ) {
    res.json( { success: true } );
});

// An example of accessing the CAS user session variable. This could be used to
// retrieve your own local user records based on authenticated CAS username.
app.get( '/api/user', cas.block, function ( req, res ) {
    res.json( { cas_user: req.session[ cas.session_name ] } );
});

// Unauthenticated clients will be redirected to the CAS login and then to the
// provided "redirectTo" query parameter once authenticated.
app.get( '/authenticate', cas.bounce_redirect );

// This route will de-authenticate the client with the Express server and then
// redirect the client to the CAS logout page.
app.get( '/logout', cas.logout );


const PORT = 3003;
app.listen(PORT, () => {
	console.log(`listening on ${PORT} : ${+new Date('June 22, 1983')}`);
});

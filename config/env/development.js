/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  models: {
    connection: 'someMongodbServer'
  },

	connections: {
	    someMongodbServer: { 
	    adapter: 'sails-mongo',
	    host: 'localhost', // defaults to `localhost` if omitted
	    port: 27017, // defaults to 27017 if omitted
	    user: 'ngocnv', // or omit if not relevant
	    password: '123456', // or omit if not relevant
	    database: 'blog' // or omit if not relevant
	}
  },

  application_auth: {

        enableLocalAuth: true,

        // Get your keys from https://apps.twitter.com/
        enableTwitterAuth: false,
        twitterConsumerKey: "",
        twitterSecretKey: "",
        twitterCallbackURL: "http://localhost:1337/auth/twitter/callback",

        // Get your keys from https://developers.facebook.com/apps/
        enableFacebookAuth: true,
        facebookClientID: "449272895255080",
        facebookClientSecret: "25874100c9c1619825109b9d8220d905",
        facebookCallbackURL: "http://localhost:1337/auth/facebook/callback"
    }

}

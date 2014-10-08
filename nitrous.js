/*!
 * Module dependencies.
 */

var connect = require('connect'),
    phonegap = require('connect-phonegap'),
    app = connect();

/*!
 * Create Connect server using the PhoneGap middleware.
 */

   app.use(phonegap());
   console.log('Ctrl-C to quit');
   console.log('Enter into Phonegap Developer App the Address');


   var port = process.env.PORT || 3000;
   app.listen(port);

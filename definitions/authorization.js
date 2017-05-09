F.on('module#auth', function (type, name) {
    
    //console.log('ada ');
    var auth = MODULE('auth');
    
    auth.onAuthorize = function (id, callback, flags) {
    //console.log('ada ' + id);

//        var filter = function (user) {
//            return user.id === id;
//        };

        // - this function is cached
        // - here you have to read user information from a database
        // - insert the user object into the callback (this object will be saved to session/cache)
        //callback({ id: '1', alias: 'Peter Sirka' });

        // if user not exist then
        // callback(null);

        // Session doesn't exist here, so we try to sign-in user because we have his ID
        var sql = DB();

        sql.select('user', 'tbl_user').make(function (ressql) {
            ressql.where('id', id);
            //filter.where('blocked', false);
            //filter.where('confirmed', true);
            //filter.where('removed', false);
            ressql.limit(1);

            // User session will contain these properties:
            ressql.fields('id', 'firstname', 'email','roles');
        });

        sql.exec(function (err, response) {

            // Check whether the user exists in DB
            if (err || !response.user) {
                // user not exist then
                return callback(null);
            }

            var user = response.user;
            //console.log('ada 2 ' + user.email);
            // We have the user so we can set the current timestamp (for his expiration)
            //user.ticks = F.datetime;

            // Create a session
            //   ONLINE[user.id] = user;

           // Authorize the user
           callback(user);
        });

    };
});

//F.on('module#auth', function(type, name) {
//	var auth = MODULE('auth');
//	auth.onAuthorize = function(id, callback, flags) {
//
//        // - this function is cached
//        // - here you must read user information from a database
//        // - insert the user object into the callback (this object will be saved to session/cache)
//        callback({ id: '1', alias: 'Peter Sirka', roles: ['admin'] });
//
//        // if user not exist then
//        // callback(null);
//	};
//});
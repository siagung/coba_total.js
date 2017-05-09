exports.id = 'auth';
exports.version = '1.01';

exports.login = function (controller, options, callback) {
    var sql = DB();
    var auth = MODULE('auth');
    var encoded = F.encrypt(options.password, '0passM@ns03rs');
    var decoded;
    // console.log('model -> '+(options.password));
    sql.select('user', 'tbl_user').make(function (builder) {
        builder.where('email', options.email);
        //builder.where('password', encoded);
        //builder.where('blocked', false);
        //builder.where('confirmed', true);
        //builder.where('removed', false);
        builder.limit(1);

        // User session will contain these properties:
        builder.fields('id', 'firstname', 'email', 'roles','password');
    });

    sql.exec(function (err, response) {
        if (err || !response.user) {
            // user not exist then
            return callback(SUCCESS(false, {userId: false}));
        }

        if (response.user.password !== encoded) {
            // user not exist then
            return callback(SUCCESS(false, {userId: true}));
        } else {
            var user = {id: response.user.id, firstname: response.user.firstname, email: response.user.email,roles:response.user.roles};

            auth.login(controller, response.user.id, user);
            encoded = F.encrypt(user, '0passM@ns03r');
            //console.log('encoded -> ', encoded);
            //decoded = F.decrypt(encoded, '0passM@n03r');
            //console.log('decoded -> ', decoded);

            // Create a session
            //   ONLINE[user.id] = user;

            // Authorize the user
            callback(SUCCESS(true, {data: user, token: encoded}));
        }
    });
};


exports.account_details = function (controller, options, callback) {
    var sql = DB();
    //var auth = MODULE('auth');
    //var encoded;
    //var decoded;

    //console.log('model -> '+(options.password));
    sql.select('user', 'tbl_user').make(function (builder) {
        builder.where('id', options.id);
        //builder.where('password', options.password);
        //builder.where('blocked', false);
        //builder.where('confirmed', true);
        //builder.where('removed', false);
        builder.limit(1);

        // User session will contain these properties:
        builder.fields('id', 'firstname', 'lastname', 'email', 'datecreated', 'age', 'roles');
    });

    sql.exec(function (err, response) {
        if (err || !response.user) {
            // user not exist then
            return callback(SUCCESS(false, "0"));
        }

        var user = response.user;

        //auth.login(controller, user.id, user);
        //encoded = F.encrypt(user, '0passM@n03r');
        //console.log('encoded -> ', encoded);
        //decoded = F.decrypt(encoded, '0passM@n03r');
        //console.log('decoded -> ', decoded);

        // Create a session
        //   ONLINE[user.id] = user;

        // Authorize the user
        callback(SUCCESS(true, {data: user}));
    });
};

exports.id = 'movie';
exports.version = '1.01';

/*
"id" int4 NOT NULL,
"poster_path" varchar(255) COLLATE "default",
"adult" bool,
"overview" varchar(255) COLLATE "default",
"release_date" varchar COLLATE "default",
"genre_ids" int2,
"original_title" varchar(255) COLLATE "default",
"original_language" varchar(255) COLLATE "default",
"title" varchar(255) COLLATE "default",
"backdrop_path" varchar(255) COLLATE "default",
"popularity" float4,
"vote_count" int2,
"video" bool,
"vote_average" float4,

*/


NEWSCHEMA('Movie').make(function(schema) {
    schema.define('type', 'Bool');
    schema.define('id', Number);
    schema.define('title', 'Capitalize(50)',true);
    schema.define('poster_path', 'Capitalize(50)');
    schema.define('adult', 'Bool');
    schema.define('overview', 'String(255)');
    schema.define('release_date', 'String(255)');
    schema.define('genre_ids',Number);
    schema.define('original_title', 'String(255)');
    schema.define('original_language', 'String(255)');    
    schema.define('backdrop_path', 'String(255)');
    schema.define('popularity', Number);
    schema.define('vote_count', Number);
    schema.define('video','Boolean');
    schema.define('vote_average', Number);
    
	    schema.setSave(function(error, model, options, callback, controller) {

        var insert = model.type;
        var sql = DB(error);
       // var passwordToSave = F.encrypt(model.password,'0passM@ns03rs');
        //console.log('enc created : '+passwordToSave);
        // Is it a new user?
       // if (insert)
           // model.id = UID();
          console.log ('model.insert- >'+model.movie);


        sql.save('save', 'movie', insert, function(builder, isInsert) {

            builder.set('id', model.id);
            builder.set('title', model.title);
            builder.set('poster_path', model.poster_path);
            builder.set('adult', model.adult);
            builder.set('overview', model.overview);
            builder.set('release_date', model.release_date);
            builder.set('vote_average', model.vote_average);

            if (isInsert) {
                // insert
                builder.set('id', model.id);
                builder.set('datecreated', F.datetime);
           } else {
               // update
               builder.set('dateupdated', F.datetime);
               builder.where('id', model.id); // IMPORTANT !!!!                
            }
        });

        // Validate a response from the previous query
        sql.validate('save', 'Movie doesn\'t exist.');

        // Execute all queries
        sql.exec(function(err, response) {
            callback({success:true,results: model});
        });
    });
	schema.setGet(function(error, model, options, callback) {

		var sql = DB(error);

		// // Reads the user
		// users.one().make(function(builder) {
		// 	builder.where('id', options.id);
		// 	builder.callback(callback, 'error-user-404');
		// });

		   // console.log('model -> '+(options.password));
    sql.select('movie', 'movie').make(function (builder) {
        //builder.where('email', options.email);
        //builder.where('password', encoded);
        //builder.where('blocked', false);
        //builder.where('confirmed', true);
        //builder.where('removed', false);
        //builder.limit(1);

        // User session will contain these properties:
       // builder.fields('id', 'firstname', 'email', 'roles','password');
        //builder.callback(callback, 'error-user-404');
    });

    sql.exec(function (err, response) {
        if (err || !response.movie) {
            // user not exist then
            return callback({success:false,results: false});
        }

          callback({success:true,results: response.movie});
    });
});

	schema.setQuery(function(error, options, callback) {

		var users = NOSQL('users');

		// Reads the user
		users.find().make(function(builder) {

			if (options.search) {
				builder.or();
				builder.search('firstname', search);
				builder.search('lastname', search);
				builder.end();
			}

			builder.fields('id', 'firstname', 'lastname', 'datecreated');
			builder.callback(callback);
		});
	});

	schema.setRemove(function(error, options, callback) {

		var users = NOSQL('users');

		// Removes the user
		users.remove().make(function(builder) {
			builder.where('id', options.id);
			builder.callback(SUCCESS(callback));
		});
	});
});
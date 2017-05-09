exports.id = 'user';
exports.version = '1.01';


NEWSCHEMA('User').make(function(schema) {

    schema.define('id', 'UID');
    schema.define('firstname', 'Capitalize(50)', true);
    schema.define('lastname', 'Capitalize(50)');
   // schema.define('billingaddress', 'Address', true);
   // schema.define('postaladdress', 'Address', true);
    //schema.define('jobs', '[Job]');
    schema.define('hobbies', '[Hobby]');
    schema.define('age', Number, true);
    schema.define('email', 'Email', true);
    schema.define('password','String',true);
    schema.define('roles', 'String(10)', true);
    
  
    // The framework has own built-in validation mechanism for "Email", "Phone" and "Zip" types.
    // Sets the validation for "name" and "age" fields
    schema.setValidate(function(name, value, path, schema, model) {
        switch (name) {
            case 'firstname':
                return value.length > 3;
            case 'age':
                return value > 15 && value < 80;
        }        
    });

    schema.setSave(function(error, model, options, callback, controller) {

        var insert = model.id ? false : true;
        var sql = DB(error);
        var passwordToSave = F.encrypt(model.password,'0passM@ns03rs');
        console.log('enc created : '+passwordToSave);
        // Is it a new user?
        if (insert)
            model.id = UID();

        // Need a transaction?
         sql.begin();

        sql.save('save', 'tbl_user', insert, function(builder, isInsert) {

            builder.set('firstname', model.firstname);
            builder.set('lastname', model.lastname);
            builder.set('email', model.email);
            builder.set('password', passwordToSave);
            builder.set('age', model.age);
            builder.set('roles', model.roles);

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
        sql.validate('save', 'User doesn\'t exist.');

        // We perform update
        if (!insert) {
            // Removes old data
            //sql.remove('tbl_user_address').where('iduser', model.id);
            sql.remove('tbl_user_hobby').where('iduser', model.id);
            //sql.remove('tbl_user_job').where('iduser', model.id);
        }

        // Insert billing address
//        sql.insert('tbl_user_address').make(function(builder) {
//            builder.set('type', 'billing');
//            builder.set(model.billingaddress);
//            builder.set('iduser', model.id);
//
//            // A primary key is "id" (by default), but this table doesn't contain it.
//            builder.primary('iduser');
//        });

        // Insert postal address
//        sql.insert('tbl_user_address').make(function(builder) {
//            builder.set('type', 'postal');
//            builder.set(model.postaladdress);
//            builder.set('iduser', model.id);
//
//            // A primary key is "id" (by default), but this table doesn't contain it.
//            builder.primary('iduser');
//        });

        // Insert jobs
//        model.jobs.forEach(function(item) {
//            sql.insert('tbl_user_job').make(function(builder) {
//                builder.set(item);
//                builder.set('iduser', model.id);
//
//                // A primary key is "id" (by default), but this table doesn't contain it.
//                builder.primary('iduser');
//            });
//        });

        // Insert hobbies
        model.hobbies.forEach(function(item) {
            sql.insert('tbl_user_hobby').make(function(builder) {
                builder.set(item);
                builder.set('iduser', model.id);

                // A primary key is "id" (by default), but this table doesn't contain it.
                builder.primary('iduser');
            });
        });

        // Transaction?
         sql.commit();

        // Execute all queries
        sql.exec(function(err, response) {
            callback(SUCCESS(true, model.id));
        });
    });
});
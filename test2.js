require('total.js');
require('sqlagent/pg').init('postgre://postgres:admin@127.0.0.1:5432/aspirasi_siantar');

NEWSCHEMA('Hobby').make(function(schema) {
    schema.define('name', 'String(50)', true);
});

NEWSCHEMA('Job').make(function(schema) {
    schema.define('name', 'String(50)', true);
    schema.define('year', Number);
});

NEWSCHEMA('Address').make(function(schema) {
    schema.define('street', 'Capitalize(50)', true);
    schema.define('zip', 'Zip', true);
    schema.define('city', 'Capitalize(50)', true);
    schema.define('country', 'Capitalize(50)');
    schema.define('state', 'Capitalize(50)', true);
});

NEWSCHEMA('User').make(function(schema) {

    schema.define('id', 'UID');
    schema.define('firstname', 'Capitalize(50)');
    schema.define('lastname', 'Capitalize(50)');
    schema.define('billingaddress', 'Address', true);
    schema.define('postaladdress', 'Address', true);
    schema.define('jobs', '[Job]');
    schema.define('hobbies', '[Hobby]');
    schema.define('email', 'Email');

    schema.setSave(function(error, model, options, callback, controller) {

        var insert = model.id ? false : true;
        var sql = DB(error);

        // Is it a new user?
        if (insert)
            model.id = UID();

        // Need a transaction?
        // sql.begin();

        sql.save('save', 'tbl_user', insert, function(builder, isInsert) {

            builder.set('firstname', model.firstname);
            builder.set('lastname', model.lastname);
            builder.set('email', model.email);

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
            sql.remove('tbl_user_address').where('iduser', model.id);
            sql.remove('tbl_user_hobby').where('iduser', model.id);
            sql.remove('tbl_user_job').where('iduser', model.id);
        }

        // Insert billing address
        sql.insert('tbl_user_address').make(function(builder) {
            builder.set('type', 'billing');
            builder.set(model.billingaddress);
            builder.set('iduser', model.id);

            // A primary key is "id" (by default), but this table doesn't contain it.
            builder.primary('iduser');
        });

        // Insert postal address
        sql.insert('tbl_user_address').make(function(builder) {
            builder.set('type', 'postal');
            builder.set(model.postaladdress);
            builder.set('iduser', model.id);

            // A primary key is "id" (by default), but this table doesn't contain it.
            builder.primary('iduser');
        });

        // Insert jobs
        model.jobs.forEach(function(item) {
            sql.insert('tbl_user_job').make(function(builder) {
                builder.set(item);
                builder.set('iduser', model.id);

                // A primary key is "id" (by default), but this table doesn't contain it.
                builder.primary('iduser');
            });
        });

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
        // sql.commit();

        // Execute all queries
        sql.exec(function(err, response) {
            callback(SUCCESS(true, model.id));
        });
    });
});

function save() {
    var user = {};

    // user.id = 'IF YOU WANT TO MODIFY EXISTING USER';
    user.firstname = 'Peter';
    user.lastname = 'Sirka';

    user.billingaddress = {};
    user.billingaddress.street = 'Viestova 28';
    user.billingaddress.zip = '97401';
    user.billingaddress.city = 'Banska Bystrica';
    user.billingaddress.state = 'Slovakia';

    user.postaladdress = {};
    user.postaladdress.street = 'Viestova 28';
    user.postaladdress.zip = '97401';
    user.postaladdress.city = 'Banska Bystrica';
    user.postaladdress.state = 'Slovakia';

    user.jobs = [];
    user.jobs.push({ name: 'Web Developer', year: 2006 });
    user.jobs.push({ name: 'Student', year: 2000 });

    user.hobbies = [];
    user.hobbies.push({ name: 'Programming'});
    user.hobbies.push({ name: 'Motocycles'});
    user.hobbies.push({ name: 'Airsoft'});
    user.hobbies.push({ name: 'Mountains'});

    var schema = GETSCHEMA('User').make(user);
    schema.$save((err, response) => console.log(err, response));
}

// Save the data
save();


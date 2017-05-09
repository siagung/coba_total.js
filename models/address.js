exports.id = 'address';
exports.version = '1.01';


NEWSCHEMA('Address').make(function(schema) {

    schema.define('street', 'Capitalize(50)');
    schema.define('zip', 'Zip');
    schema.define('city', 'Capitalize(50)');
    schema.define('country', 'Capitalize(50)');
    schema.define('state', 'Capitalize(50)');

    schema.setSave(function(error, model, options, callback, controller) {

        // We expect: model.iduser, model.type

        var sql = DB(error);

        if (model.$repository('update'))
            sql.remove('tbl_user_address').where('iduser', model.iduser);

        sql.insert('tbl_user_address').make(function(builder) {
            builder.set(model);
            builder.set('iduser', model.iduser);

            // A primary key is "id" (by default), but this table doesn't contain it.
            builder.primary('iduser');
        });

        sql.exec(() => callback(SUCCESS(true)));
    });

});
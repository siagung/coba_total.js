exports.id = 'hobby';
exports.version = '1.01';

//NEWSCHEMA('Hobby').make(function(schema) {
//    schema.define('name', 'String(50)', true);
//});


NEWSCHEMA('Hobby').make(function(schema) {

    schema.define('name', 'String(50)', true);

    schema.setSave(function(error, model, options, callback, controller) {

        // We expect: model.iduser

        var sql = DB(error);

        if (model.$repository('update'))
            sql.remove('tbl_user_hobby').where('iduser', model.iduser);

        sql.insert('tbl_user_hobby').make(function(builder) {
            builder.set(model);
            builder.set('iduser', model.iduser);

            // A primary key is "id" (by default), but this table doesn't contain it.
            builder.primary('iduser');
        });

        sql.exec(() => callback(SUCCESS(true)));
    });

});
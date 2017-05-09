exports.install = function () {

    // Sets cors for this API
    //F.cors('/api.v1/*', ['get', 'post', 'put', 'delete'], true);

    // Creates routes
    //F.restful('/api.v1/users/', ['*User'], user_query, user_read, user_save, user_delete);

   // F.route('/api.v1/users/', user_save, ['post', '*User']);
    //F.route('/api.v1/users2/', json_save, ['post', '*User']);
    //F.route('/api.v1/users2/{id}/', json_save, ['put', '*User']);
   // Unauthorized
   

    
    F.route('/api.v1/users/', user_save, ['post', '*User']);
    F.route('/api.v1/users/{id}/', user_save,    ['put', '*User']);
    //F.route('/api.v1/users/{id}/', user_delete,  ['delete', '*User']);
};


function json_save(id) {
    var self = this;

    if (id)
        self.body.id = id;
    
    
    self.$save(self.callback());
}

function user_save() {

    var self = this;
    //if (id)
    //self.body.id = id;
    //self.$save(self.callback());
    var user = {};

    //user.id = '17042012060001xey1';
    user.firstname = self.body.firstname;
    user.lastname = 'lastname';
    //user.lastname = self.body.lastname;
    user.email = self.body.email;
    user.age = self.body.age;
    //user.roles = self.body.roles;
    user.roles = 'users';
    user.password = self.body.password;

    console.log('client_id : '+self.body.client_id);
    console.log('client_secret : '+self.body.client_secret);
    console.log('tag : '+self.body.tag);
    console.log('firstname : '+self.body.firstname);
    console.log('tag : '+self.body.password);
    console.log('email : '+self.body.username);
    console.log('email 2 : '+self.body.email);
    //console.log(self.body.billingaddress.street);
//    user.billingaddress = {};
//    user.billingaddress.street = 'bill 28';
//    user.billingaddress.zip = 'bill zzzzzzz';
//    user.billingaddress.city = 'bill Bystrica';
//    user.billingaddress.state = 'bill ssss';
//////
//    user.postaladdress = {};
//    user.postaladdress.street = 'postal 28';
//    user.postaladdress.zip = '97401';
//    user.postaladdress.city = 'postal Bystrica';
//    user.postaladdress.state = 'postal Slovakia';
//
//    user.jobs = [];
//    user.jobs.push({name: 'Delphi Developer', year: 2006});
//    user.jobs.push({name: 'Vegas', year: 2000});
//
    user.hobbies = [];
    user.hobbies.push({name: 'Programming a'});
    user.hobbies.push({name: 'Renang'});
    user.hobbies.push({name: 'Sepeda'});
    user.hobbies.push({name: 'GUnung'});

    var schema = GETSCHEMA('User').make(user);

    schema.$save(self.callback());
    //schema2.$save((err, response) => console.log(err, response));
}

function view_logged() {
  //  this.view('logged');
    this.json([SUCCESS(true)]);
}

function view_unlogged() {
  // this.callback(SUCCESS(true),'unloged');
  this.json([SUCCESS(true)]);
   //this.plain(SUCCESS(true),'unloged');
}

//
//function user_query() {
//	var self = this;
//	var options = {};
//
//	options.search = self.query.search;
//
//	self.$query(options, self.callback());
//}
//
//function user_save(id) {
//    var self = this;
//    if (id)
//        self.body.id = id;
//    self.$save(self.callback());
//}
//
//function user_read(id) {
//	var self = this;
//	var options = {};
//
//	options.id = id;
//
//	self.$get(options, self.callback());
//}
//
//
//function user_delete(id) {
//	var self = this;
//	var options = {};
//
//	options.id = id;
//
//	self.$remove(options, self.callback());
//}
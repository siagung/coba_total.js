exports.install = function () {

    // Sets cors for this API
    //F.cors('/api.v1/auth/*', ['get', 'post', 'put', 'delete'], true);

    // Authorized
    F.route('/api.v1/auth/logoff/', auth_logoff, ['authorize']);
    F.route('/api.v1/auth/account/', auth_authorize, ['authorize']);
    F.route('/api.v1/auth/account_details/', auth_details, ['authorize']);
    F.route('/api.v1/auth/login/', auth_login, ['unauthorize', 'post']);

};

function auth_logoff() {

    var self = this;
    var auth = MODULE('auth');
    var user = self.user;

    // remove cookie
    // remove user session
    // @controller {Controller}
    // @id {String}
    auth.logoff(self, user.id);

    self.json({logoff: true});
}

function auth_authorize() {
    var self = this;
    var user = self.user;

    // user.id
    // user.alias
    self.json({user});
    //self.view('profile');
}

function auth_details() {
    var self = this;
    var user = self.user;
    var options = {};

    options.id = user.id;
    //options.password = self.body.password;
    console.log(user.id);
    F.model('auth').account_details(self, options, self.callback());
}


function auth_login() {
    var self = this;
    var options = {};

    options.email = self.body.username;
    options.password = self.body.password;
    //Utils.trim({ name: '  PETER SIRKA  ' });
    //console.log('satu : '+Utils.trim({ name: '  PETER SIRKA  ' }););
    //var salt = F.encrypt(options.password,'0passM@ns03r');
 
// Salt and hash password
    console.log('client_id : '+self.body.client_id);
    console.log('client_secret : '+self.body.client_secret);
    console.log('tag : '+self.body.tag);
    console.log('email : '+self.body.username);
    var passwordToSave = F.encrypt(options.password,'0passM@ns03rs');
    //console.log('enc : '+passwordToSave);
    var passwordToDecrypt = F.decrypt(passwordToSave,'0passM@ns03rs');
    console.log('dec : '+passwordToDecrypt);
    F.model('auth').login(self, options, self.callback());
}
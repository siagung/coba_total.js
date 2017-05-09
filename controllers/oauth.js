exports.install = function() {
    //F.route('/api.v1/oauth/login/github/', oauth_login, ['unauthorize']);
    //F.route('/api.v1/oauth/login/github/callback/', oauth_login_callback, ['unauthorize']);
    F.route('/api.v1/oauth/login/facebook/', oauth_login_fb, ['unauthorize']);
    F.route('/api.v1/oauth/login/facebook/callback/', oauth_login_callback_fb, ['unauthorize']);
    
//    F.route('/api.v1/oauth/login/dropbox/', oauth_login, ['unauthorize']);
//    F.route('/api.v1/oauth/login/dropbox/callback/', oauth_login_callback, ['unauthorize']);
//    F.route('/api.v1/oauth/login/linkedin/', oauth_login, ['unauthorize']);
//    F.route('/api.v1/oauth/login/linkedin/callback/', oauth_login_callback, ['unauthorize']);
//    F.route('/api.v1/oauth/login/google/', oauth_login, ['unauthorize']);
//    F.route('/api.v1/oauth/login/google/callback/', oauth_login_callback, ['unauthorize']);
//    F.route('/api.v1/oauth/login/yahoo/', oauth_login, ['unauthorize']);
//    F.route('/api.v1/oauth/login/yahoo/callback/', oauth_login_callback, ['unauthorize']);
//    F.route('/api.v1/oauth/login/live/', oauth_login, ['unauthorize']);
//    F.route('/api.v1/oauth/login/live/callback/', oauth_login_callback, ['unauthorize']);
//    F.route('/api.v1/oauth/login/instagram/', oauth_login, ['unauthorize']);
//    F.route('/api.v1/oauth/login/instagram/callback/', oauth_login_callback, ['unauthorize']);
    
}

// Controller action
function oauth_login_fb() {

    var self = this;
    var type = self.req.path[1];
    
    // config:
    // oauth2.google.key =
    // oauth2.google.secret =
    // oauth2.github.key =
    // oauth2.github.secret =
    // ...
    
    MODULE('oauth2').redirect(type, CONFIG('oauth2.' + type + '.key'), self.host('/login/' + type + '/callback/'), self);

}

// Controller action
function oauth_login_callback_fb() {
    var self = this;
    var type = self.req.path[1];
    var url = self.host('/login/' + type + '/callback/');

    // config:
    // oauth2.google.key =
    // oauth2.google.secret =
    // oauth2.github.key =
    // oauth2.github.secret =
    // ...

    MODULE('oauth2').callback(type, CONFIG('oauth2.' + type + '.key'), CONFIG('oauth2.' + type + '.secret'), url, self, function(err, profile) {
        console.log(profile);
        self.json(SUCCESS(true));
    });
}


// Controller action
function oauth_login() {
    var self = this;
    var type = self.req.path[1];
    
    // config:
    // oauth2.google.key =
    // oauth2.google.secret =
    // oauth2.github.key =
    // oauth2.github.secret =
    // ...

    MODULE('oauth2').redirect(type, CONFIG('oauth2.' + type + '.key'), self.host('/login/' + type + '/callback/'), self);
}

// Controller action
function oauth_login_callback() {
    var self = this;
    var type = self.req.path[1];
    var url = self.host('/login/' + type + '/callback/');

    // config:
    // oauth2.google.key =
    // oauth2.google.secret =
    // oauth2.github.key =
    // oauth2.github.secret =
    // ...

    MODULE('oauth2').callback(type, CONFIG('oauth2.' + type + '.key'), CONFIG('oauth2.' + type + '.secret'), url, self, function(err, profile) {
        console.log(profile);
        self.json(SUCCESS(true));
    });
}
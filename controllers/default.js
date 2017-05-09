exports.install = function() {
    F.cors('/api.v1/*', ['get', 'post', 'put', 'delete'], true);	
    F.route('/', plain_version);
};

function plain_version() {
	var self = this;
	self.plain('REST Service {0}\nVersion: {1}'.format(F.config.name, F.config.version));
}
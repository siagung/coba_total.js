exports.install = function () {
    F.route('/api.v1/movie/',movie_query,['*Movie']);
    F.route('/api.v1/movie/',movie_save,['post', '*Movie']);
    F.route('/api.v1/movie/{id}/',movie_read,['put', '*Movie']);
};

function movie_query() {
 var self = this;
 var options = {};

 options.search = self.query.search;

 console.log('sss -> '+self.query.api_key);
 //console.log('body -> '+self.body.api_key);

 var schema = GETSCHEMA('Movie').make();

 schema.$get(self.callback());

 //self.$query(options, self.callback());
}

function movie_save(id) {
    var self = this;
    var movie = {};
    movie.type = self.body.type;
    movie.id = self.body.id;
    movie.title = self.body.title;
    movie.poster_path = self.body.poster_path;
    movie.adult = self.body.adult;
    movie.overview = self.body.overview;
    movie.release_date = self.body.release_date;
    movie.vote_average = self.body.vote_average;

    //console.log('type -> '+movie.type );
     console.log('sss ID -> '+self.query.id);
      console.log('sss title-> '+self.query.title);
       console.log('sss overview-> '+self.query.overview);

    var schema = GETSCHEMA('Movie').make(movie);

    schema.$save(self.callback());
}
   // F.model('auth').login(self, options, self.callback());

function movie_read(id) {
 var self = this;
 var options = {};

 options.id = id;

 self.$get(options, self.callback());
}
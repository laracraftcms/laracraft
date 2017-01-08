const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// This should correspond to the app.assetBuildPath config value
elixir.config.versioning.buildFolder ='';


elixir(function(mix) {
    mix.sass('app.scss')
       .webpack('app.js');

	mix.version(['js/app.js']);
});

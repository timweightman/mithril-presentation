// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  //theme = require('bespoke-theme-voltaire'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  // notes = require('bespoke-notes'),
  progress = require('bespoke-progress');

// Bespoke.js
bespoke.from('article', [
  classes(),
  // notes(),
  //theme(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

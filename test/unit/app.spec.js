'use strict';

var helpers = require('yeoman-test');
var assert = require('yeoman-assert');
var generator = process.env.PWD + '/app';

describe('basicSassProject generator', function() {
  before(function (done) {
    helpers
      .run(generator)
      .on('end', done);
  });

  it('scaffolding', function () {
    assert.file([
      'assets/html/index.html',
      'assets/sass/style.scss',
      '.editorconfig',
      '.gitignore',
      'Gruntfile.js',
      'LICENSE',
      'package.json'
    ]);
  });
});

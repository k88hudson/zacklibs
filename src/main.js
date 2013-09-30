requirejs.config({
  baseUrl: '../bower_components',
  paths: {
    main: '../src/main',
    nunjucks: 'nunjucks/browser/nunjucks',
    templates: '../templates',
    jquery: 'jquery/jquery',
    text: 'text/text'
  }
});

require([
  'jquery',
  'templates',
  'nunjucks',
  'text!../src/words.json'

], function (
  $,
  templates,
  nunjucks,
  words
){

  function word(type) {
    var list = words[type];
    return list[Math.floor(Math.random() * list.length)];
  }

  console.log(words);

//     var title = req.body.title;
//     var text = 'I\'ve been ' + word('adverb') + ' enjoying the ' + word('adjective') + title + 'as of late–' + word('phrase') + '—I ' word('adverb') + ' ' + word('verb') ' through a ' + word('adjective') + ' ' + word('noun') + '; practically a ' + word('noun') + ', ' + word('phrase') + '.';

// });

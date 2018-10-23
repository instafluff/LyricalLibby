var express = require('express');
var router = express.Router();
var fs = require('fs');
var WordPOS = require('wordpos'),
    wordpos = new WordPOS();

/* GET home page. */
router.get('/', function(req, res, next) {
  let originalStory = getStoryText();
  addStoryBlanks( originalStory.slice(0), ( story, htmlStory ) => {
    console.log( htmlStory );
    res.render('index', { title: "LyricalLibby! - Mad-libs via Twitch Chat with speech! Chat-Integrated Story Writing", username: process.env.TWITCHUSER, oauth: process.env.OAUTH, story: story, htmlStory: htmlStory });
  }, 10 );
});

function addStoryBlanks( text, callback, maxBlanks = 0 ) {
  wordpos.getPOS( text.toLowerCase(), ({ nouns, verbs, adjectives, adverbs, rest }) => {
    var replacedText = text;
    var replacedHTML = text;
    for( var i = maxBlanks; i > 0; i-- ) {
      switch( getRandomInt( 4 ) ) {
        case 0:
          if( adjectives.length > 0 ) {
            var adjIndex = getRandomInt( adjectives.length );
            replacedText = replacedText.replace( adjectives[ adjIndex ], "____" );
            replacedHTML = replacedHTML.replace( adjectives[ adjIndex ], "<span class='replaced' style='color: #66ABEF;'><u>____</u><small>(adjective)</small></span>" );
            adjectives.splice( adjIndex, 1 );
          }
          break;
        case 1:
          if( nouns.length > 0 ) {
            var index = getRandomInt( nouns.length );
            replacedText = replacedText.replace( nouns[ index ], "____" );
            replacedHTML = replacedHTML.replace( nouns[ index ], "<span class='replaced' style='color: #66ABEF;'><u>____</u><small>(noun)</small></span>" );
            nouns.splice( index, 1 );
          }
          break;
        case 2:
          if( verbs.length > 0 ) {
            var index = getRandomInt( verbs.length );
            replacedText = replacedText.replace( verbs[ index ], "____" );
            replacedHTML = replacedHTML.replace( verbs[ index ], "<span class='replaced' style='color: #66ABEF;'><u>____</u><small>(verb)</small></span>" );
            verbs.splice( index, 1 );
          }
          break;
        case 3:
          if( adverbs.length > 0 ) {
            var index = getRandomInt( adverbs.length );
            replacedText = replacedText.replace( adverbs[ index ], "____" );
            replacedHTML = replacedHTML.replace( adverbs[ index ], "<span class='replaced' style='color: #66ABEF;'><u>____</u><small>(adverb)</small></span>" );
            adverbs.splice( index, 1 );
          }
          break;
      }
    }
    if( callback ) {
      callback( replacedText, replacedHTML );
    }
  } );
}

function getStoryText() {
  var storytext = fs.readFileSync( "story.txt", "utf-8" );
  var parts = storytext.split( "\n\n" );
  var selectedParagraph = parts[ getRandomInt( parts.length ) ];
  return selectedParagraph;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = router;

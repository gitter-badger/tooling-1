var tweet, wordList;

wordList = ["coffeescript", "eko", "play framework", "and stuff", "falsy"];

tweet = "This is an example tweet talking about javascript and stuff.";

wordList.some(function(word) {
  return ~tweet.indexOf(word);
});

//# sourceMappingURL=myCoffeeScript.js.map

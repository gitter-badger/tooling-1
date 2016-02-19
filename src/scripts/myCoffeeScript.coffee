wordList = ["coffeescript", "eko", "play framework", "and stuff", "falsy"]
tweet = "This is an example tweet talking about javascript and stuff."

wordList.some (word) -> ~tweet.indexOf word

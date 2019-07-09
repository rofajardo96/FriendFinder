// Handles incoming survey results and the logic determining compatibility
//Load Data
var friendArray = require('../data/friends.js');

module.exports = function(app){
  // displays JSON 
  app.get('/api/friends', function(req,res){
    res.json(friendArray);
  });

  app.post('/api/friends', function(req,res){
    //takes new scores to compare with existing people in array
    var newScore = req.body.scores;
    var scoreArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //goes through all friends in list
    for(var i = 0; i < friendList.length; i++){
      var scoreDiff = 0;
      //goes through scores to compare friends
      for(var j = 0; j < newScore.length; j++){
        scoreDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newScore[j])));
      }

      //push results into scoresArray
      scoreArray.push(scoreDiff);
    }

    // find best match after score comparison
    for(var i=0; i<scoresArray.length; i++){
      if(scoreArray[i] <= scoreArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return data
    var bff = friendArray[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendArray.push(req.body);
  });
};

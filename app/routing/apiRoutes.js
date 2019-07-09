// Pull required dependencies
var path = require('path');

// Import list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input
		var userInput = req.body;

		var userResponses = userInput.scores;
		

		// Calculate best match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 1000; 

		// Go through all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Calculate differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			// If lowest difference, record the friend match
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};
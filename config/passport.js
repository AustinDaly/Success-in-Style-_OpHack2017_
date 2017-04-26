var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy(
	{
		usernameField: 'email'
	},
	function (username, password, done)
	{
		User.findOne({ email: username },
		function (err, user)
		{
			//Using specific messages instead of generic ones for debugging.
			//Will change later
			if (err)
			{ return done(err); }
			if (!user)
			{
				return done(null, false,
				{
					message: 'Incorrect username.'
				});
			}

			if (!user.validPassword(password))
			{
				return done(null, false,
					{
					message: 'Incorrect password.'
				}
				);
			}

			//Passed all checks.
			return done(null, user);
		}
		);
	}
));

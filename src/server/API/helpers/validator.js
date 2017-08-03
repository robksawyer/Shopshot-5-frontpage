import Promise from 'bluebird';
import keystone from 'keystone';

const validator = () => {

	function validateKeys(id, secret) {
		var User = keystone.list('User').model;

		return new Promise(function(resolve, reject){
			User.findOne({
				clientId: id,
				clientSecret: secret
			})
			.where('state', 'active')
			.exec(function(err, exists){
				if(err) reject(false);
				var valid = (exists) ? exists : false;
				resolve(valid);
			});
		});
	}
};

export default validator;

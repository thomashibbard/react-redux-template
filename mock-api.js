	var express = require('express')
		, app = express()
		, router = express.Router()
		, path = require('path')
		, bodyParser = require('body-parser')
		, cors = require('cors')
		, path = require('path')
		, fs = require('fs-extra')
		, http = require('http')
		, requestify = require('requestify');

		console.log(app.get('env'));

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(cors());

	const PORT = process.env.PORT || 8081;

	router.use(function timeLog (req, res, next) {
	  console.log('Time: ', Date.now());
	  next();
	});

	router.get('/', function(req, res) {
	  res.json({'path': 'root'});
	});

	router.get('/api/:functionName?/:interestDescriptor?', (req, res) => {
		const interestDescriptor = req.params.interestDescriptor;
		const functionName = req.params.functionName;
		let jsonToReturn;
		switch (functionName) {
			case 'getPosts':
				res.json(getPosts());
				break;
			case 'getFullInterestTypes':
				res.json(getFullInterestTypes());
				break;
			case 'getFullInterestsByInterestType':
				res.json(getFullInterestsByInterestType());
				break;
			case 'getFullPostsByInterest':
				res.json(getFullPostsByInterest(interestDescriptor));
				break;
			case 'getFullPostsByInterestType':
				res.json(getFullPostsByInterestType(interestDescriptor));
				break;
			default:
				jsonToReturn = {error: 'provide function name'};
				break;
		}
		res.json(jsonToReturn);
	});

	app.use('/', router);
	app.use('/public', express.static(path.join(__dirname, 'public')))
	app.listen(PORT, () => {
		var spawn = require('child_process').spawn
		console.log('Listening on PORT', PORT);

	});



	const getPosts = () => (
		require('./contents-samples').getPosts()
	);

	const getFullInterestTypes = () => (
		require('./contents-samples').getFullInterestTypes()
	);

	const getFullInterestsByInterestType = () => (
		require('./contents-samples').getFullInterestsByInterestType()
	);

	const getFullPostsByInterest = (interestDescriptor) => (
		require('./contents-samples').getFullPostsByInterest(interestDescriptor)
	);

	const getFullPostsByInterestType = (interestDescriptor) => (
		require('./contents-samples').getFullPostsByInterestType(interestDescriptor)
	);


	const random = (min, max) => (
		Math.random() * (max - min) + min
	);

	const randomLorem = (min = 150, max = 500) =>  (
		fs.readFileSync('./lorem-ipsum.txt', 'utf8').split(/\n/).filter(Boolean).join('').split(/\s/gmi).slice(0, random(15, 150)).join(' ')
	);


/*

//getPosts {ruleID, study_id}
	http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getPosts&paramstudy_id=6054476410954&paramrule_id=%25


//getFullInterestTypes {study_id, rule_id}
	http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getFullInterestTypes&paramstudy_id=6054476410954&paramrule_id=%25


//getFullInterestsByInterestType	 {study_id, rule_id, interest_type}
	http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getFullInterestsByInterestType&paramstudy_id=6053840375154&paramrule_id=%25&paraminterest_type=Brands+(Syndicated)


//getFullPostsByInterest {study_id, rule_id, interest_id}



//getFullPostsByInterestType {study_id, rule_id, interest_type}
	http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getFullPostsByInterestType&paramstudy_id=6053840375154&paramrule_id=%25&paraminterest_type=Brands+(Syndicated)

*/

// const cookie = 'JSESSIONID=6EF62ACDA900EDF075535FBEA2E1DAF9';
// const headers = {
// 	'Cookie': cookie
// }
// const options = {
// 	hostname: '104.154.200.92',
// 	port: 8080,
// 	path: '/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getFullPostsByInterestType&paramstudy_id=6053840375154&paramrule_id=%25&paraminterest_type=Brands+(Syndicated)',
// 	method: 'GET',
// 	headers: {
// 		'Cookie': cookie
// 	}
// }









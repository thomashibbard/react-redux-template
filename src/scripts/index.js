import 'babel-polyfill';
import { _ } from 'underscore';


// import { createStore } from 'redux';
// import { createAction } from 'redux-actions';





// import { promiseMiddleware } from 'redux-promise';

// import { sort } from './reducers';

//`getPosts`										getPosts {ruleID, audienceID}
//`getFullInterestTypes`
//getFullInterestsByInterestType
//`getFullPostsByInterest`
//`getFullPostsByInterestType`



$(function() {


	const API_ROOT_ADDRESS = 'http://localhost:8081'
	window.globalStore = window.globalStore || {};

	const getPosts = () => (

		//http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getPosts&paramstudy_id=6053840322354&paramrule_id=%25

		/*
		** var postData = {
		**   dataAccessId: 'getPosts',
		**   path: decodeURIComponent('%2Fpublic%2Ffacebook_aud%2Ffb_posts_detial.cda'),
		**   paramrule_id: parmRuleId,
		**   paramstudy_id: parmStudyId,
		**   outputIndexId: 1
		** }
		*/


		$.getJSON(`${API_ROOT_ADDRESS}/api/getPosts/`)
	);

	const processPosts = posts => (
		posts.resultset
			.map(post => (
				 {
					dateReceived: post[0],
					postDate: post[1],
					id: post[2],
					content: post[3],
				}
			)
		)
	);


	/*	http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getFullInterests&paramstudy_id=6053840375154&paramrule_id=%25&paraminterest_type=Media+%26+Web+(Syndicated)		/* POST TO ASYNC
	**	dataAccessId => getFullInterestsByInterestType
	**	VM1542:1 paramstudy_id => 6053840375154
	**	VM1542:1 paramrule_id => %25
	**	VM1542:1 paraminterest_type => Media+%26+Web+(Syndicated)
	*/
	const getFullInterestsByInterestType = interestType => (
		$.getJSON(`${API_ROOT_ADDRESS}/api/getFullInterestsByInterestType/`)
	);


	const processInterests = interestJSON => (
		interestJSON
			.resultset
			.map( interest => (
				{
					id: interest[0],
					name: interest[1],
					interestGroupsParent: interest[2],
					count: interest[3],
				}
			)
		)
	);

	/*	http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda&dataAccessId=getFullInterestTypes&paramstudy_id=6054476410954&paramrule_id=%25
	**	dataAccessId: 'getFullInterestTypes',
	**	path: decodeURIComponent('%2Fpublic%2Ffacebook_aud%2Ffb_posts_detial.cda'),
	**	rule_id: parmRuleId,
	**	study_id: parmStudyId,
	**	outputIndexId: 1
	*/
	const getFullInterestTypes = () => (
		$.getJSON(`${API_ROOT_ADDRESS}/api/getFullInterestTypes/`)
	);

	const processInterestGroups = interestGroupsJSON => (
		interestGroupsJSON
			.resultset
			.map( interestGroups => (
				{
					id: interestGroups[0],
					name: interestGroups[1],
					count: interestGroups[2]
				}
			)
		)
	);

	const getPostsByInterestType = () => (
		$.get(`${API_ROOT_ADDRESS}/api/getFullPostsByInterestType/`)
	);

	$.when(
		getFullInterestTypes(),
		getPosts(),
	)
	.done((interestGroupsRes, postsRes) => {
		window.globalStore.interestGroupsData = processInterestGroups(interestGroupsRes[0]);
		window.globalStore.postsData = processPosts(postsRes[0]);
		buildInterestFilters(true, interestGroupsRes[0]);
		buildPosts(postsRes[0]);
	});

	const buildInterestFilters = (firstRun = false, interestGroupsData) => {
		interestGroupsData = processInterestGroups(interestGroupsData);
		const interestGroupsHook = $('#interest_group_hook');
		const interestGroupsTmpl = $('#interest_group_tmpl').html();
		const interestGroupsRend = _.template(interestGroupsTmpl)({ interestGroupsData });

		interestGroupsHook.html(interestGroupsRend);
		bindinterestGroupsClick();
	};

	const buildPosts = postsData => {
		postsData = processPosts(postsData);

		const $postsHook = $('#posts_list_hook');
		const postsTmpl = $('#posts_list_tmpl').html();
		const postsRend = _.template(postsTmpl)({ postsData });
		$postsHook.html(postsRend);
		$('.grid').masonry({
				itemSelector: '.grid-item',
				columnWidth: 10,
				gutter: 30
			});
	};

	const bindinterestGroupsClick = () => {
		const toggleInterests = (evt) => {
			let $currentlyToggling = $(evt.currentTarget);
			if($currentlyToggling.hasClass('active')) {
				$currentlyToggling.siblings('.interest__item__hook')
					.find('.interest__list').remove();
			} else {
				let interestGroupsName = $currentlyToggling
					.find('.interest-group__item--name')
					.text();

				$.when(
					getFullInterestsByInterestType(interestGroupsName),
					getPostsByInterestType(interestGroupsName)
				)
				.done((interestsByInterestTypeRes, postsByGroupRes) => {

					// updatePosts(postsByGroupRes[0]);
					updateInterests(interestsByInterestTypeRes[0], $currentlyToggling);
				});

			}

			$currentlyToggling.add(
				$currentlyToggling
					.closest('.interest-group__item')
			).toggleClass('active');
		};

		const updateInterests = (interestData, $currentlyToggling) => {

			interestData = processInterests(interestData);

			const selectors = {
				interestTmpl: '#interest_tmpl',
				parentGroupInterestContainer: '.interest-group__item__container',
				interestHook: '.interest__item__hook',
				icon: '.interest__list'
			};

			const $objs = {
				interestTmpl: $(selectors.interestTmpl),
			};

			const template = $objs.interestTmpl.html();
			const rendered = _.template(template)({interestData: interestData});

			$currentlyToggling
				.siblings(selectors.interestHook)
				.html(rendered);

		};



		$('body').on('click',
			'.interest-group__item__container',
			toggleInterests);


	}











	const handleXHRErr = (jqXHR, textStatus, errorThrown) => {
		console.error('xrh error', jqXHR);
		console.error('xrh error', textStatus);
		console.error('xrh error', errorThrown);
	};
});

// import 'babel-polyfill';
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


	const setLocalStorage = (target, key, value) => {
	  if(localStorage.getItem(target) === null) {
	    localStorage.setItem(target, JSON.stringify({}));
	  }
	  localStorage.setItem(target,
	    JSON.stringify(
	      {
	        ...JSON.parse(localStorage.getItem(target)),
	        [key]: value
	      }
	    )
	  );
	};

	const getLocalStorage = target => {
	  if(localStorage.getItem(target) !== null) {
		  return JSON.parse(localStorage.getItem(target));
	  }else{
	    return undefined;
	  }
	};



	const API_ROOT_ADDRESS = 'http://localhost:8081';
	const GLOBAL_STORE_NAME = 'PostsGlobalStore';
	const ANIMATION_DURATION = 500;
	const SHOW_MORE_TEXT = 'More';
	const SHOW_LESS_TEXT = 'Close';
	localStorage.removeItem(GLOBAL_STORE_NAME);
	setLocalStorage(GLOBAL_STORE_NAME, {});
	setLocalStorage(GLOBAL_STORE_NAME, 'sortDirection', 'NEWEST_FIRST');


	const sortPosts = (sortType = 'default') => {
	  return (a, b) => {
	    const sorts = {
	      NEWEST_FIRST: () => (
	        new Date(b.postDate) - new Date(a.postDate)
	      ),
	      OLDEST_FIRST: () => (
	        new Date(a.postDate) - new Date(b.postDate)
	      ),
	      default: () => (
	        new Date(b.postDate) - new Date(a.postDate)
	      ),
	    };
	    return (sorts[sortType] || sorts['default'])();
	  }
	};


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

	const processPosts = (posts, sortDirection) => (
		(posts.resultset
			.map(post => ({
					dateReceived: post[0],
					postDate: post[1],
					id: post[2],
					content: post[3],
				})
			)
		.sort(sortPosts(sortDirection))
		)
	);

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
					interestTypesParent: interest[2],
					count: interest[3],
				}
			)
		)
	);

	const getFullInterestTypes = () => (
		$.getJSON(`${API_ROOT_ADDRESS}/api/getFullInterestTypes/`)
	);

	const processInterestGroups = interestTypesJSON => (
		interestTypesJSON
			.resultset
			.map( interestTypes => (
				{
					id: interestTypes[0],
					name: interestTypes[1],
					count: interestTypes[2]
				}
			)
		)
	);

	const getPostsByInterestType = () => (
		$.get(`${API_ROOT_ADDRESS}/api/getFullPostsByInterestType/`)
	);

	const getFullPostsByInterest = (interestId) => (
		$.get(`${API_ROOT_ADDRESS}/api/getFullPostsByInterest/`)
	);




	const mosonrizeGrid = (firstLoad) => {
		$('.post-items__row').masonry({
			itemSelector: '.grid-item',
			columnWidth: 10,
			gutter: 30,
		});
	};



	/* PAGE LOAD */
	$.when(
		getFullInterestTypes(),
		getPosts(),
	)
	.done((interestTypesRes, postsRes) => {
		setLocalStorage(GLOBAL_STORE_NAME, 'interestTypesData', interestTypesRes[0]);
		setLocalStorage(GLOBAL_STORE_NAME, 'postsData', postsRes[0]);
		buildInterestFilters(true, interestTypesRes[0]);
		setLocalStorage(GLOBAL_STORE_NAME, 'currentlyShowingPostsFor', 'all');
		buildPosts();
	});

	const buildInterestFilters = (firstRun = false, interestTypesData) => {
		interestTypesData = processInterestGroups(interestTypesData);
		const interestTypesHook = $('#interest_type_hook');
		const interestTypesTmpl = $('#interest_type_tmpl').html();
		const interestTypesRend = _.template(interestTypesTmpl)({ interestTypesData });
		interestTypesHook.html(interestTypesRend);
		bindinterestTypesClick();
	};

	const buildPosts = () => {
		const postsData = processPosts(getLocalStorage(GLOBAL_STORE_NAME).postsData, getLocalStorage(GLOBAL_STORE_NAME).sortDirection);
		const $postsHook = $('#posts_list_hook');
		const postsTmpl = $('#posts_list_tmpl').html();
		const postsRend = _.template(postsTmpl)({ postsData });
		$postsHook.html(postsRend);
		hideLongText();
		mosonrizeGrid(true);
	};


	/* FILTER BY INTEREST GROUP */
	const bindinterestTypesClick = () => {
		const toggleInterests = (evt) => {
			debugger
			let $currentlyToggling = $(evt.currentTarget);
			if($currentlyToggling.hasClass('active')) {
				$currentlyToggling.siblings('.interest__item__hook')
					.find('.interest__list').remove();
			} else {
				const interestTypeName = $currentlyToggling
					.find('.interest-group__item--name strong')
					.text();
					console.log(interestTypeName);
				$.when(

					getFullInterestsByInterestType(interestTypeName),
					getPostsByInterestType(interestTypeName)
				)
				.done((interestsByInterestTypeRes, postsByGroupRes) => {
					setLocalStorage(GLOBAL_STORE_NAME, 'postsData', postsByGroupRes[0]);
					setLocalStorage(GLOBAL_STORE_NAME, 'currentlyShowingPostsFor', 'interestType');
					buildPosts();
					updateInterests(interestsByInterestTypeRes[0], $currentlyToggling);
					mosonrizeGrid();
					resetSortFilter();
					resetInterestTypeFilters($currentlyToggling);
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
				icon: '.interest__list',
				interestContainer: '.interest-container',
			};

			const $objs = {
				interestTmpl: $(selectors.interestTmpl),
				interestContainer: $(selectors.interestContainer),
			};

			const template = $objs.interestTmpl.html();
			const rendered = _.template(template)({interestData: interestData});

			$currentlyToggling
				.siblings(selectors.interestHook)
				.html(rendered);

			$objs.interestContainer.on('click', '.interest__item', (evt) => {
				const $this = $(evt.currentTarget);
				const interestId = $this.data().interestId;
				getFullPostsByInterest(interestId)
					.then( postsByInterest => {
						setLocalStorage(GLOBAL_STORE_NAME, 'currentlyShowingPostsFor', 'interest');
						setLocalStorage(GLOBAL_STORE_NAME, 'postsData', postsByInterest);
						buildPosts();
					});
			});

		};

		$('body').on('click',
			'.interest-group__item__container',
			toggleInterests);
	};

	/* FILTER BY INTEREST */
	const bindInterestClick = () => {
		resetSortFilter();
	};


	$('body').on('change', '#sort-posts--control', (evt) => {
		// window.globalStore.sortDirection =
		setLocalStorage(GLOBAL_STORE_NAME, 'sortDirection', $(evt.currentTarget).children(':selected').val())

		buildPosts();
	});

	const resetSortFilter = () => {
		$('#sort-posts--control').val('NEWEST_FIRST');
	};

	const resetInterestTypeFilters = $currentlyToggling => {
		const $activeParent = $currentlyToggling.closest('.interest-group__item.active');
		const $toRemoveActiveStates = $('.interest-group__item.active').not($activeParent);
		$toRemoveActiveStates.children('.active').addBack().removeClass('active')
		$toRemoveActiveStates.find('.interest__list').remove();
	};

	const toggleOverflowTextHandler = evt => {

	  let $trigger = $(evt.currentTarget)
	    , $overflowText = $trigger.prev('.overflow-text--hidden')
	    , $expandingCard = $trigger.closest('.grid-item')
	    , prevCardHeight = $expandingCard.outerHeight();

	  $overflowText.toggle();
	  //$overflowText.slideToggle(ANIMATION_DURATION);
	  $trigger.toggleClass('less');
	  $trigger.text(
	  	$trigger.text() === SHOW_MORE_TEXT ? SHOW_LESS_TEXT : SHOW_MORE_TEXT
  	);

	  let currentCardHeight = $expandingCard.outerHeight()
	    , overflowTextHeight = currentCardHeight - prevCardHeight
	    , expandingCardPos = $expandingCard.position();

	  //shift down all cards in the column below the one being expanded
	  let $cards = $('.grid-item').filter((index, currentCard) => {
	      let $currentCardPos = $(currentCard).position();
	      return $currentCardPos.left === expandingCardPos.left && $currentCardPos.top > expandingCardPos.top;
	  })
	  .each((index, currentCard) => {

	    let $currentCard = $(currentCard)
	      , $currentCardPos = $currentCard.position();
	    $currentCard.css('top', ($currentCardPos.top + overflowTextHeight) + 'px');
	    // $currentCard.animate({top: $currentCardPos.top + overflowTextHeight}, ANIMATION_DURATION);
	  });
	}

	const hideLongText = () => {
		$('.post-item--post-text').each((index, el) => {
		  const MAX_LENGTH = 240;

		  let $el = $(el)
		    , text = $el.text().trim()
		    , len = text.length;

		  if(len >= MAX_LENGTH) {

		    //truncated text to display initially
		    let shortText = text.substr(0, MAX_LENGTH);

		    //hidden overflow text
		    let overflowText = $('<span>', {
		      class: 'overflow-text--hidden',
		      text: text.substring(MAX_LENGTH)
		    });

		    //trigger to toggle overflow text's visibililty
		    let overflowTextToggle = $('<span>', {
		      class: 'full-text__trigger',
		      click: toggleOverflowTextHandler,
		      html: SHOW_MORE_TEXT
		    });
		    //dasdf
		    $el.html([shortText, overflowText, overflowTextToggle]);
		  } else {
		    $el.html(text);
		  }
		});
	};




	const handleXHRErr = (jqXHR, textStatus, errorThrown) => {
		console.error('xrh error', jqXHR);
		console.error('xrh error', textStatus);
		console.error('xrh error', errorThrown);
	};
});

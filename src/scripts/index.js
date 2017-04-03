// import 'babel-polyfill';
import { _ } from 'underscore';
// window._ = _;
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
import Masonry from 'masonry-layout'


// window.$ = $;
// window.jQuery = jQuery;

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



		// const DEV_ABSOLUTE_API = 'http://104.154.200.92:8080/pentaho/plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda'; //'http://localhost:8081';

		const LOCAL_API  = '../../../plugin/cda/api/doQuery?path=/public/facebook_aud/fb_posts_detial.cda';
		const GLOBAL_API = '../../../plugin/cda/api/doQuery?path=/public/cde/widgets/sharedResources.cda' ;

		const DEV_API = 'http://localhost:8081';


		const GLOBAL_STORE_NAME = 'PostsGlobalStore';
		const POSTS_PER_PAGE = 10;
		const ANIMATION_DURATION = 500;
		const SHOW_MORE_TEXT = 'More';
		const SHOW_LESS_TEXT = 'Close';
		localStorage.removeItem(GLOBAL_STORE_NAME);
		setLocalStorage(GLOBAL_STORE_NAME, {});
		setLocalStorage(GLOBAL_STORE_NAME, 'sortDirection', 'NEWEST_FIRST');
		setLocalStorage(GLOBAL_STORE_NAME, 'displayedPageIndex', 0);


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

		const getPosts = (studyId, ruleId) => (
			$.getJSON(`${DEV_API}/api/getPosts/`)
			// $.getJSON(`${LOCAL_API}&dataAccessId=getPosts&paramstudy_id=${studyId}&paramrule_id=${encodeURIComponent(ruleId)}`)
		);

		const getFullInterestTypes = (studyId, ruleId) => (
			$.getJSON(`${DEV_API}/api/getFullInterestTypes/`)
			// $.getJSON(`${LOCAL_API}&dataAccessId=getFullInterestTypes&paramstudy_id=${studyId}&paramrule_id=${encodeURIComponent(ruleId)}`)
		);

		const getFullInterestsByInterestType = (studyId, ruleId, interestType) => (
			$.getJSON(`${DEV_API}/api/getFullInterestsByInterestType/`)
			// $.getJSON(`${LOCAL_API}&dataAccessId=getFullInterestsByInterestType&paramstudy_id=${studyId}&paramrule_id=${encodeURIComponent(ruleId)}&paraminterest_type=${encodeURIComponent(interestType)}`)
		);

		const getFullPostsByInterestType = (studyId, ruleId, interestType) => (
			$.get(`${DEV_API}/api/getFullPostsByInterestType/`)
			// $.getJSON(`${LOCAL_API}&dataAccessId=getFullPostsByInterestType&paramstudy_id=${studyId}&paramrule_id=${encodeURIComponent(ruleId)}&paraminterest_type=${encodeURIComponent(interestType)}`)
		);

		const getFullPostsByInterest = (studyId, ruleId, interestId) => (
			$.get(`${DEV_API}/api/getFullPostsByInterest/`)
			// $.getJSON(`${LOCAL_API}&dataAccessId=getFullPostsByInterest&paramstudy_id=${studyId}&paramrule_id=${encodeURIComponent(ruleId)}&paraminterest_id=${interestId}`)
		);

		const processPosts = (posts, sortDirection) => (
			{
				posts: (posts.resultset
					.slice(
						getLocalStorage(GLOBAL_STORE_NAME).displayedPageIndex * POSTS_PER_PAGE,
						POSTS_PER_PAGE
					)
					.map(post => ({
							dateReceived: post[0],
							postDate: post[1],
							id: post[2],
							content: post[3],
						})
					)
				.sort(sortPosts(sortDirection))
				),
				pagination: {
					displayedPageIndex: getLocalStorage(GLOBAL_STORE_NAME).displayedPageIndex,
					postsPerPage: POSTS_PER_PAGE,
					numPosts: posts.resultset.length,
					numPages:  posts.resultset.length/POSTS_PER_PAGE
				}
			}
		);

		const processInterestTypes = interestTypesJSON => (
			interestTypesJSON
				.resultset
				.map( interestTypes => (
					{
						name: interestTypes[0],
						studyId: interestTypes[0],
						ruleId: interestTypes[2],
						count: interestTypes[3]
					}
				)
			)
		);

		const processInterests = interestJSON => (
			interestJSON
				.resultset
				.map( interest => (
					{
					id: interest[0],
					name: interest[1],
					interestTypesParent: interest[2],
					studyId: interest[3],
					ruleId:  interest[4],
					count: interest[5]
					}
				)
			)
		);

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
					$el.html([shortText, overflowText, overflowTextToggle]);
				} else {
					$el.html(text);
				}
			});
		};

		const buildInterestFilters = (firstRun = false, interestTypesData) => {
			interestTypesData = processInterestTypes(interestTypesData);
			const interestTypesHook = $('#interest_type_hook');
			const interestTypesTmpl = $('#interest_type_tmpl').html();
			const interestTypesRend = _.template(interestTypesTmpl)({ interestTypesData });
			interestTypesHook.html(interestTypesRend);
			if(firstRun) {
				bindInterestTypesClick();
			}
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


		const mosonrizeGrid = (firstLoad) => {
			// $('.post-items__row').masonry({
			// 	itemSelector: '.grid-item',
			// 	columnWidth: 263,
			// 	gutter: 10,
			// });

			const msnry = new Masonry(document.querySelector('.post-items__row'), {
				itemSelector: '.grid-item',
				columnWidth: 263,
				gutter: 10,
			});
			msnry.layout()
		};


		/* FILTER BY INTEREST GROUP */
		const bindInterestTypesClick = () => {
			const toggleInterests = (evt) => {

				let $currentlyToggling = $(evt.currentTarget);
				if($currentlyToggling.hasClass('active')) {
					//toggling button off
					$currentlyToggling.siblings('.interest__item__hook')
						.find('.interest__list').remove();
				} else {
					const interestTypeName = $currentlyToggling
						.find('.interest-group__item--name strong')
						.text();
					$.when(

						getFullInterestsByInterestType(window.parmStudyId, window.parmRuleId, interestTypeName),
						getFullPostsByInterestType(window.parmStudyId, window.parmRuleId, interestTypeName)
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



				//reset with all posts if no interest type is selected
				if($('.interest-group__item.active').size() === 0){

					getPosts(window.parmStudyId, window.parmRuleId)
						.then( postsRes => {
							setLocalStorage(GLOBAL_STORE_NAME, 'postsData', postsRes);
							setLocalStorage(GLOBAL_STORE_NAME, 'currentlyShowingPostsFor', 'all');
							resetSortFilter();
							buildPosts();

						});
				}
			};

			const updateInterests = (interestData, $currentlyToggling) => {

				interestData = processInterests(interestData);

				if(interestData.length === 0){
					return;
				}

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
					$this.addClass('active');
					$('.interest__item').not($this).removeClass('active')
					getFullPostsByInterest(window.parmStudyId, window.parmRuleId, interestId)
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





		/* PAGE LOAD */
		//const qs = () => (undefined); //debug -- qs is a global function in prod
		const onLoadStudyId = 6053840322354;//qs['aud_id'] || 6053840322354;
		$.when(
			getFullInterestTypes(onLoadStudyId, window.parmRuleId),
			getPosts(onLoadStudyId, window.parmRuleId)
		)
		.done((interestTypesRes, postsRes) => {
			// console.log('posts content bundle >>> page load');
			setLocalStorage(GLOBAL_STORE_NAME, 'interestTypesData', interestTypesRes[0]);
			setLocalStorage(GLOBAL_STORE_NAME, 'postsData', postsRes[0]);
			buildInterestFilters(true, interestTypesRes[0]);
			setLocalStorage(GLOBAL_STORE_NAME, 'currentlyShowingPostsFor', 'all');
			buildPosts();
		});





		/* FILTER BY INTEREST */
		const bindInterestClick = () => {
			resetSortFilter();
		};


		$('body').on('change', '#sort-posts--control', evt => {
			// window.globalStore.sortDirection =
			setLocalStorage(GLOBAL_STORE_NAME, 'sortDirection', $(evt.currentTarget).children(':selected').val())
			buildPosts();
		});

		$('body').on('change', '#study-rule-select select', evt => {
			const $this = $(evt.currentTarget);
			const ruleId = $this.find('option:selected').val();
			$.when(
				getFullInterestTypes(window.parmStudyId, window.parmRuleId),
				getPosts(window.parmStudyId, window.parmRuleId)
			)
			.done((interestTypesRes, postsRes) => {
				// console.log('posts content bundle >>> page load');
				setLocalStorage(GLOBAL_STORE_NAME, 'interestTypesData', interestTypesRes[0]);
				setLocalStorage(GLOBAL_STORE_NAME, 'postsData', postsRes[0]);
				buildInterestFilters(false, interestTypesRes[0]);
				setLocalStorage(GLOBAL_STORE_NAME, 'currentlyShowingPostsFor', 'all');
				buildPosts();
			});

		});

		const resetSortFilter = () => {
			$('#sort-posts--control').val('NEWEST_FIRST');
			setLocalStorage(GLOBAL_STORE_NAME, 'sortDirection', 'NEWEST_FIRST');
		};

		const resetInterestTypeFilters = $currentlyToggling => {
			const $activeParent = $currentlyToggling.closest('.interest-group__item.active');
			const $toRemoveActiveStates = $('.interest-group__item.active').not($activeParent);
			$toRemoveActiveStates.children('.active').addBack().removeClass('active')
			$toRemoveActiveStates.find('.interest__list').remove();
		};

		const goToPage = (evt) => {
			const $this = $(evt.currentTarget);
			const pageId = $this.data().pageIndex;
			debugger;
			setLocalStorage(GLOBAL_STORE_NAME, 'displayedPageIndex', pageId);
			console.log('going to page', pageId);
			buildPosts();
		};

		 $( document ).ajaxStart( evt => {
		 	$('body').prepend('<span id="loading" style="position: absolute; left: 50%; top: 0;">loading...</span>');
		 });

		 $( document ).ajaxStop( evt => {
		 	$('#loading').remove();
		 });

		$('body').on('click', '[class^="pagination__control"]', goToPage);




		const handleXHRErr = (jqXHR, textStatus, errorThrown) => {
			console.error('xrh error', jqXHR);
			console.error('xrh error', textStatus);
			console.error('xrh error', errorThrown);
		};

	});


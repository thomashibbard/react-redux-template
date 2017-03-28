import { combineReducers } from 'redux';

const sort = (state = {}, action) => {
	let newState = {'new': 'state'};
	// switch (action.type) {
	// 	case 'SORT_AZ':
	// 		return {
	// 			...state,
	// 			posts.sort( (a, b) => {
	// 				return a.name.localeCompare(b.name);
	// 			})
	// 		}
	// 		break;
	// 	case 'SORT_ZA':
	// 		return {
	// 			...state,
	// 			posts.sort( (a, b) => {
	// 				return b.name.localeCompare(a.name);
	// 			})
	// 		}
	// }
	return newState;
};

const rootReducer = combineReducers({
	sort
});

export { sort };

export default rootReducer;

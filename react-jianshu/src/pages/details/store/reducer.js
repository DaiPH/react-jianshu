import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState=fromJS({
	title:'',
	content:''
});

export default (state=defaultState,action)=>{
	switch (action.type) {	
		case actionTypes.CHANGE_DETAIL:
			return state.merge({
				title:action.data.title,
				content:action.data.content
			})
		default:
			return state;
	}
}
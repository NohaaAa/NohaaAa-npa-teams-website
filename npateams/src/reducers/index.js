import { combineReducers } from 'redux';

export const teams = (state = {}, action) => {
    // console.log("ACTION", action);

    switch (action.type) {
        case 'ALL_TEAMS': {
            return { ...state, teamsList: action.payload }
        }

        case 'FILTER_TEAMS': {
            return { ...state, teamsList: action.payload }
        }

        case 'TEAM_DETAILS': {
            return { ...state, details: action.payload }
        }

        default: {
            return state;
        }
    }

}
export default combineReducers({
    teams
})
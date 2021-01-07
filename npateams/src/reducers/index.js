import { combineReducers } from 'redux';

export const teams = (state = {}, action) => {
    console.log("ACTION", action);

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
        case 'GET_POLL': {
            return { ...state, polls: action.payload }
        }
        case 'HOME': {
            return { ...state, homeUnits: action.payload }
        }
        case 'UPDATE_POLL': {
            return { ...state, homeUnits: action.payload }
        }

        case 'ADD_TEAM': {
            return { ...state, newTeam: action.payload }
        }

        case 'UPDATE_TEAM': {
            return { ...state, newTeam: action.payload }
        }

        case 'DELETE_TEAM': {
            return { ...state, deleteMsg: action.payload }
        }

        case 'ADD_SUBSCRIPTION': {
            return { ...state, sub: action.payload }
        }
        case 'UPLOAD_LOGO': {
            return { ...state, logo: action.payload }
        }

        default: {
            return state;
        }
    }

}
export default combineReducers({
    teams
})
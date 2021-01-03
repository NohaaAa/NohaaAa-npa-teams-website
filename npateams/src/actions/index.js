const baseURL = 'http://localhost:3030';

export const getAllTeams = async () => {

    let response = await fetch(`${baseURL}/teams`);
    let payload = await response.json();

    return {
        type: 'ALL_TEAMS',
        payload
    }
}

export const filterTeams = async (keyword) => {

    let response = await fetch(`${baseURL}/teams`);
    let payload = await response.json();

    return {
        type: 'FILTER_TEAMS',
        payload: payload.filter((teams) => {
            return teams.name.toLowerCase().includes(keyword.toLowerCase());
        })
    }
}

export const getDetails = async (id) => {

    let response = await fetch(`${baseURL}/teams/${id}`);
    let payload = await response.json();

    return {
        type: 'TEAM_DETAILS',
        payload
    }
}
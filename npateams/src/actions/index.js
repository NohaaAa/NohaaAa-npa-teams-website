const baseURL = 'http://localhost:3030/api';

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

//add a team
export const addTeam = async (teamInfo) => {
    console.log(teamInfo)
    let res = await fetch(`${baseURL}/teams/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teamInfo)
    });

    let payload = await res.json();

    return {
        type: 'ADD_TEAM',
        payload
    }
}

//update a team
export const updateTeam = async (teamInfo, id) => {
    console.log(teamInfo)
    let res = await fetch(`${baseURL}/teams/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(teamInfo)
    });

    let payload = await res.json();

    return {
        type: 'UPDATE_TEAM',
        payload
    }
}

//delete a team
export const deleteTeam = async (id) => {

    let res = await fetch(`${baseURL}/teams/${id}`, {
        method: "DELETE",
    });

    let payload = await res.json();

    return {
        type: 'DELETE_TEAM',
        payload
    }
}

//get all home units 
export const getHomeUnits = async () => {

    let response = await fetch(`${baseURL}/home`);
    let payload = await response.json();

    return {
        type: 'HOME',
        payload
    }
}
//update a poll info
export const updatePoll = async (pollInfo, id) => {
    console.log(pollInfo)
    let res = await fetch(`${baseURL}/home/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pollInfo)
    });

    let payload = await res.json();

    return {
        type: 'UPDATE_POLL',
        payload
    }
}

export const addSubscription = async (mail) => {
    console.log(mail)
    let res = await fetch(`${baseURL}/subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 'email': mail })
    });

    let payload = await res.json();

    return {
        type: 'ADD_SUBSCRIPTION',
        payload
    }
}

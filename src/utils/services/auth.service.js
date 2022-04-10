import { API_URL } from '../../config'

function login(username, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${API_URL}/admin/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        })
        .catch(error => {
            return error
        })
}

function register(data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
    };

    return fetch(`${API_URL}/admin/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return user;
        })
        .catch(error => {
            return error
        })
}

function logout() {
    // remove user from local storage to log user out
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export default {
    login,
    logout,
    register
}
export function authHeader() {
    const user = 'something to be stored in redux store'

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
import * as constants from './constants';

export const increment = (payload = 1) => ({
    type: constants.INCREMENT,
    payload
});

function emulateRequest() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 2000);
    })
}

export const asyncIncrement = payload => (dispatch) => {
    emulateRequest().
        then(() => dispatch(increment(payload)));
};
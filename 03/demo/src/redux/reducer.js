import * as constants from './constants';

export function reducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case constants.INCREMENT: {
            return {
                counter: state.counter + action.payload
            }
        }
        default: {
            return state;
        }
    }
}
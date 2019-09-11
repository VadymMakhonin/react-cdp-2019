export function createStore(reducer) {
    let state;
    let listeners = [];

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener);

        return () => {
            listeners = listeners
                .filter(callback => callback !== listener);
        }
    }

    function dispatch(action) {
        const newState = reducer(state, action);

        if (newState !== state) {
            state = newState;

            listeners.map(callback => callback());
        }
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}
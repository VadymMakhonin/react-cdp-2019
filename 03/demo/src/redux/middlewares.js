export const logger = store => next => action => {
    console.log('Prev state: ', store.getState());
    next(action);
    console.log('Current state: ', store.getState());
};

export const thunk = store => next => action => {
    if (typeof action === 'function') {
        action(store.dispatch);
    } else {
        next(action);
    }
};

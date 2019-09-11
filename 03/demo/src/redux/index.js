import { store } from './store';
import * as actions from './actions';

const incButton = document.getElementById('inc');
const inc100Button = document.getElementById('inc100');
const asyncInc100Button = document.getElementById('asyncInc100');
const decButton = document.getElementById('dec');
const counter = document.getElementById('counter');

store.subscribe(() => {
    counter.innerHTML = store.getState().counter;
});

incButton.addEventListener('click', () => {
    store.dispatch(actions.increment());
});

inc100Button.addEventListener('click', () => {
    store.dispatch(actions.increment(100));
});

asyncInc100Button.addEventListener('click', () => {
    store.dispatch(actions.asyncIncrement(100));
});


decButton.addEventListener('click', () => {
    store.dispatch(actions.increment(-1));
});
import {getTodos} from './todos';

jest.useFakeTimers();

describe('Todos service', () => {
    it('method getTodos should call setTimeout', () => {
        const data = getTodos();
        expect(setTimeout).toHaveBeenCalledTimes(1);
    });

    it('method getTodos return promise', () => {
        jest.runAllTimers();
        getTodos().then(data => {
            expect(data).toHaveLength(1);
        })
    }); 
});
import {dateFormater, getId} from './common';

jest.mock('uuid', () => ({
    v1: jest.fn(() => Math.random())
}));

describe('DateFormater', () => {
    it('should correct format date', () => {
        const day = 10, month = 2, year = 2019;
        const date = new Date(year, month, day);
        const formatDate = dateFormater(date);
        expect(formatDate).toBe(`${day}.${month + 1}.${year}`);
    });
});

describe('Generator Id', () => {
    it('should be return uniq id', () => {
        expect(getId()).not.toBe(getId());
    });
});

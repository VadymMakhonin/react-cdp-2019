import {v1} from 'uuid';

export const dateFormater = (time) => {
    const date = new Date(time);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export const getId = () => v1();
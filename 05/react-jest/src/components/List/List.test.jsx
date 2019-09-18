import React from 'react';
import {List} from './List';
import {Item} from './../Item/Item';
import {shallow, mount} from 'enzyme';

describe('List component', () => {

    it('should be render text "Todos is empty"', () => {
        const todos = [];
        const component = shallow(<List todos={todos} />);
        expect(component).toMatchSnapshot();
    });

    it('should be render two elements', () => {
        const todos = [{title: 'test'}, {title: 'test 3'}];
        const component = shallow(<List todos={todos} />);
        expect(component).toMatchSnapshot();
    });

    it('should be render two component - Item', () => {
        const todos = [{title: 'test', id: Math.random()}, {title: 'test 2', id: Math.random()}];
        const component = mount(<List todos={todos} />);
        expect(component.find(Item).length).toBe(2);
    });
})
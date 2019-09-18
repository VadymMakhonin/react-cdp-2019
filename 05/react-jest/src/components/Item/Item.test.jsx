import React from 'react';
import {Item} from './Item';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';


describe('Item component', () => {

    let todo;

    beforeAll(() => {
        Date.now = jest.fn(() => Date.UTC(2017, 0, 1, 1, 1, 1, 1));

        todo = {
            title: 'test',
            id: 1,
            complited: false,
            created: Date.now()
        }
    });

    it('should be render correctly', () => {
        const component = renderer.create(<item todo={todo} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should be call onRemove', () => {
        const onRemove = jest.fn();
        const component = mount(<Item todo={todo} onRemove={onRemove}/>);
        const btn = component.find('.btn').simulate('click');
        expect(onRemove).toHaveBeenCalled();
    });
})
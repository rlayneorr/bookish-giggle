/* @jest-environment jsdom */
import 'jsdom-global/register'; 
import React from 'react';
import RestaurantComponent from './restaurant.component';
import { Restaurant } from './restaurant';
import * as nav from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native';
import 'jest-enzyme';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Create a fake dom to host our react app so that Enzyme can mount things
// const { JSDOM } = require('jsdom');

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// global.document = jsdom.window.document;
// global.window = jsdom.window;


Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
    nav.useNavigation = jest.fn().mockReturnValue({ navigate: jest.fn() });
});

test('the name displays correctly', () => {
    const restaurant = new Restaurant();
    restaurant.name = 'test';
    const wrapper = Enzyme.mount(
        <NavigationContainer>
            <RestaurantComponent data={restaurant}></RestaurantComponent>
        </NavigationContainer>
    );
});

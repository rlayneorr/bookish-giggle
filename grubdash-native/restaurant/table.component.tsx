import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Restaurant } from './restaurant';
import {RestaurantState} from '../store/store';
import { FlatList } from 'react-native-gesture-handler';
import RestaurantComponent from './restaurant.component';
import { thunkGetRestaurants } from '../store/thunks';
import { Text } from 'react-native';

export default function TableComponent() {
    // Create a constant that is of the type of state.restaurants
    const selectRestaurant = (state: RestaurantState) => state.restaurants;
    // Retrieve the restaurants array from redux.
    const restaurants = useSelector(selectRestaurant);
    // Get access to the dispatcher. Feed the dispatcher Actions for your Reducer.
    const dispatch = useDispatch();

    // retrieve the initial state (the restaurants) from the server
    useEffect(() => {
        dispatch(thunkGetRestaurants())
    }, [dispatch]);

    // FlatList is a list of objects that will render only when they're on screen.
    /* 
        data - The array of data we wish to render
        renderItem- a callback function we use to render each item in the list
        keyExtractor - a callback function that assigns a key to each item in the list    
    */
    return (
        <>
        { restaurants && restaurants.length ? 
        <FlatList
            data={restaurants}
            renderItem={({item}) => (<RestaurantComponent data={item}></RestaurantComponent>)}
            keyExtractor={(item)=>item.name}/>
        : <Text>Loading</Text>}
        </>
    );
}

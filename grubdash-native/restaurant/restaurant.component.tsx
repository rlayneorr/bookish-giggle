import React from 'react';
import { Restaurant } from './restaurant';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from '../global-styles';
// import { useDispatch } from 'react-redux';
// import { changeRestaurant } from '../store/actions';

// Define the properties that are being passed to this component
interface RestaurantProps {
    data: Restaurant;
}
// View Component with only a little functionality
function RestaurantComponent({data}: RestaurantProps) {
    // Using the useNavigation hook to get access to the ReactNavigation component.
    const nav = useNavigation();
    // const dispatch = useDispatch();

    // callback function for our button.
    function goToRestaurant() {
        // dispatch(changeRestaurant(props.data));
        // passing our restaurant to the RestaurantDetail screen and going there.
        nav.navigate('RestaurantDetail', data);
    }

    // The JSX we wish to render.
    return (
        <View style={styles.container}>
            {data.img ? 
            <Image style={styles.logo} source={{ uri: data.img }}></Image> : <Text>No Image</Text>}
            <Text>{data.name}</Text>
            <Text>{data.eta}</Text>
            <Text>Rating: {data.rating} stars</Text>
            <Text>{data.type}</Text>
            <Button title='restdetail' onPress={goToRestaurant} />
        </View>
    );
}

export default RestaurantComponent;

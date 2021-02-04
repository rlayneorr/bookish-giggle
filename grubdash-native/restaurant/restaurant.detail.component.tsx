import React from 'react';
import { UserState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, Button } from 'react-native';
import restaurantService from './restaurant.service';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { changeRestaurant } from '../store/actions';
import { Restaurant } from './restaurant';
import { StackParams } from '../router/router.component';
import styles from '../global-styles';
import { thunkGetRestaurants } from '../store/thunks';

interface Props {
    route: RouteProp<StackParams, 'RestaurantDetail'>;
}
export default function RestaurantDetailComponent(props: Props) {
    const nav = useNavigation();
    // Utilize redux to retrieve the value
    //const restaurantSelector = (state: RestaurantState) => state.restaurant;
    //const rest = useSelector(restaurantSelector);
    const userContext = useSelector((state: UserState) => state.user);
    const dispatch = useDispatch();

    // retrieve the value from the navigator.
    const rest = props.route.params;

    function handleDelete() {
        restaurantService.deleteRestaurant(rest.name).then(() => {
            dispatch(changeRestaurant(new Restaurant()));
            dispatch(thunkGetRestaurants());
            nav.navigate('Restaurants');
        });
    }

    return (
        <View style={styles.container}>
            { rest.img ? <Image style={styles.logo} source={{ uri: rest.img }}></Image> : <Text>No Image</Text>}
            <Text testID='rest-name'>{rest.name}</Text>
            <Text>{rest.eta}</Text>
            <Text>{rest.rating}</Text>
            <Text>{rest.type}</Text>
            <Text>{rest.chef}</Text>
            <View>
                <Text>Menu:</Text>
                {rest.menu.map((item) => {
                    return (
                        <View key={item.name}>
                            <Text>{`${item.name}`}</Text>
                            <Text>{`price:$${item.price}`}</Text>
                        </View>
                    );
                })}
                <Text>{JSON.stringify(rest.hours)}</Text>
            </View>
            {userContext.role === 'Employee' && (
                <>
                    <Button onPress={handleDelete} title='Delete Restaurant' />
                </>
            )}
        </View>
    );
}

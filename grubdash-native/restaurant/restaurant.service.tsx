import axios from 'axios';
import { Restaurant } from './restaurant';

class RestaurantService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'https://k8n63gmyw8.execute-api.us-west-2.amazonaws.com/default/restaurants';
    }

    getRestaurants(): Promise<Restaurant []> {
        return axios.get(this.URI).then(result => result.data).catch((err) => {console.error(err)});
    }
    getRestaurant(id: string): Promise<Restaurant> {
        return axios.get(this.URI+'/'+id).then(result=>result.data);
    }
    addRestaurant(r: Restaurant): Promise<null> {
        return axios.post(this.URI, r).then(result => null);
    }
    updateRestaurant(r: Restaurant): Promise<null> {
        return axios.put(this.URI, r).then(result => null);
    }

    deleteRestaurant(id: string): Promise<null> {
        console.log(id);
        return axios.delete(this.URI+'/'+id, {withCredentials: true}).then(result => null)
    }
}

export default new RestaurantService();
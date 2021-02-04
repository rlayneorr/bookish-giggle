import axios from 'axios';
import { User } from './user';
//import { Auth } from 'aws-amplify';

class UserService {
    private URI: string;
    constructor() {
        // URL of the express server
        this.URI = 'http://34.219.142.203:3000/users';
    }
    // async signUp(username: string, password: string, email: string, role: string) {
    //     try {
    //         const { user } = await Auth.signUp({
    //             username,
    //             password,
    //             attributes: {
    //                 email,          // optional
    //                 'custom:role': role
    //             }
    //         });
    //         console.log(user);
    //     } catch (error) {
    //         console.log('error signing up:', error);
    //     }
    // }
    // async signIn(username: string, password: string) {
    //     try {
    //         return await Auth.signIn(username, password);
    //     } catch (error) {
    //         console.log('error signing in: ', error);
    //     }
    // }

    // async signOut() {
    //     try{
    //         await Auth.signOut();
    //     } catch(error) {
    //         console.log('error in sign out: ', error)
    //     }
    // }
    // getLogin(): Promise<User> {
    //     // withCredentials sends our cookies with the request.
    //     return axios.get(this.URI, {withCredentials: true}).then(result=>{
    //         console.log(result);
    //         return result.data
    //     });
    // }

    signIn(user: User): Promise<User> {
        return axios.post(this.URI, user, {withCredentials: true}).then(result => result.data).catch(err => err);
    }
    signOut(): Promise<null> {
        return axios.delete(this.URI, {withCredentials: true}).then(result => null);
    }
}

export default new UserService();
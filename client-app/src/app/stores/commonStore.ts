import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError"

export default class CommonStore {
    error: ServerError | null = null;
    token: string | null | undefined = localStorage.getItem('jwt');
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);
        console.log("Initial token from localStorage in commonStore:", localStorage.getItem('jwt'));

        reaction(
            () => this.token,
            token => {
                console.log("Token updated in MOBX commonstore: ", token);
                if (token) {
                    localStorage.setItem('jwt', token)
                } else {
                    localStorage.removeItem('jwt')
                }
            }
        )
    }

    setServerError(error: ServerError) {
        this.error = error;
    }

    setToken = (token: string | null) => {
        console.log("2. Setting token in CommonStore:", token);
        this.token = token;
        console.log("3. token set successfully");
    }
    setAppLoaded = () => {
        this.appLoaded = true;
    }
}
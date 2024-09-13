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
                    try {
                        localStorage.setItem('jwt', token);
                        console.log("Token stored in localStorage");
                    } catch (error) {
                        console.error("Error storing token in localStorage:", error);
                    }
                } else {
                    try {
                        localStorage.removeItem('jwt');
                        console.log("Token removed from localStorage");
                    } catch (error) {
                        console.error("Error removing token from localStorage:", error);
                    }
                }
            }
        );
    }

    setServerError(error: ServerError) {
        this.error = error;
    }

    setToken = (token: string | null) => {
        if (token !== undefined) {
            console.log("Setting token in CommonStore:", token);
            this.token = token;
        } else {
            console.error("Received undefined token. Token not set.");
        }
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}
import { makeAutoObservable, runInAction } from "mobx";
import { User, UserFormValues } from "../models/user";
import agent from "../api/agent";
import { store } from "./store";
import { router } from "../router/routes";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            console.log("0. Login response userStore:", user);
            console.log("1. User token in userStore: ", user.token);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate('/activities');
            console.log("4. User identified, routing to /activities");
            console.log("5. ", this.user?.username, " equal to ", user.username, " token saved to localStorage as: ", user.token);
            store.modalStore.closeModal();
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }

    register = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            router.navigate('/activities');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate('/');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);

        } catch (error) {
            console.log(error);
        }
    }
    setImage = (image: string) => {
        if (this.user) this.user.image = image;
    }
    setDisplayName = (name: string) => {
        if (this.user) this.user.displayName = name;
    }
}
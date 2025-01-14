import conf from "@/app/conf/conf";
import { Account, Client } from "appwrite";


type LoginUserAccount = {
    email: string;
    password: string;
};

const appwriteClient = new Client();
appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService{
    async login({ email, password }: LoginUserAccount){
        try {
            const session = await account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.log("Appwrite authentication error :: login ",error)
            throw error;
        }
    }
    async isLoggedIn(){
        try {
            const data = await account.get();
            return Boolean(data);
        } catch (error) {
            console.log("Error in isLoggedin method ",error);
            throw error;
        }
    }

    async logout(){
        try {
            return await account.deleteSession("current");
        } catch (error) {
            console.log("Authentication error :: logout ",error);
            throw error;
        }
    }
};

const appwriteService = new AppwriteService()
export default appwriteService;
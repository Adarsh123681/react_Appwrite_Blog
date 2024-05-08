import { Client, Account , Databases} from "appwrite";
const client = new Client();
export const databases = new Databases(client)
export const account = new Account(client);
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID
  );

import { Model } from "sequelize-typescript";
interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    username: string;
    email: string;
    password: string;
}
export {};

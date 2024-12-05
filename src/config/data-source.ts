import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/users";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "chat_app",
    synchronize: true,  // For development, set to false in production
    logging: true,
    entities: [User],
});

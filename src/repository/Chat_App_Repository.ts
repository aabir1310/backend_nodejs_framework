import { injectable } from 'inversify';
import { IDatabase } from 'pg-promise';
//import { Db } from 'mongodb';
//import  { PostgresDBClient } from '../config/PostgresDBClient';
//import { MongoDBClient } from '../config/MongoDBClient';
import { SQLProvider } from './SQLQueries';
import { array } from 'joi';
import { Schemas } from 'aws-sdk';
const postgreSqlQuery = SQLProvider.query;
import {User} from '../entities/users'
import {AppDataSource} from '../config/data-source'


@injectable()
export class Chat_App_Repository {
    private UserRepository = AppDataSource.getRepository(User);
  //  private mongoDb: Db;
    private postgresDb: IDatabase<any>;

    constructor() {
        // MongoDBClient.getMongoConnection(async (connection) => {
        //     this.mongoDb = connection;
        // });

        // PostgresDBClient.getPostgresConnection((connection) => {
        //     this.postgresDb = connection
        // });
    }


   //removed help and compliance schema changesd to common
    public async addUser(data) {
        const user = this.UserRepository.create(data); // Prepare a new user
        return await this.UserRepository.save(user);

    }

    public async getUser() {
        const user = await this.UserRepository.find(); // Prepare a new user
        return  user

    }

    public async updateUser(id ,data) {
        console.log(id,data)
        const user = await this.UserRepository.update({id:id},data); // Prepare a new user
        return  user

    }

    public async deleteUser(id) {
        console.log(id)
        const user = await this.UserRepository.delete({id:id }); // Prepare a new user
        return  user

    }





  

}


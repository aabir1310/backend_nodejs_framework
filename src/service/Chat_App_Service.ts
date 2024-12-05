import { injectable, inject, id } from 'inversify';
import { Request, Response } from 'express';
import TYPES from '../constant/Types';
import * as multer from  "multer";
import * as ibm from 'ibm-cos-sdk'
import { SQLProvider } from "../repository/SQLQueries";
import * as moment  from 'moment';
const xlsx = require('xlsx');
// const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
import { Chat_App_Repository } from '../repository/Chat_App_Repository';
import { cookies } from 'inversify-express-utils';
import { compile, x } from 'joi';
import {AppDataSource} from '../config/data-source'
import {User} from '../entities/users'


@injectable()
export class Chat_App_Service {
  private UserRepository = AppDataSource.getRepository(User);


  @inject(TYPES.Chat_App_Repository) private readonly chatAppRepo: Chat_App_Repository;
   
  public async addUser(request:Request,response: Response ){
    const getUserData=request.body;

    const user =await this.chatAppRepo.addUser(getUserData)
  return response.status(200).send({
    "message": "User Created "
  })
    
  }

  public async getUser(request:Request,response: Response ){
    //const getUserData=request.body;

    const user =await this.chatAppRepo.getUser()
  return response.status(200).send({
     user
  });
    
  }

  public async updateUser(request:Request,response: Response ){
    const UserId=request.headers.id;
    const updateData=request.body

    const user =await this.chatAppRepo.updateUser(UserId,updateData)
  return response.status(200).send({
     user
  });
    
  }

  public async deleteUser(request:Request,response: Response ){
    const UserId=request.headers.id;

    const user =await this.chatAppRepo.deleteUser(UserId)
  return response.status(200).send({
     user
  });
    
  }


  
}
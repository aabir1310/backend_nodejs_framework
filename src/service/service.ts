import { injectable, inject, id } from 'inversify';
import { Request, Response } from 'express';
import TYPES from '../constant/Types';
const path = require('path');
const { v4: uuidv4 } = require('uuid');
import { repository } from '../repository/Repository';
import {AppDataSource} from '../config/data-source'
import {User} from '../entities/users'


@injectable()
export class Service {
  private UserRepository = AppDataSource.getRepository(User);


  @inject(TYPES.repository) private readonly chatAppRepo: repository;
   
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
import { injectable, inject, id } from 'inversify';
import { Request, Response } from 'express';
import TYPES from '../constant/Types';
const path = require('path');
const { v4: uuidv4 } = require('uuid');
import { repository } from '../repository/Repository';
import {AppDataSource} from '../config/data-source'
import {User} from '../entities/users'
import { sendOtp } from '../utility/external_apis';



@injectable()
export class Service {
  private UserRepository = AppDataSource.getRepository(User);


  @inject(TYPES.repository) private readonly chatAppRepo: repository;
   
  public async addUser(request:Request,response: Response ){
    const getUserData=request.body;
    console.log(getUserData.username)
    //await sendOtp(getUserData.phone)
    const user =await this.chatAppRepo.addUser(getUserData);
    const a = await sendOtp(getUserData.phone,getUserData.username)
    console.log("OTP FROM EX",a)
    await this.chatAppRepo.addOtp(getUserData.username,a)

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

  public async verifyOtp(request:Request,response: Response){
    const data=request.query
    console.log("****",data,"****")
    const otp=await this.chatAppRepo.verifyOtp(data.number,data.otp)
    console.log(otp ,"is this ")
    if (data.otp === otp.Otp){
     return  response.send({
        "message":"OTP Verified sucessfully"
      })
    }else{
      return response.send({
        "message":"OTP Not correct"
      })
    }
}


  
}
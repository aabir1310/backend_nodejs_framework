import { controller, httpDelete, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { inject, injectable } from 'inversify';
import { Request, Response, NextFunction, request, response } from 'express';
import { Chat_App_Service } from '../service/Chat_App_Service';
import { validate, SchemaType, RequestReaderType, RequestReader } from '../validate';
import TYPES from '../constant/Types';
import { authenticateJwt } from '../middleware/authenticateJwt';



@controller('/api/v1.0')
export class Chat_App_Controller {

  @inject(TYPES.Chat_App_Service) private chatAppService: Chat_App_Service;


  @httpPost('/add/user')
    public async addUser(request:Request,response:Response){
      console.log("Hey hey ")
     return this.chatAppService.addUser(request, response);
    
    };

  @httpGet('/getUser')
    public async getUser(request:Request,response:Response)
    {
      return this.chatAppService.getUser(request, response);
    
    };

  @httpGet('/updateUser')
    public async updateUser(request:Request,response:Response)
    {
      return this.chatAppService.updateUser(request, response);
    
    };
    
  @httpDelete('/deleteUser')
    public async deleteUser(request:Request,response:Response)
    {
      return this.chatAppService.deleteUser(request, response);
    
    }




};



import { Request, Response  } from "express";
import {CreateUserService} from "../services/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {

      
        const { name, email, cpf, rg, pj, password} = request.body;
  
        const createUserService = new CreateUserService();
    
        const user = await createUserService.test( {name, email, cpf, rg, pj, password});
    
        return response.json(user);
 
      }

    }
  
  
  export { CreateUserController };
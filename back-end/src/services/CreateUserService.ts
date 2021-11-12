import { UsersRepositories } from "../repositories/UserRepositories";
import {getCustomRepository} from "typeorm"

interface IUserRequest {
    name: string;
    email: string;
    cpf: string;
    rg: string;
    pj: boolean;
    
  }
  
  class CreateUserService {
    
    async test({name, email, cpf, rg, pj}: IUserRequest) {
      const usersRepository = getCustomRepository(UsersRepositories);
  
  
      if (!email) {
        throw new Error("Email incorrect");
      }
  
      const userAlreadyExists = await usersRepository.findOne({
        where:[
          {email: email},
          {cpf: cpf},
          {rg: rg}
        ]
      });


      if (userAlreadyExists) {
        throw new Error("Unique data already in use");
      } 
        
      
  
      const user = usersRepository.create({
        email,
        name,
        cpf,
        rg,
        pj
      });

      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export { CreateUserService };



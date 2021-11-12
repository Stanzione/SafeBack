import { UsersRepositories } from "../repositories/UserRepositories";
import {getCustomRepository} from "typeorm"
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    cpf: string;
    rg: string;
    pj: boolean;
    password: string;
    
  }
  
  class CreateUserService {
    
    async test({name, email, cpf, rg, pj, password}: IUserRequest) {
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
        
      const passwordHash = await hash(password, 8)
  
      const user = usersRepository.create({
        email,
        name,
        cpf,
        rg,
        pj,
        password: passwordHash,
      });

      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export { CreateUserService };



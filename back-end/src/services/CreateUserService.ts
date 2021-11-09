import { UsersRepositories } from "../repositories/UserRepositories";
import {getCustomRepository, getRepository} from "typeorm"
import { User } from "../entities/User";

interface IUserRequest {
    name: string;
    email: string;

    
  }
  
  class CreateUserService {
    
    async test(name: "varchar", email: "varchar", cpf : "varchar", rg : "varchar") {
      const usersRepository = getRepository(User);
  
      console.log("Email", email);
  
      if (!email) {
        throw new Error("Email incorrect");
      }
  
      const userAlreadyExists = await usersRepository.findOne({
        email,
      });

      const userAlreadyExists2 = await usersRepository.findOne({
        cpf,
      });

      const userAlreadyExists3 = await usersRepository.findOne({
        rg,
      });
  
      if (userAlreadyExists || userAlreadyExists2 || userAlreadyExists3) {
        throw new Error("User already exists");
      }
  
      const user = new User;
  
      user.email = email;
      user.name = name;
      user.cpf = cpf;
      user.rg = rg;

      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export { CreateUserService };



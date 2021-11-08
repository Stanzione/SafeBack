import { UsersRepositories } from "../repositories/UserRepositories";
import {getCustomRepository, getRepository} from "typeorm"
import { User } from "../entities/User";

interface IUserRequest {
    name: string;
    email: string;
    
  }
  
  class CreateUserService {
    
    async teste(name: "varchar", email: "varchar") {
      const usersRepository = getRepository(User);
  
      console.log("Email", email);
  
      if (!email) {
        throw new Error("Email incorrect");
      }
  
      const userAlreadyExists = await usersRepository.findOne({
        email,
      });
  
      if (userAlreadyExists) {
        throw new Error("User already exists");
      }
  
      const user = new User;
  
      user.email = email;
      user.name = name

      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export { CreateUserService };



import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UserRepositories"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async test({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const userExists = await usersRepositories.findOne({
            email,
        })

        if (!userExists) {
            throw new Error("Email or Password incorrect");
        }

        const passwordCorrect = await compare(password, userExists.password);

        if (!passwordCorrect) {
            throw new Error("Email or Password incorrect");
        }

        const token = sign({
            email: userExists.email
        }, "69ac75cbd4a33fe0c9cbdc5f74b1b8d1",{  
            
            subject : userExists.id, 
            expiresIn: "1d",
        
        });

        return token;

    }

}

export{AuthenticateUserService}
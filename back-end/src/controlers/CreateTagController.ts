import {Request, Response} from "express";
import { CreateTagService } from "../services/CreateTagService";


class CreateTagController {
    async handle(request: Request, response: Response){

        const { name, assinatura} = request.body;

        const createTagService = new CreateTagService();

        const tag = await createTagService.test(name, assinatura);

        return response.json(tag);
    }
}

export {CreateTagController};
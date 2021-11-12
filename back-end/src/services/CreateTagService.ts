import { getCustomRepository, getRepository } from "typeorm"
import {TagsRepositories} from "../repositories/TagRepositories"
import { Tag} from "../entities/Tag"
class CreateTagService {

    async test(name: "varchar", assinatura: "varchar"){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        var teste = 'media';
        var teste2 = 'simples';
        var teste3 = 'avancada';

        if (assinatura !== teste2 && assinatura !== teste && assinatura !== teste3 ) {
            throw new Error("Incorrect sign type!");
        }

        if (!name) {
            throw new Error("Need a name!");
        }

        const contractAlreadyExists = await tagsRepositories.findOne({
            name,
        });

        if (contractAlreadyExists) {
            throw new Error("Contract Already exists");
        }

        const tag = tagsRepositories.create({
            name,
            assinatura
        });


        await tagsRepositories.save(tag);
        
        return tag;


    }
}

export{CreateTagService}
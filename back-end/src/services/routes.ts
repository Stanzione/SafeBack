import { Router } from "express";
import { CreateUserController } from "../controlers/CreateUserController";
import { CreateTagController } from "../controlers/CreateTagController";
import { AuthenticateUserController } from "../controlers/AuthenticateUserController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
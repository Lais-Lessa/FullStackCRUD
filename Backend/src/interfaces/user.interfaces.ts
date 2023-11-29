import { z } from "zod";
import { userCreateSchema, userReadSchema, userReturnSchema } from "../schemas/user.schemas";
import { Repository } from "typeorm";
import { User } from "../entities/User.entity";


type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;

type UserRepo = Repository<User>;

export { UserCreate, UserRead, UserReturn, UserRepo };
import { compareSync } from "bcryptjs";
import { User } from "../entities/User.entity";
import { UserCreate } from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";

export const userAuthenticate = async (email: string, password: string): Promise<any | null> => {

  const user = await userRepo.findOne({ where: { email } });
  
  if (user && compareSync(password, user.password)) {

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      createdAt: user.createdAt,
    };

    return userWithoutPassword; 
  }

  return null; 
};
  
export const userCreate = async (payload: UserCreate) => {
  const { email } = payload; 

  
  const existingUser = await userRepo.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('Este e-mail já está em uso.');
  }

  const user: User = userRepo.create({ ...payload });

  await userRepo.save(user);

  return user;
};

export const userRead = async () => {
    return await userRepo.find()
};

export const userDestroy = async (user: User): Promise<void> => {
    await userRepo.softRemove(user)
};


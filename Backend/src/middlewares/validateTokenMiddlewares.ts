import { Request, Response, NextFunction } from 'express';
import AppError from '../error';
import { verify } from 'jsonwebtoken';


export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization
    
    if(!authorization){

      throw new AppError("Missing bearer token", 401)
    }

    const token = authorization.split(" ")[1]
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
      throw new AppError('Internal server error', 500);
    }

    verify(token, secretKey, (error, decoded: any) => {
      
      if(error){
        throw new AppError(error.message, 401)
      }

      res.locals.foundEntity = {id: decoded.userId, email: decoded.email}
    })
    
    return next();

  } catch (error) {
    return next(error)
  }
};
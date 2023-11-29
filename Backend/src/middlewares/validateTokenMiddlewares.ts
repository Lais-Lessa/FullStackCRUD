import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
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
    console.log(token)
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
      throw new AppError('Internal server error', 500);
    }

    verify(token, secretKey, (error, decoded: any) => {
      console.error('Error verifying token:', error);
      if(error){
        throw new AppError(error.message, 401)
      }

      res.locals.foundEntity = {id: decoded.userId, email: decoded.email}
      console.log(decoded)
    })
    
    return next();
  } catch (error) {

    return next(error)
  }
};
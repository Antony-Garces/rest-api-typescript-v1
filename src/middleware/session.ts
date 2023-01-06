import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";


const checkJwt = (req:RequestExt, res:Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as {id:string};
    if(!isUser){
      res.status(401);
      res.send("DONT_HAVE_VALID_JWT")
    } else {
      req.user = isUser;
      next();
    }
    
  } catch (error){
    console.log({error})
    res.status(402);
    res.send('SESSION_NO_VALID')
  }
}
export { checkJwt }
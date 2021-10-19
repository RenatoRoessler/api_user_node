import { NextFunction, Request, Response, Router } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";
import JWT from 'jsonwebtoken'
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import bearerAutheticationMiddleware from "../middlewares/bearer-authentication.middleware";

const authorizationRoute = Router()

authorizationRoute.post('token/validate', bearerAutheticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK)
})

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;
    if (!user) {
      throw new ForbiddenError('usuário não informado')
    }
    const jwpPayloda = { username: user.username }
    const jwtOptions = { subject: user?.uuid }
    const secretKey = 'my_secret_key'
    const jwt = JWT.sign(jwpPayloda, secretKey, jwtOptions)
    res.status(StatusCodes.OK).json({ token: jwt })
  } catch (err) {
    next(err)
  }

})



export default authorizationRoute;
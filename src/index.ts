
import express, { Request, Response, NextFunction } from 'express';
import basicAuthenticationMiddleware from './middlewares/basic-authentication.middleware';
import bearerAutheticationMiddleware from './middlewares/bearer-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();


// Configurações da applicação

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(authorizationRoute)

// Configurações dos Handles de error de
app.use(errorHandler)
// confugurações das rtoas
app.use(statusRoute)
app.use(bearerAutheticationMiddleware,usersRoute)
app.use(authorizationRoute)

// inicilização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!")
})
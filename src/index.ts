
import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

// Configurações da applicação
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
// confugurações das rtoas
app.use(usersRoute)
app.use(statusRoute)

// inicilização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!")
})